
var itemId;

function createListItem() {
    var clientContext = new SP.ClientContext();
    var list = clientContext.get_web().get_lists().getByTitle('News');
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.li = list.addItem(itemCreateInfo);
    li.set_item('Title', 'My New Item!');
    li.set_item('Body', 'Hello World!');
    li.update();

    clientContext.load(li);
    clientContext.executeQueryAsync(function () {
            itemId = li.get_id();
            alert('Item created: ' + itemId);
        },
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function readListItem() {
    
    if (itemId!=null) {
        var clientContext = new SP.ClientContext();
        var list = clientContext.get_web().get_lists().getByTitle('News');
        var camlQuery = new SP.CamlQuery();
        camlQuery.set_viewXml('<Query><Where><Eq><FieldRef Name="ID" /><Value Type="Counter">' + itemId + '1</Value></Eq></Where></Query><View><RowLimit>100</RowLimit></View>');
        var collListItem = list.getItems(camlQuery);
        clientContext.load(collListItem, 'Include(Id, DisplayName, HasUniqueRoleAssignments)');
        clientContext.executeQueryAsync(
            function() {
                var liInfo = '';
                var listItemEnumerator = collListItem.getEnumerator();
                while (listItemEnumerator.moveNext()) {
                    var li = listItemEnumerator.get_current();
                    liInfo += '\nID: ' + li.get_id() +
                        'Title: ' + li.get_displayName() +
                        'Unique role assignments: ' +
                        li.get_hasUniqueRoleAssignments();
                }

                console.log(liInfo.toString());
            },onQueryFailed
        );
    }
}

function updateListItem() {

    if (itemId != null) {
        var clientContext = new SP.ClientContext();
        var list = clientContext.get_web().get_lists().getByTitle('News');
        var li = list.getItemById(itemId);
        console.log(li.li.get_displayName());

        li.set_item('Title', 'My Updated Title');
        li.update();

        clientContext.executeQueryAsync(function() {
            console.log("ListItem updated");
        }, onQueryFailed
        );
    }
}

function deleteListItem() {
    if (itemId!=null) {
        var clientContext = new SP.ClientContext();
        var list = clientContext.get_web().get_lists().getByTitle('Announcements');
        var li = list.getItemById(itemId);
        li.deleteObject();

        clientContext.executeQueryAsync(
            Function.createDelegate(this, this.onQuerySucceeded),
            Function.createDelegate(this, this.onQueryFailed)
        );
    }
}

function onQueryFailed(sender, args) {
    console.log('Request failed. ' + args.get_message());
}