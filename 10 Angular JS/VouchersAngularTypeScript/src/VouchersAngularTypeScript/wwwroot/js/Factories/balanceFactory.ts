﻿module voucherAppTS.Factories {
    //voucherApp.factory("balanceFactory", [
    //    "$http", function($http) {
    //        return {
    //            getSum: function (expenses, callback) {
    //                $http.get("/api/vouchers/GetSum/" + expenses).then(callback);
    //            }
    //        };
    //    }
    //]);

    export interface IBalanceFactory {
        getSum(expenses: boolean, callback: Function);
    }

    export class BalanceFactory implements IBalanceFactory  {

        http: ng.IHttpService;

        static $inject = ["$http"];

        constructor($http: ng.IHttpService) {
            this.http = $http;
        }

        getSum(expenses: boolean, callback: Function) {
            this.http.get("/api/vouchers/GetSum/" + expenses).then(callback());
        }
    }
    
    voucherApp.factory("balanceFactory", BalanceFactory);
}