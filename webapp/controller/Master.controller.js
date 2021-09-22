sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("pt.FRONTEIRAVELOZ.controller.Master", {

        onHomeNavPress: function() {

            this.getOwnerComponent().getRouter().navTo("Home");
        }
    });
});
