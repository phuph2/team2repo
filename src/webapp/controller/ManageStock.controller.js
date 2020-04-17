sap.ui.define([
	"Team2/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/Fragment",
	"sap/ui/core/UIComponent",
	"sap/m/ViewSettingsDialog",
	"sap/m/ViewSettingsItem"
], function (BaseController, JSONModel, Filter, FilterOperator, Fragment, UIComponent, ViewSettingsDialog, ViewSettingsItem) {
	"use strict";

	return BaseController.extend("Team2.controller.ManageStock", {
		onInit: function () {
			var _oODataModel = this.getOwnerComponent().getModel();
			var oModel = new sap.ui.model.odata.ODataModel("/", true);

		},
		handleSelectionFinish: function (oEvent) {
			this._resetColumnStates();
			var oColumn ;//= this.byId("stocksTable");
			var selectedItems = oEvent.getParameter("selectedItems");
			for (var i = 0; i < selectedItems.length; i++) {
				if (selectedItems[i].getText().includes("Code")){
					oColumn=this.getView().byId("Code");
					oColumn.setVisible(false);
				}
				else if (selectedItems[i].getText().includes("Name")){
					oColumn=this.getView().byId("Name");
					oColumn.setVisible(false);
				}
				else if (selectedItems[i].getText().includes("Plant")){
					oColumn=this.getView().byId("Plant");
					oColumn.setVisible(false);
				}
				else if (selectedItems[i].getText().includes("Storage Location")){
					oColumn=this.getView().byId("StorageLocation");
					oColumn.setVisible(false);
				}
				else if (selectedItems[i].getText().includes("Material1")){
					oColumn=this.getView().byId("Material1");
					oColumn.setVisible(false);
				}
				else if (selectedItems[i].getText().includes("Material2")){
					oColumn=this.getView().byId("Material2");
					oColumn.setVisible(false);
				}
			}

		},
		_resetColumnStates :function(){
			this.getView().byId("Code").setVisible(true);
			this.getView().byId("Name").setVisible(true);
			this.getView().byId("Plant").setVisible(true);
			this.getView().byId("StorageLocation").setVisible(true);
			this.getView().byId("Material1").setVisible(true);
			this.getView().byId("Material2").setVisible(true);
		},
		onAddButtonPressed: function () {},

		onSearchTable: function (oEvent) {
			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oTable = this.byId("stocksTable");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(aFilter);
		}

	});
});