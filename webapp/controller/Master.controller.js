sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("pt.FRONTEIRAVELOZ.controller.Master", {

        onHomeNavPress: function() {

            this._navTo("Home");
        },

        // Navigates to sRoute
      _navTo: function (sRoute) {
        this.getOwnerComponent().getRouter().navTo(sRoute);
      },
    });
});
