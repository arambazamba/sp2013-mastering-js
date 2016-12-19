
var app = angular.module('voucherApp', []);

app.controller('simpleController', function ($scope) {

    $scope.AppName = "Vouchers App";

    $scope.vouchers = [
        { ID: 1, Date: '01.01.2016', Amount: 100, Text: 'Schreibwaren', Paid: false },
        { ID: 2, Date: '02.01.2016', Amount: 56, Text: 'Diesel', Paid: false },
        { ID: 3, Date: '02.01.2016', Amount: 1267, Text: 'Laptop', Paid: true }];

    $scope.greaterThan = function (prop, val) {
        return function (item) {
            return item[prop] > val;
        }
    }
});
