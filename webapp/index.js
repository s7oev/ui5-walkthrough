sap.ui.define([
    "sap/m/Text" // text control
], function (Text) {
    "use strict";

    new Text({
        text: "Hello UI5!"
    }).placeAt("content"); // the id defined in the html
});