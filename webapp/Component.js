sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap.ui.walkthrough.Component", {
        metadata: {
            rootView: {
                "viewName": "sap.ui.demo.walkthrough.view.App",
                "type": "XML",
                "async": true,
                "id": "app"
            }
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

            // set the i18n model
            const oI18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.setModel(oI18nModel, "i18n"); // the second part is the alias
        }
    });
});