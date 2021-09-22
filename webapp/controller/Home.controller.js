sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "pt/FRONTEIRAVELOZ/model/models"
], function (Controller, Model) {
    "use strict";

    return Controller.extend("pt.FRONTEIRAVELOZ.controller.Home", {

        oModel: Model,

        sRootPath: jQuery.sap.getModulePath("pt.FRONTEIRAVELOZ"),

        _oFragments: {},

        onInit: function(oEvent) {

            this.getOwnerComponent().getRouter().getRoute("Home").attachMatched(this._onInitRouteMatched, this);
        },

        // Everytime the user navs to App route, redirect page to Home route
        _onInitRouteMatched: function(oEvent) {
        },

        // Triggered by item press in nav bar
        onNavigationPress: function(oEvent) {

            var sKey = oEvent.getParameter("key");

            this.getOwnerComponent().getRouter().navTo(sKey);
        },

        _getFragment: function(sName) {

            if(!this._oFragments[sName]) {

                this._oFragments[sName] = sap.ui.xmlfragment(this.getView().getId(), "pt.FRONTEIRAVELOZ.view.fragments." + sName, this);
            }

            return this._oFragments[sName];
        },

        _showFragment: function(sName) {

            var oContainer = this.byId("fragment_container");

            oContainer.insertContent(this._getFragment(sName));
        }
    });
});
