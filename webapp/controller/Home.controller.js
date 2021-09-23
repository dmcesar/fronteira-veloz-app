sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "pt/FRONTEIRAVELOZ/model/models"
], function (Controller, Model) {
    "use strict";

    return Controller.extend("pt.FRONTEIRAVELOZ.controller.Home", {

        _oModel: Model,

        _sRootPath: jQuery.sap.getModulePath("pt.FRONTEIRAVELOZ"),

        _oFragments: {},

        onInit: function(oEvent) {

            this.getOwnerComponent().getRouter().getRoute("AboutUs").attachMatched(this._onAboutUsRouteMatched, this);
            this.getOwnerComponent().getRouter().getRoute("FindUs").attachMatched(this._onFindUsRouteMatched, this);
            this.getOwnerComponent().getRouter().getRoute("ContactUs").attachMatched(this._onContactUsRouteMatched, this);

            this._navTo("AboutUs");
        },

        // Triggered by item press in nav bar.
        // Calls navigation to selected subroute.
        onNavigationPress: function(oEvent) {

            // Get nav bar selected key
            var sKey = oEvent.getParameter("key");

            // Nav to selected subroute
            this._navTo(sKey);
        },

        // Navigates to sRoute
        _navTo: function(sRoute) {

            this.getOwnerComponent().getRouter().navTo(sRoute);
        },

        /* Route Matched events */

        _onAboutUsRouteMatched: function() {

            this._showFragment("AboutUs");
        },

        _onFindUsRouteMatched: function() {

            this._showFragment("FindUs");
        },

        _onContactUsRouteMatched: function() {

            this._showFragment("ContactUs");
        },

        /* Fragment related methods */

        _getFragment: function(sName) {

            if(!this._oFragments[sName]) {

                this._oFragments[sName] = sap.ui.xmlfragment(this.getView().getId(), "pt.FRONTEIRAVELOZ.view.fragments." + sName, this);
            }

            return this._oFragments[sName];
        },

        _showFragment: function(sName) {

            var oContainer = this.byId("fragment_container");

            oContainer.removeAllContent();
            oContainer.insertContent(this._getFragment(sName));
        }
    });
});
