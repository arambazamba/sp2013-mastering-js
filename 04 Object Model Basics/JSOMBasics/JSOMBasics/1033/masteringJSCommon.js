
var ScriptWiz = (function () {

    return {

        registerJS: function(script) {
            var head = document.documentElement.childNodes[0];
            var sTag = document.createElement("script");
            sTag.src = script;
            sTag.type = "text/javascript";
            head.appendChild(sTag);
        },

        registerJSOM: function () {
            LoadSodByKey("sp.js", function () {
                console.log("script loaded");
            });
            LoadSodByKey("sp.runtime.js", function () {
                console.log("script loaded");
            });
            LoadSodByKey("sp.core.js", function () {
                console.log("script loaded");
            });
        },

        registerJQuery: function() {
            this.registerJS("/_layouts/15/1033/jquery-2.1.4.min.js");
        },

        registerDefaultScripts: function() {
            this.registerJQuery();
            registerJSOM();
            this.testJSOM();
        },

        testJSOM: function() {
            var ctxCurrent = SP.ClientContext("http://sp2013b/");
            var web = ctxCurrent.get_web();
            ctxCurrent.load(web);
            ctxCurrent.executeQueryAsync(
             function () {
                 console.log("Script registration succeeded in web " + web.get_title());
             },
             function () { console.log("Script registration failed") }
            );
        }
};

})();