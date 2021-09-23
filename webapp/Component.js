sap.ui.define(
    ["sap/ui/core/UIComponent", "sap/ui/Device", "pt/FRONTEIRAVELOZ/model/models"],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("pt.FRONTEIRAVELOZ.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                var oDeviceModel = models.createDeviceModel();
                oDeviceModel.setData({
                    isPhone: sap.ui.Device.system.phone
                }, true);

                // set the device model
                this.setModel(oDeviceModel, "device");

                // set data model
                sap.ui.getCore().setModel(this.getModel(), "oDataModel");
            }
        });
    }
);
