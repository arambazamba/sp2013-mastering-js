var voucherAppTS;
(function (voucherAppTS) {
    var Services;
    (function (Services) {
        var VoucherDetailService = (function () {
            function VoucherDetailService($resource) {
                this.$resource = $resource;
            }
            VoucherDetailService.prototype.getVDetailResource = function () {
                return this.$resource('/api/VoucherDetails');
            };
            VoucherDetailService.$inject = ['$resource'];
            return VoucherDetailService;
        }());
        Services.VoucherDetailService = VoucherDetailService;
        voucherAppTS.voucherApp.service("voucherDetailService", VoucherDetailService);
    })(Services = voucherAppTS.Services || (voucherAppTS.Services = {}));
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=voucherDetailService.js.map