
$(document).ready(function () {

    var pci = _spPageContextInfo;    
    var ctxCurrent;
    var web;

    //Loading
    console.log("initializing context");
    ctxCurrent = SP.ClientContext.get_current();
    web = ctxCurrent.get_web();
    ctxCurrent.load(web);
    
    ctxCurrent.executeQueryAsync(
        function () {
         console.log("Web Title: " + web.get_title());
         console.log("Created: " + web.get_created());
         },
         function () { alert("Request failed") }
    );

    var site = ctxCurrent.get_site();
    var owner = site.get_owner();

    ctxCurrent.load(site);
    //ctxCurrent.load(owner);
    ctxCurrent.load(owner, 'LoginName');

    ctxCurrent.executeQueryAsync(
     function () {
         console.log("Site URL: " + site.get_serverRelativeUrl());
         console.log("Owner Login: " + owner.get_loginName());
         console.log("Mail: " + owner.get_email());

     },
     function () { console.log("Request failed") }
    );
});