sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    "use strict";

    return ManagedObject.extend("sap.ui.walkthrough.controller.HelloDialog", {
        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {
            const oView = this._oView;
            if (!oView.byId("helloDialog")) {
                const oFragmentController = {
                    onOpenDialog: function () {
                        if (!oView.pDialog) {
                            oView.pDialog = oView.loadFragment({
                                name: "sap.ui.demo.walkthrough.view.HelloDialog"
                            });
                        }

                        oView.pDialog.then(function (oDialog) {
                            oDialog.open();
                        });
                    },

                    onCloseDialog: function () {
                        // no need to chain to the pDialog promise, because
                        // this event handler can only be called from within
                        // the loaded dialog
                        oView.byId("helloDialog").close();
                    }
                }

                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    // connect dialog to the root view of the component
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                oView.byId("helloDialog").open();
            }
        }
    })
});