sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("pt.FRONTEIRAVELOZ.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "pt.FRONTEIRAVELOZ",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
