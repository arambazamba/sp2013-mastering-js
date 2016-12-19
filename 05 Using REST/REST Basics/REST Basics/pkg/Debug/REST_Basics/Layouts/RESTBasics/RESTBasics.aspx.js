$(document).ready(function () {
    console.log("ready!");
});

//http://www.codeproject.com/Articles/990131/CRUD-Operation-to-List-Using-SharePoint-Rest-API

function doExpanding() {

    var url = "http://sp2013c/_api/lists/getByTitle('News')/Items?$select=LinkTitle,Author/Name&$expand=Author";

    $.ajax({
        url: url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        },
        success: function(data) {
            console.log(data.d);
        },
        error: function (msg) { console.log(msg) }
    });
}

function createList() {

    var body = JSON.stringify({
    '__metadata': { 'type': 'SP.List' },
    'AllowContentTypes': true,
    'BaseTemplate': 100,
    'ContentTypesEnabled': true,
    'Description': 'My REST List',
    'Title': 'MyRestList'
    });

    var digest = $("#__REQUESTDIGEST").val();
    var url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists";

    $.ajax({
        url: url,
        type: "POST",
        data: body,
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": digest
        },
        success: function (){ console.log("list created")},
        error: function (msg) { console.log(msg) }
    });
};

function updateList() {
    jQuery.ajax({
        url: _spPageContextInfo.webAbsoluteUrl +  "/_api/web/lists/GetByTitle('MyRestList')",
        type: "POST",
        data: JSON.stringify({ '__metadata': { 'type': 'SP.List' }, 'Title': 'My Rest List' }),
        headers: { 
            "X-HTTP-Method":"MERGE",
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*"
    },
        success: function (){ console.log("list renamed")},
        error: function (msg) { console.log(msg) }
    });
}

function addField() {

    //FieldTypeKind Values: https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.fieldtype.aspx

    jQuery.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('MyRestList')/Fields",
        type: "POST",
        data: JSON.stringify({ '__metadata': { 'type': 'SP.Field' }, 'Title': 'My Custom Field', 'FieldTypeKind': 2, 'Required': 'true', 'EnforceUniqueValues': 'false', 'StaticName': 'My Custom Field' }),
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*"
        },
        success: function () { console.log("field added") },
        error: function (msg) { console.log(msg) }
    });
}

function getListItemType(name) {
    return "SP.Data." + name[0].toUpperCase() + name.substring(1) + "ListItem";
}

function addListItem() {

    // Prepping our update
    var item = {
        "__metadata": { "type": getListItemType("MyRestList") },
        "Title": "CodedItem",
        "My_x0020_Custom_x0020_Field": "My Custom Value"
    };

    // Executing our add
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('MyRestList')/items",
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(item),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: function () { console.log("item added to list") },
        error: function (msg) { console.log(msg) }
    });

}

function getItems() {
$.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/lists/getByTitle('News')/Items?$select=Title",
    type: "GET",
    headers: {
        "Accept": "application/json;odata=verbose",
        "Content-Type": "application/json; odata=verbose"
    },
    success: function (data) {
        if (data.d.results) {
            // TODO: handle the data  
            console.log('handle the data');
        }
    },
    error: function (msg) { console.log(msg) }
});

}

function updateListItem() {
    var itemProperties = { 'Title': 'The REST News' };
    updateItem('News', 1, itemProperties, function () {
        console.log('item has been updated');
    }, function() {
        console.log('error');
    });
}

function updateItem(listTitle, listItemId, itemProperties, success, failure) {
    var listItemUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('" + listTitle + "')/items(" + listItemId + ")";
    var itemPayload = {
        '__metadata': { 'type': "SP.Data." + listTitle.charAt(0).toUpperCase() + listTitle.slice(1) + "ListItem" }
    };
    for (var prop in itemProperties) {
        itemPayload[prop] = itemProperties[prop];
    }
    updateJson(listItemUri, itemPayload, success, failure);
}

function updateJson(endpointUri, payload, success, error) {
    $.ajax({
        url: endpointUri,
        type: "POST",
        data: JSON.stringify(payload),
        contentType: "application/json;odata=verbose",
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "X-HTTP-Method": "MERGE",
            "If-Match": "*"
        },
        success: success,
        error: error
    });
}

function deleteListItem() {
    var id = 1;
    var url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('News')/items(" + id + ")";

    $.ajax({
        url: url,
        type: "POST",
        headers: {
            "ACCEPT": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            "X-HTTP-Method": "DELETE"
        },
        success: function (data) {
            console.log("Deleted Successfuly.");
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });
}


function getItemsPOST() {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('MyRestList')/GetItems(query=@v1)?@v1={\"ViewXml\":\"<View><Query><OrderBy><FieldRef Name='Created' /></OrderBy></Query></View>\"}",
        type: "POST",
        headers: {
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json; odata=verbose"
        },
        success: function (data) {
            if (data.d.results) {
                // TODO: handle the data  
                console.log('handle the data');
            }
        },
        error: function (msg) { console.log(msg) }
    });
}

function deleteList() {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/getbytitle('My Rest List')",
        method: "POST",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            "X-HTTP-Method": "DELETE"
        },
        success: function () { console.log("list deleted") },
        error: function (msg) { console.log(msg) }
    });
}

function createSite() {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/webinfos/add",
        type: "POST",
        data: JSON.stringify(
            {'parameters': {
                '__metadata':  {'type': 'SP.WebInfoCreationInformation' },
                'Url': 'RestSubWeb',
                'Title': 'RestSubWeb',
                'Description': 'REST created web',
                'Language':1033,
                'WebTemplate':'sts#1',
                'UseUniquePermissions':false}
            }
        ),
        headers: { 
            "accept": "application/json; odata=verbose", 
            "content-type":"application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val() 
    },
        success: function (){ console.log("Site created")},
        error: function (msg) { console.log(msg) }
    });
}