function mainController($scope) {

    $scope.customer = { firstName: "", lastName: "", location: "" };
    $scope.createContact = function ($event) {
        var c = $scope.customer;
        $event.preventDefault();

        var clientContext = new SP.ClientContext.get_current();
        var web = clientContext.get_web();
        var list = web.get_lists().getByTitle('Customer Details');
        var customerListItemInfo = new SP.ListItemCreationInformation();
        var listItem = list.addItem(customerListItemInfo);
        listItem.set_item('Title', c.firstName);
        listItem.set_item('LastName', c.lastName);
        listItem.set_item('Address', c.address);
        listItem.update();
        clientContext.executeQueryAsync(
            Function.createDelegate(this, onQuerySucceeded),
            Function.createDelegate(this, onQueryFailed)
        );

    };

    onQuerySucceeded = function () {
        alert('Successfully created new customer record');
    }

    onQueryFailed = function (sender, args) {
        alert('Failed: ' + args.get_stackTrace());
    }
}