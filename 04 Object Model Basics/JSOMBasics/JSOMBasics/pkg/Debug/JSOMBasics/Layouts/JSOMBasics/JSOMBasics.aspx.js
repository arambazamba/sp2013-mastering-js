$(document).ready(function () {
    console.log("script loaded by static reference");
});

function loadScript(script) {
    console.log("before loading script");
    LoadSodByKey(script, function () {
        console.log("script loaded");
        writeToLog();
    });
    writeToLog();
}

function usingClientContect() {
    var cctx;
    cctx = new SP.ClientContext();                      //Connect to the default context
    cctx = new SP.ClientContext("http://sp2013c/8085"); //Connect to a specific Url
    cctx = new SP.ClientContext("/sales");             //Connect to a subweb
}

function Batching() {
    var clientContext = new SP.ClientContext();
    this.web = clientContext.get_web();
    clientContext.load(web, 'Title', 'Created');
    var lists = web.get_lists();
    clientContext.load(lists);
    clientContext.executeQueryAsync(function() {
        console.log("success");
    }, function() {
        console.log("error");
    });
}

function exceptionHandling() {
    
    var template = SP.ListTemplateType.genericList;
    var desc = "Created programmatically to demonstrate JSOM error handling";

    var context = new SP.ClientContext();
    var listName = getRandomListName();

    var errScope = new SP.ExceptionHandlingScope(context);
    var scopeStart = errScope.startScope();

    var tryBlock = errScope.startTry();
    var theList = context.get_web().get_lists().getByTitle(listName);
    tryBlock.dispose();

    var catchBlock = errScope.startCatch();
    var listCI = new SP.ListCreationInformation();
    listCI.set_title(listName);
    listCI.set_templateType(template);
    listCI.set_description(desc);
    theList = context.get_web().get_lists().add(listCI);
    catchBlock.dispose();

    var finallyBlock = errScope.startFinally();
    context.load(theList);
    finallyBlock.dispose();

    scopeStart.dispose();

    context.executeQueryAsync(function() {
        if (errScope.get_hasException()) {
            console.log("List '" + listName + "' did not exist on the server and was created");
        }
        else {
            console.log("List '" + listName + "' retrieved");
        }
    }, onQueryFailed);
}

function onQueryFailed(sender, args) {
    console.log('Request failed. ' + args.get_message());
}