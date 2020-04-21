sap.ui.define([
	"Team2/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/core/UIComponent"
], function (BaseController, JSONModel, formatter, UIComponent) {
	"use strict";
	
	return BaseController.extend("Team2.controller.OverviewPage", {
		formatter:formatter,
		onInit: function () {
		
		},
		onNavToMaterial: function(oEvent){
			this.getRouter().navTo("manageMaterial");
		},
		
		onNavToStock: function(oEvent){
			this.getRouter().navTo("manageStock");
		}
			
	});
});