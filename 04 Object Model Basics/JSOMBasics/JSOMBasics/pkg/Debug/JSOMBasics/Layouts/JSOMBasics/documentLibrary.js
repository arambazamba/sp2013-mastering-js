function createFile(resultpanel) {
    var clientContext;
    var web;
    var list;
    var fci;
    var fileContent;

    clientContext = new SP.ClientContext.get_current();
    web = clientContext.get_web();    
    list = web.get_lists().getByTitle("Shared Documents");
    fci = new SP.FileCreationInformation();
    fci.set_url("my new file.txt");
    fci.set_content(new SP.Base64EncodedByteArray());
    fileContent = "The content of my new file";
    for (var i = 0; i < fileContent.length; i++) {

        fci.get_content().append(fileContent.charCodeAt(i));
    }
    this.newFile = list.get_rootFolder().get_files().add(fci);
    clientContext.load(this.newFile);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, successHandler),
        Function.createDelegate(this, errorHandler)
    );

    function successHandler() {
        resultpanel.innerHTML =
            "Go to the " +
            "<a href='../Lists/Shared Documents'>document library</a> " +
            "to see your new file.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}