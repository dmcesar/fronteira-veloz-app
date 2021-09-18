sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("pt.FRONTEIRAVELOZ.controller.App", {

        onInit: function(oEvent) {

            this.getOwnerComponent().getRouter().getRoute("App").attachMatched(this._onInitRouteMatched, this);
            this.getOwnerComponent().getRouter().getRoute("Home").attachMatched(this._onHomeRouteMatched, this);
            this.getOwnerComponent().getRouter().getRoute("Services").attachMatched(this._onServicesRouteMatched, this);
            this.getOwnerComponent().getRouter().getRoute("Contacts").attachMatched(this._onContactsRouteMatched, this);
        },

        // Everytime the user navs to App route, redirect page to Home route
        _onInitRouteMatched: function(oEvent) {

            this.getOwnerComponent().getRouter().navTo("Home");
        },

        _onHomeRouteMatched: function(oEvent) {

            console.log("HOME ROUTE MATCHED!");
        },

        _onServicesRouteMatched: function(oEvent) {

            console.log("SERVICES ROUTE MATCHED!");
        },

        _onContactsRouteMatched: function(oEvent) {

            console.log("CONTACTS ROUTE MATCHED!");
        },

        // Triggered by item press in nav bar
        onNavigationPress: function(oEvent) {

            var sKey = oEvent.getParameter("key");

            this.getOwnerComponent().getRouter().navTo(sKey);
        }
    });
});
