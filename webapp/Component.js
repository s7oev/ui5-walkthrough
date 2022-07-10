sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap.ui.walkthrough.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // call parent's init function
            UIComponent.prototype.init.apply(this, arguments); // the arguments object is a local variable available within all non-arrow functions

            // set data models
            const oData = {
                recipient: {
                    name: "UI5"
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});