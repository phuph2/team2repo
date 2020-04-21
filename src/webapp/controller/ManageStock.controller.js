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
	"../model/formatter"
], function (BaseController, JSONModel, Filter, FilterOperator, Fragment, UIComponent, ViewSettingsDialog, ViewSettingsItem, MessageToast,
	formatter) {
	"use strict";

	return BaseController.extend("Team2.controller.ManageStock", {
		formatter: formatter,
		fromDate: '',
		toDate: '',
		oFragment: {
			addStock: {}
		},
		_oData: {},
		onInit: function () {
			// var _oODataModel = this.getOwnerComponent().getModel();
			// var oModel = new sap.ui.model.odata.ODataModel("/", true);
			this._oData = {
				Stocks: [{
					"StockCode": "SC00001",
					"Name": "Stock Q8",
					"Plant": "Plant Q8",
					"StorageLocation": "HCM, VN",
					"StoredDate": "2015-02-18T00:00:00",
					"Material": [{
						"MaterialCode": "MC00001",
						"Amount": 0
					}, {
						"MaterialCode": "MC00002",
						"Amount": 0
					}]
				}, {
					"StockCode": "SC00002",
					"Name": "Stock TH",
					"Plant": "Plant TH",
					"StorageLocation": "TH, VN",
					"StoredDate": "2020-10-25T00:00:00",
					"Material": [{
						"MaterialCode": "MC00001",
						"Amount": 200
					}, {
						"MaterialCode": "MC00003",
						"Amount": 78
					}, {
						"MaterialCode": "MC00008",
						"Amount": 100
					}]
				}, {
					"StockCode": "SC00003",
					"Name": "Stock VT",
					"Plant": "Plant VT",
					"StorageLocation": "VT, VN",
					"StoredDate": "2018-12-08T00:00:00",
					"Material": [{
						"MaterialCode": "MC00006",
						"Amount": 0
					}]
				}, {
					"StockCode": "SC00004",
					"Name": "Stock Q8",
					"Plant": "Plant Q8",
					"StorageLocation": "HCM, VN",
					"StoredDate": "2015-02-18T00:00:00",
					"Material": [{
						"MaterialCode": "MC00001",
						"Amount": 200
					}, {
						"MaterialCode": "MC00002",
						"Amount": 121
					}]
				}, {
					"StockCode": "SC00005",
					"Name": "Stock BH",
					"Plant": "Plant BH",
					"StorageLocation": "DN, VN",
					"StoredDate": "2020-01-18T00:00:00",
					"Material": [{
						"MaterialCode": "MC00002",
						"Amount": 121
					}, {
						"MaterialCode": "MC00004",
						"Amount": 60
					}, {
						"MaterialCode": "MC00005",
						"Amount": 78
					}, {
						"MaterialCode": "MC00006",
						"Amount": 88
					}, {
						"MaterialCode": "MC00007",
						"Amount": 90
					}, {
						"MaterialCode": "MC00008",
						"Amount": 20
					}, {
						"MaterialCode": "MC00009",
						"Amount": 30
					}]
				}, {
					"StockCode": "SC00006",
					"Name": "Stock DN",
					"Plant": "Plant DN",
					"StorageLocation": "DN, VN",
					"StoredDate": "2019-08-18T00:00:00",
					"Material": [{
						"MaterialCode": "MC00001",
						"Amount": 121
					}, {
						"MaterialCode": "MC00003",
						"Amount": 80
					}, {
						"MaterialCode": "MC00005",
						"Amount": 78
					}, {
						"MaterialCode": "MC00006",
						"Amount": 88
					}, {
						"MaterialCode": "MC00007",
						"Amount": 90
					}]
				}, {
					"StockCode": "SC00007",
					"Name": "Stock TB",
					"Plant": "Plant TB",
					"StorageLocation": "TB, VN",
					"StoredDate": "2019-12-01T00:00:00",
					"Material": [{
						"MaterialCode": "MC00001",
						"Amount": 100
					}, {
						"MaterialCode": "MC00002",
						"Amount": 88
					}, {
						"MaterialCode": "MC00003",
						"Amount": 88
					}, {
						"MaterialCode": "MC00004",
						"Amount": 88
					}]
				}, {
					"StockCode": "SC00008",
					"Name": "Stock HN",
					"Plant": "Plant HN",
					"StorageLocation": "HN, VN",
					"StoredDate": "2020-01-01T00:00:00",
					"Material": [{
						"MaterialCode": "MC000010",
						"Amount": 100
					}, {
						"MaterialCode": "MC00007",
						"Amount": 88
					}, {
						"MaterialCode": "MC00008",
						"Amount": 88
					}, {
						"MaterialCode": "MC00009",
						"Amount": 88
					}]
				}, {
					"StockCode": "SC00009",
					"Name": "Stock Q2",
					"Plant": "Plant Q2",
					"StorageLocation": "HCM, VN",
					"StoredDate": "2020-01-01T00:00:00",
					"Material": [{
						"MaterialCode": "MC000010",
						"Amount": 0
					}, {
						"MaterialCode": "MC00007",
						"Amount": 0
					}]
				}, {
					"StockCode": "SC000010",
					"Name": "Stock Q1",
					"Plant": "Plant Q1",
					"StorageLocation": "HCM, VN",
					"StoredDate": "2020-03-18T00:00:00",
					"Material": [{
						"MaterialCode": "MC00001",
						"Amount": 100
					}, {
						"MaterialCode": "MC00002",
						"Amount": 100
					}, {
						"MaterialCode": "MC00004",
						"Amount": 100
					}, {
						"MaterialCode": "MC00005",
						"Amount": 100
					}, {
						"MaterialCode": "MC00006",
						"Amount": 100
					}, {
						"MaterialCode": "MC00007",
						"Amount": 100
					}, {
						"MaterialCode": "MC00008",
						"Amount": 100
					}, {
						"MaterialCode": "MC00009",
						"Amount": 100
					}, {
						"MaterialCode": "MC000010",
						"Amount": 100
					}]
				}, {
					"StockCode": "SC000011",
					"Name": "Stock Q3",
					"Plant": "Plant Q3",
					"StorageLocation": "HCM, VN",
					"StoredDate": "2020-01-10T00:00:00",
					"Material": [{
						"MaterialCode": "MC00003",
						"Amount": 80
					}, {
						"MaterialCode": "MC00005",
						"Amount": 100
					}, {
						"MaterialCode": "MC00007",
						"Amount": 50
					}, {
						"MaterialCode": "MC00009",
						"Amount": 30
					}]
				}, {
					"StockCode": "SC000012",
					"Name": "Stock Q2",
					"Plant": "Plant Q2",
					"StorageLocation": "HCM, VN",
					"StoredDate": "2020-04-10T00:00:00",
					"Material": [{
						"MaterialCode": "MC00001",
						"Amount": 100
					}, {
						"MaterialCode": "MC00002",
						"Amount": 100
					}, {
						"MaterialCode": "MC00004",
						"Amount": 125
					}, {
						"MaterialCode": "MC00006",
						"Amount": 130
					}]
				}]
			};
			var oJsonModel = new JSONModel();
			oJsonModel.setProperty("/", this._oData);
			this.getView().setModel(oJsonModel);
		},
		handleSelectionFinish: function (oEvent) {
			this._resetColumnStates();
			var oColumn; //= this.byId("stocksTable");
			var selectedItems = oEvent.getParameter("selectedItems");
			for (var i = 0; i < selectedItems.length; i++) {
				if (selectedItems[i].getText().includes("Code")) {
					oColumn = this.getView().byId("Code");
					oColumn.setVisible(false);
				} else if (selectedItems[i].getText().includes("Name")) {
					oColumn = this.getView().byId("Name");
					oColumn.setVisible(false);
				} else if (selectedItems[i].getText().includes("Plant")) {
					oColumn = this.getView().byId("Plant");
					oColumn.setVisible(false);
				} else if (selectedItems[i].getText().includes("Storage Location")) {
					oColumn = this.getView().byId("StorageLocation");
					oColumn.setVisible(false);
				} else if (selectedItems[i].getText().includes("Material")) {
					oColumn = this.getView().byId("Material");
					oColumn.setVisible(false);
				} else if (selectedItems[i].getText().includes("Amount")) {
					oColumn = this.getView().byId("Amount");
					oColumn.setVisible(false);
				} else if (selectedItems[i].getText().includes("StoredDate")) {
					oColumn = this.getView().byId("StoredDate");
					oColumn.setVisible(false);
				} else if (selectedItems[i].getText().includes("Status")) {
					oColumn = this.getView().byId("Status");
					oColumn.setVisible(false);
				}
			}

		},
		_resetColumnStates: function () {
			this.getView().byId("Code").setVisible(true);
			this.getView().byId("Name").setVisible(true);
			this.getView().byId("Plant").setVisible(true);
			this.getView().byId("StorageLocation").setVisible(true);
			this.getView().byId("Material").setVisible(true);
			this.getView().byId("Amount").setVisible(true);
			this.getView().byId("StoredDate").setVisible(true);
			this.getView().byId("Status").setVisible(true);
		},
		// DuyNK11
		onAddButtonPressed: function () {
			// this.getRouter().navTo("addStock");
			var oView = this.getView(),
				that = this;
			Fragment.load({
				id: oView.getId(),
				name: "Team2.Fragments.addStock",
				controller: that
			}).then(function (oDialog) {
				oView.addDependent(oDialog);
				that.oFragment.addStock = oDialog;
				that.oFragment.addStock.open();
			});
		},
		onSubmit: function () {
			// 
			var oRecord = {
				"StockCode": "SC00000",
				"Name": "Sonic",
				"Plant": "SEGA",
				"StorageLocation": "HCM, VN",
				"StoredDate": "2015-02-18T00:00:00",
				"Material": [{
					"MaterialCode": "MC00001",
					"Amount": 0
				}, {
					"MaterialCode": "MC00002",
					"Amount": 0
				}]
			};
			var oModel = this.getView().getModel(),
				localdata = oModel.getProperty("/Stocks");
			localdata.unshift(oRecord);
			oModel.setProperty("/Stocks", localdata);
			oModel.refresh(true);
			// 
			MessageToast.show("Submit success");
			this.onClose();
		},
		onClose: function () {
			this.oFragment.addStock.close();
		},
		// DuyNK11
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
			//MessageToast.show("From date " + this.fromDate + " To date is " + this.toDate);
		},

		onExit: function () {
			if (this._oDialog) {
				this._oDialog.destroy();
			}
		},

		handleViewSettingsDialogPress: function () {
			if (!this._oDialog) {
				Fragment.load({
					name: "Team2.view.FilterDialog",
					controller: this
				}).then(function (oDialog) {
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
			var aFilter =[]; 
			if (this.fromDate && !this.toDate) {
				aFilter.push(new Filter("StoredDate", FilterOperator.GE, this.fromDate));
			}
			else if (this.toDate && !this.fromDate) {
				aFilter.push(new Filter("StoredDate", FilterOperator.LE, this.toDate));
			}
			else if(this.fromDate && this.toDate){
				if(this.fromDate === this.toDate){
					aFilter.push(new Filter("StoredDate", FilterOperator.Contains, this.fromDate));
				}
				else{
					aFilter.push(new Filter("StoredDate", FilterOperator.BT, this.fromDate, this.toDate));
				}
			}
			// filter binding
			var oTable = this.byId("stocksTable");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(aFilter);
			MessageToast.show("From date " + this.fromDate + " To date is " + this.toDate);
		},

		handleCancel: function () {},

		handleResetFilters: function () {
			sap.ui.getCore().byId("fromDate").setValue('');
			sap.ui.getCore().byId("toDate").setValue('');
		}

	});
});