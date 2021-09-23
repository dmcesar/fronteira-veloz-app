sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "pt/FRONTEIRAVELOZ/model/models",
    "sap/m/MessageToast",
  ],
  function (Controller, Model, MessageToast) {
    "use strict";

    return Controller.extend("pt.FRONTEIRAVELOZ.controller.Home", {
      _oModel: Model,

      _sRootPath: jQuery.sap.getModulePath("pt.FRONTEIRAVELOZ"),

      _oFragments: {},

      onInit: function (oEvent) {
        this.getOwnerComponent()
          .getRouter()
          .getRoute("Home")
          .attachMatched(this._onHomeRouteMatched, this);
        this.getOwnerComponent()
          .getRouter()
          .getRoute("AboutUs")
          .attachMatched(this._onAboutUsRouteMatched, this);
        this.getOwnerComponent()
          .getRouter()
          .getRoute("FindUs")
          .attachMatched(this._onFindUsRouteMatched, this);
        this.getOwnerComponent()
          .getRouter()
          .getRoute("ContactUs")
          .attachMatched(this._onContactUsRouteMatched, this);

        //this._navTo("AboutUs");
      },

      onNavButtonPress: function () {
        var oSplitApp = this.getView().getParent().getParent();
        var oMaster = oSplitApp.getMasterPages()[0];
        oSplitApp.toMaster(oMaster, "flip");
      },

      // Triggered by item press in nav bar.
      // Calls navigation to selected subroute.
      onNavigationPress: function (oEvent) {
        // Get nav bar selected key
        var sKey = oEvent.getParameter("key");

        // Nav to selected subroute
        this._navTo(sKey);
      },

      onSendEmailPress: function () {
        var oFormOutput = this._validateMessageForm();

        if (oFormOutput === -1) {
          var sMsg = this.getView()
            .getModel("i18n")
            .getResourceBundle()
            .getText("InvalidFormMessage");

          MessageToast.show(sMsg);

          return;
        }
      },

      _resetMessageFormInputs: function () {
        // Get input controls
        var oFirstNameInput = this.byId("first_name_input"),
          oLastNameInput = this.byId("last_name_input"),
          oEmailNameInput = this.byId("email_input"),
          oPhoneNumberInput = this.byId("phone_number_input"),
          oMessageInput = this.byId("message_input");

        // Reset text values
        oFirstNameInput.setValue("");
        oLastNameInput.setValue("");
        oEmailNameInput.setValue("");
        oPhoneNumberInput.setValue("");
        oMessageInput.setValue("");

        // Reset value state
        oFirstNameInput.setValueState(sap.ui.core.ValueState.None);
        oLastNameInput.setValueState(sap.ui.core.ValueState.None);
        oEmailNameInput.setValueState(sap.ui.core.ValueState.None);
        oPhoneNumberInput.setValueState(sap.ui.core.ValueState.None);
        oMessageInput.setValueState(sap.ui.core.ValueState.None);
      },

      // Updates value state of each input control.
      // Returns object containing all fields and respective input if form was validated.
      // Returns -1 if form was invalidated.
      _validateMessageForm: function () {
        // Get input controls
        var oFirstNameInput = this.byId("first_name_input"),
          oLastNameInput = this.byId("last_name_input"),
          oEmailInput = this.byId("email_input"),
          oPhoneNumberInput = this.byId("phone_number_input"),
          oMessageInput = this.byId("message_input");

        // Get text values
        var oData = {};

        oData.sFirstName = oFirstNameInput.getValue();
        oData.sLastName = oLastNameInput.getValue();
        oData.sEmail = oEmailInput.getValue();
        oData.sPhoneNumber = oPhoneNumberInput.getValue();
        oData.sMessage = oMessageInput.getValue();

        var bValid = true;

        // Validate each input.
        // If input is empty, set value state to Error and invalidate form.
        // If input is not empty, set value state to None.

        if (!oData.sFirstName) {
          oFirstNameInput.setValueState(sap.ui.core.ValueState.Error);
          bValid = false;
        } else {
          oFirstNameInput.setValueState(sap.ui.core.ValueState.None);
        }

        if (!oData.sLastName) {
          oLastNameInput.setValueState(sap.ui.core.ValueState.Error);
          bValid = false;
        } else {
          oLastNameInput.setValueState(sap.ui.core.ValueState.None);
        }

        if (!oData.sEmail) {
          oEmailInput.setValueState(sap.ui.core.ValueState.Error);
          bValid = false;
        } else {
          oEmailInput.setValueState(sap.ui.core.ValueState.None);
        }

        if (!oData.sPhoneNumber) {
          oPhoneNumberInput.setValueState(sap.ui.core.ValueState.Error);
          bValid = false;
        } else {
          oPhoneNumberInput.setValueState(sap.ui.core.ValueState.None);
        }

        if (!oData.sMessage) {
          oMessageInput.setValueState(sap.ui.core.ValueState.Error);
          bValid = false;
        } else {
          oMessageInput.setValueState(sap.ui.core.ValueState.None);
        }

        // If form is valid, return input data. Otherwise return -1.
        return bValid ? oData : -1;
      },

      // Navigates to sRoute
      _navTo: function (sRoute) {
        this.getOwnerComponent().getRouter().navTo(sRoute);
      },

      /* Route Matched events */

      _onHomeRouteMatched: function () {
        const oRouter = this.getOwnerComponent().getRouter();

        const currentHash = oRouter.getHashChanger().getHash();
        const sCurrentRoute = oRouter.getRouteInfoByHash(currentHash).name;

        // Nav to AboutUs route if current route is Home
        if (sCurrentRoute === "Home") {
          this._navTo("AboutUs");
        }
      },

      _onAboutUsRouteMatched: function () {
        this._showFragment("AboutUs");
        this.byId("nav_bar").setSelectedKey("AboutUs");
      },

      _onFindUsRouteMatched: function () {
        this._showFragment("FindUs");
        this.byId("nav_bar").setSelectedKey("FindUs");
      },

      _onContactUsRouteMatched: function () {
        this._showFragment("ContactUs");
        this.byId("nav_bar").setSelectedKey("ContactUs");
        this._resetMessageFormInputs();
      },

      /* Fragment related methods */

      _getFragment: function (sName) {
        if (!this._oFragments[sName]) {
          this._oFragments[sName] = sap.ui.xmlfragment(
            this.getView().getId(),
            "pt.FRONTEIRAVELOZ.view.fragments." + sName,
            this
          );
        }

        return this._oFragments[sName];
      },

      _showFragment: function (sName) {
        var oContainer = this.byId("fragment_container");

        oContainer.removeAllContent();
        oContainer.insertContent(this._getFragment(sName));
      },
    });
  }
);
