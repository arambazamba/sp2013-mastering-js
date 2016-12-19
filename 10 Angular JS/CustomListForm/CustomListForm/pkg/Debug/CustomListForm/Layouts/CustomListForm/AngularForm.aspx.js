//http://sp2013c/_layouts/15/customlistform/angularform.aspx

function mainController($scope) {

    $scope.customer = { firstName: "", lastName: "", location: "" };
    $scope.createContact = function ($event) {
        var c = $scope.customer;
        $event.preventDefault();

        var clientContext = new SP.ClientContext.get_current();
        var web = clientContext.get_web();
        var list = web.get_lists().getByTitle('Customers');
        var customerListItemInfo = new SP.ListItemCreationInformation();
        var listItem = list.addItem(customerListItemInfo);
        listItem.set_item('Title', c.lastName);
        listItem.set_item('FirstName', c.firstName);
        listItem.set_item('WorkAddress', c.address);
        listItem.update();
        clientContext.executeQueryAsync(function () {alert('Successfully created new customer record');},function (sender, args) {alert('Failed: ' + args.get_stackTrace());}
        );
    };
}

angular.module('sharepointApp', []).controller('contactsCtrl', ['$scope', function contactsCtrl($scope) {

    $scope.customer = { firstName: "", lastName: "", location: "" };
    $scope.createContact = function ($event) {
        var c = $scope.customer;
        $event.preventDefault();

        var clientContext = new SP.ClientContext.get_current();
        var web = clientContext.get_web();
        var list = web.get_lists().getByTitle('Customers');
        var customerListItemInfo = new SP.ListItemCreationInformation();
        var listItem = list.addItem(customerListItemInfo);
        listItem.set_item('Title', c.lastName);
        listItem.set_item('FirstName', c.firstName);
        listItem.set_item('WorkAddress', c.address);
        listItem.update();
        clientContext.executeQueryAsync(function () { alert('Successfully created new customer record'); }, function (sender, args) { alert('Failed: ' + args.get_stackTrace()); }
        );
    };

    }
]);