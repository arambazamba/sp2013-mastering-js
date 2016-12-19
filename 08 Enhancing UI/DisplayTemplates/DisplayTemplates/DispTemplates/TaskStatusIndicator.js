(function () {
    var statusFieldCtx = {};

    statusFieldCtx.Templates = {};
    statusFieldCtx.Templates.Fields = {
    "Status": {
    "View": StatusFieldViewTemplate
    }};

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(
    statusFieldCtx
    );
})();

function StatusFieldViewTemplate(ctx) {
    var statusValue = ctx.CurrentItem.Status;
    var result;
    if (statusValue === "Completed") {
        result =  "<span style='background-color : green'>" + statusValue + "</span>";
    }
    else if (statusValue === "In Progress") {
        result = "<span style='background-color : yellow'>" + statusValue + "</span>";
    } else {
        result = "<span>" + statusValue + "</span>";
    }
    return result;
};