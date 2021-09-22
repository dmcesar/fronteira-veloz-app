sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/Device"], function (JSONModel, Device) {
    "use strict";

    return {
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        getHomePageImagePaths: function() {

            var oModel = sap.ui.getCore().getModel("oDataModel");

            return oModel.oData.HomePageImages[0];
        }
    };
});
