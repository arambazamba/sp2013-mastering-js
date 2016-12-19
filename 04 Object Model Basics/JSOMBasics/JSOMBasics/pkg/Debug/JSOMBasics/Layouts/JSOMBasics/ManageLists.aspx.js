
var siteUrl = "http://sp2013b";
var listName = "My Announcements List";

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

function createList() {

    var clientContext = new SP.ClientContext(siteUrl);
    var web = clientContext.get_web();
    var listCreationInfo = new SP.ListCreationInformation();
    listCreationInfo.set_title(listName);
    listCreationInfo.set_templateType(SP.ListTemplateType.announcements);
    var list = web.get_lists().add(listCreationInfo);
    clientContext.load(list);
    clientContext.executeQueryAsync(function () { console.log("Create list done"); }, onQueryFailed);
}

function updateList() {
    var clientContext = new SP.ClientContext(siteUrl);
    var list = clientContext.get_web().get_lists().getByTitle(listName);
    list.set_description("The very cool Announcments list");
    list.update();
    clientContext.load(list);
    clientContext.executeQueryAsync(function () { console.log("Update list done"); }, onQueryFailed);
}

function addFieldToList() {
    var clientContext = new SP.ClientContext(siteUrl);

    var list = clientContext.get_web().get_lists().getByTitle(listName);
    this.fld = list.get_fields().addFieldAsXml('<Field DisplayName=\'MyField\' Type=\'Number\' />', true, SP.AddFieldOptions.defaultValue);
    var fieldNumber = clientContext.castTo(fld, SP.FieldNumber);
    fieldNumber.set_maximumValue(100);
    fieldNumber.set_minimumValue(35);
    fieldNumber.update();
    clientContext.load(fld);
    clientContext.executeQueryAsync(function () { console.log("Add field to list done"); }, onQueryFailed);
}

function deleteList() {
    var clientContext = new SP.ClientContext(siteUrl);
    var web = clientContext.get_web();
    var list = web.get_lists().getByTitle("News");
    list.deleteObject();
    clientContext.executeQueryAsync(function () { console.log("Delete list done"); }, onQueryFailed);
}

