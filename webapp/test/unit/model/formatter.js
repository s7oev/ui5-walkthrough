sap.ui.define([
    "sap/ui/demo/walkthrough/model/formatter",
    "sap/ui/model/resource/ResourceModel"
], function (formatter, ResourceModel) {
    "use strict";

    QUnit.module("Formatting functions", {
        beforeEach: function () {
            this._oResourceModel = new ResourceModel({
                bundleUrl: sap.ui.require.toUrl("sap/ui/demo/walkthrough") + "/i18n/i18n.properties"
            });
        },

        afterEach: function () {
            this._oResourceModel.destroy();
        }
    });

    QUnit.test("Should return the translated texts", function (assert) {
        // arrange (given)
        const oModel = this.stub();
        oModel.withArgs("i18n").returns(this._oResourceModel);
        const oViewStub = {
            getModel: oModel
        };
        const oControllerStub = {
            getView: this.stub().returns(oViewStub)
        };

        // act (when)
        const fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

        // assert
        assert.strictEqual(fnIsolatedFormatter("A"), "New", "Correct long text for status A");
        assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "Correct long text for status B");
        assert.strictEqual(fnIsolatedFormatter("C"), "Done", "Correct long text for status C");
        assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "Correct long text for non-A/B/C status");
    });
});