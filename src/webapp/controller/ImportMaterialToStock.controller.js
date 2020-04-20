sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast',
	'sap/m/MessageBox'
], function (Controller, JSONModel, MessageToast, MessageBox) {
	"use strict";
	var ValueState = 0;
	var ValidationCbbStock = 0;
	var ValidationCbbMaterial = 0;
	var ValidationDatePicker = 0;
	return Controller.extend("Team2.controller.ImportMaterialToStock", {

		handleChange1: function (oEvent) {
			var oValidatedComboBox = oEvent.getSource(),
				sSelectedKey = oValidatedComboBox.getSelectedKey(),
				sValue = oValidatedComboBox.getValue();

			if (sValue =="" || !sSelectedKey) {
				oValidatedComboBox.setValueState("Error");
				oValidatedComboBox.setValueStateText("Please enter a valid Stock!");
				ValidationCbbStock = 0;
			} else {
				oValidatedComboBox.setValueState("Success");
				ValidationCbbStock = 1;
			}
		},

		handleChange2: function (oEvent) {
			var oValidatedComboBox = oEvent.getSource(),
				sSelectedKey = oValidatedComboBox.getSelectedKey(),
				sValue = oValidatedComboBox.getValue();

			if (sValue =="" || !sSelectedKey) {
				oValidatedComboBox.setValueState("Error");
				oValidatedComboBox.setValueStateText("Please enter a valid Material!");
				ValidationCbbMaterial = 0;
			} else {
				oValidatedComboBox.setValueState("Success");
				ValidationCbbMaterial = 1;
			}
		},

		handleChange3: function (oEvent) {
			var oValidatedDatePicker = oEvent.getSource();
			var bValid = oEvent.getParameter("valid");

			if (!bValid) {
				oValidatedDatePicker.setValueState("Error");
				oValidatedDatePicker.setValueStateText("Please enter a valid Date!");
				ValidationDatePicker = 0;
			}
			else {
				oValidatedDatePicker.setValueState("Success");
				ValidationDatePicker = 1;
			}
		},

		handleUserInput: function (oEvent) {
			var sUserInput = oEvent.getParameter("value");
			var oInputControl = oEvent.getSource();
			if (!sUserInput.match(/^\d+/)) {
				oInputControl.setValueState(sap.ui.core.ValueState.Error);
				oInputControl.setValueStateText("Please enter a valid Amount!");
				ValueState = 0;
			} else {
				oInputControl.setValueState(sap.ui.core.ValueState.Success);
				ValueState = 1;
			}
		},

		onSubmit: function () {
			if (ValueState == 1 && ValidationCbbStock == 1 && ValidationCbbMaterial == 1 && ValidationDatePicker == 1)
				MessageToast.show("Submit success");
			else MessageBox.alert("A validation error has occured. Complete your input first");
		}
	});
});