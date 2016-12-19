function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

function ReadPropsOfWeb() {
    console.log("chaned now");
    var clientContext = new SP.ClientContext.get_current();
    var web = clientContext.get_web();

    clientContext.load(web);
    clientContext.executeQueryAsync(function () {
        console.log('Title: ' + web.get_title() + ' Description: ' + web.get_description());
    }, onQueryFailed);
}


function getWebTemplates() {
    var clientContext = new SP.ClientContext.get_current();
    var web = clientContext.get_web();
    var templates = web.getAvailableWebTemplates(1033);
    clientContext.load(web);
    clientContext.load(templates);

    clientContext.executeQueryAsync(function () {
        var enumerator = templates.getEnumerator();
        while (enumerator.moveNext()) {
            var template = enumerator.get_current();
            console.log('Title: ' + template.get_title() + ' Name: ' + template.get_name());
        }
    }, onQueryFailed);
}

function UpdateWebProps() {
    var clientContext = new SP.ClientContext.get_current();
    var web = clientContext.get_web();
    web.set_title('Updated Web Site');
    web.set_description('This is an updated Web site.');
    web.update();
    clientContext.load(web, 'Title', 'Description');
    clientContext.executeQueryAsync(function () {
        console.log('Title: ' + web.get_title() + ' Description: ' + web.get_description());
    }, onQueryFailed);

}

function createWebsite() {

    var clientContext = new SP.ClientContext.get_current();
    var web = clientContext.get_web();
    var webCreationInfo = new SP.WebCreationInformation();
    webCreationInfo.set_title('My JSOM Web Site');
    webCreationInfo.set_description('Description of new Web site...');
    webCreationInfo.set_language(1033);
    webCreationInfo.set_url('MyJSOMWebSite');
    webCreationInfo.set_useSamePermissionsAsParentSite(true);
    webCreationInfo.set_webTemplate('STS#0');
    web.get_webs().add(webCreationInfo);
    web.update();
    
    clientContext.executeQueryAsync(function () { console.log("JSOM Web created"); }, onQueryFailed);
}

function writeToPropertyBag() {
    var clientContext = new SP.ClientContext.get_current();
    var web = clientContext.get_web();
    this.properties = web.get_allProperties();
    this.properties.set_item("myCustomProperty", "myCustomValue");
    clientContext.load(web);
    web.update();
    clientContext.executeQueryAsync(Function.createDelegate(this, getWebProperty), onQueryFailed);
}

function getWebProperty() {
    var val = web.properties.get_item("myCustomProperty");
}

function deleteWeb() {
    var clientContext = new SP.ClientContext.get_current();
    var site = clientContext.get_site();
    var web = site.openWeb("/MyJSOMWebSite");
    web.deleteObject();
    clientContext.load(site);
    clientContext.load(web);
    clientContext.executeQueryAsync(function() {
        console.log("Web deleted"); }, onQueryFailed);
}

function listWebs() {
    var clientContext = new SP.ClientContext.get_current();
    var webs = clientContext.get_web().get_webs();
    clientContext.load(webs);
    clientContext.executeQueryAsync(function () {
        console.log("Web deleted");
        var enumerator = webs.getEnumerator();
        while (enumerator.moveNext()) {
            var w = enumerator.get_current();
            console.log('Title: ' + w.get_title() + " URL:" + w.get_serverRelativeUrl());
        }
    }, onQueryFailed);
}

