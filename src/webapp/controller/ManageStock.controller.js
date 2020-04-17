sap.ui.define([
	"Team2/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/Fragment",
	"sap/ui/core/UIComponent",
	"sap/m/ViewSettingsDialog",
	"sap/m/ViewSettingsItem",
	'sap/m/MessageToast',
	"../model/formatter",
], function (BaseController, JSONModel, Filter, FilterOperator, Fragment, UIComponent, ViewSettingsDialog, ViewSettingsItem, MessageToast, formatter) {
	"use strict";

	return BaseController.extend("Team2.controller.ManageStock", {
		formatter: formatter,
		fromDate: '',
		toDate: '',
		
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

			// // filter binding
			// var oTable = this.byId("stocksTable");
			// var oBinding = oTable.getBinding("items");
			// oBinding.filter(aFilter);
			MessageToast.show("From date " + this.fromDate + " To date is " + this.toDate);
		},
		
		onExit : function () {
			if (this._oDialog) {
				this._oDialog.destroy();
			}
		},

		handleViewSettingsDialogPress: function () {
			if (!this._oDialog) {
				Fragment.load({
					name: "Team2.view.FilterDialog",
					controller: this
				}).then(function(oDialog){
					this._oDialog = oDialog;
					// Set initial and reset value for Slider in custom control
					//var oSlider = this._oDialog.getFilterItems()[0].getCustomControl();
					//oSlider.setValue(this.filterResetValue);
					this._oDialog.setModel(this.getView().getModel());
					this._oDialog.open();
				}.bind(this));
			} else {
				this._oDialog.setModel(this.getView().getModel());
				this._oDialog.open();
			}
		},

		onFromChange: function (oEvent) {
			this.fromDate = oEvent.getParameter("value");

		},

		onToChange: function (oEvent) {
			this.toDate = oEvent.getParameter("value");
		},

		handleConfirm: function (oEvent) {
			// build filter array
			// var aFilter = [];
			// if (this.fromDate) {
			// 	aFilter.push(new Filter("Material>/StoredDate", FilterOperator.GE , this.fromDate));
			// }

			// if (this.toDate) {
			// 	aFilter.push(new Filter("Material>/StoredDate", FilterOperator.LE , this.toDate));
			// }

			// // filter binding
			// var oTable = this.byId("stocksTable");
			// var oBinding = oTable.getBinding("items");
			// oBinding.filter(aFilter);
			MessageToast.show("From date " + this.fromDate + " To date is " + this.toDate);
		},

		handleCancel: function () {
		},

		handleResetFilters: function () {
			sap.ui.getCore().byId("fromDate").setValue('');
			sap.ui.getCore().byId("toDate").setValue('');
		}

	});
});