sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	
	return Controller.extend("Team2.controller.OverviewPage", {
		onInit: function () {
			var oMaterialsModel = new JSONModel(sap.ui.require.toUrl("Team2/localService/mockdata/Materials.json")),
				oStocksModel =  new JSONModel(sap.ui.require.toUrl("Team2/localService/mockdata/Stocks.json"));

			this.getView().setModel(oMaterialsModel, "materials");
			this.getView().setModel(oStocksModel, "stocks");
		}
			
	});
});