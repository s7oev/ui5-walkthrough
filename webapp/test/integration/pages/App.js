sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    "use strict";

    const sViewName = "sap.ui.demo.walkthrough.view.HelloPanel";

    Opa5.createPageObjects({
        onTheAppPage: {
            actions: {
                iPressTheSayHelloWithDialogButton: function () {
                    // We define a waitFor statement that checks for controls of type sap.m.Button. 
                    // As soon as a button is found on the app page the success handler is executed
                    // and we use jQuery to trigger a tap event on the first button that we found.
                    // This should open the HelloDialog similar to clicking on the button manually.

                    return this.waitFor({
                        id: "helloDialogButton",
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage: "Did not find the 'Say Hello With Dialog' button on the HelloPanel view"
                    });
                }
            },

            assertions: {
                iShouldSeeTheHelloDialog: function () {
                    // We define another waitFor statement that checks if a sap.m.Dialog control is
                    // existing in the DOM of the app. When the dialog has been found, the test is
                    // successful and we can immediately confirm by calling an ok statement with a
                    // meaningful message.

                    return this.waitFor({
                        controlType: "sap.m.Dialog",
                        success: function () {
                            // we set the view busy, so we need to query the parent of the app
                            Opa5.assert.ok(true, "The dialog is open");
                        },
                        errorMessage: "Did not find the dialog control"
                    });
                }
            }
        }
    });
});