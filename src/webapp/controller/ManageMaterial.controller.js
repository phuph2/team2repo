sap.ui.define([
	"Team2/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/ui/model/Filter",
	'sap/m/MessageToast',
	"sap/ui/model/FilterOperator"
], function (BaseController, JSONModel, Fragment, Filter, MessageToast, FilterOperator) {
	"use strict";
	
	return BaseController.extend("Team2.controller.ManageMaterial", {
		oFragment: {
			addMaterial: {}
		},
		_oData: {},
		onInit : function () {
	         // set data model on view
	         this._oData = {
	         	Materials: [
	         		{
							"MaterialCode": "MC00001",
							"Name": "Iphone X",
							"Type": "SmartPhone",
							"Price": 1000,
							"BaseUnit": "USD",
							"Description": "iPhone X 64GB chính hãng"
						}, {
								"MaterialCode": "MC00002",
								"Name": "SamSung Note 10+",
								"Type": "SmartPhone",
								"Price": 1200,
								"BaseUnit": "USD",
								"Description": "Kích thước: 77.2 mm x 162.3 mm x 7.9 mm. Trọng lượng: 196 g. Bộ nhớ đệm: 12 GB. Bộ nhớ trong: 256 GB"
							}, {
								"MaterialCode": "MC00004",
								"Name": "SamSung Note 10 lite",
								"Type": "SmartPhone",
								"Price": 1000,
								"BaseUnit": "USD",
								"Description": "Kích thước: 77.2 mm x 162.3 mm x 7.9 mm. Trọng lượng: 196 g. Bộ nhớ đệm: 6 GB. Bộ nhớ trong: 128 GB"
							}, {
								"MaterialCode": "MC00005",
								"Name": "Apple iPad 10.2 2019 Wi-Fi 32GB",
								"Type": "Tablet",
								"Price": 500,
								"BaseUnit": "USD",
								"Description": "Kích thước: 25 x 17.4 x 0.7 cm. Trọng lượng: 483g.Bộ nhớ trong: 32 GB. Chipset: Apple A10"
							}, {
								"MaterialCode": "MC00006",
								"Name": "Apple iPad Pro 11 2020 WiFi 128GB",
								"Type": "Tablet",
								"Price": 1500,
								"BaseUnit": "USD",
								"Description": "Kích thước: 247.6 x 178.5 x 5.9 mm. Trọng lượng: 417g. Bộ nhớ trong: 128 GB. Chipset: Apple A12Z Bionic"
							}, {
								"MaterialCode": "MC00007",
								"Name": "Apple MacBook Air 13 inch 128GB 2017",
								"Type": "Laptop",
								"Price": 1500,
								"BaseUnit": "USD",
								"Description": "Kích thước: 32.5 x 22.7 x 1.7 cm. Trọng lượng: 1.35 kg. CPU: Intel Core i5 Dual-core 1.8 GHz, Turbo Boost lên đến 2.9 GHz, 3 MB L3 cache"
							}, {
								"MaterialCode": "MC00008",
								"Name": "Apple MacBook Air 13 256GB 2020",
								"Type": "Laptop",
								"Price": 2000,
								"BaseUnit": "USD",
								"Description": "Kích thước: 0.41–1.61cm x 30.41cm x 21.24cm. Trọng lượng: 1.29kg. CPU: 1.1GHz dual-core Intel Core i3, Turbo Boost up to 3.2GHz, with 4MB L3 cache"
							}, {
								"MaterialCode": "MC00009",
								"Name": "Macbook Air 13 128GB 2019",
								"Type": "Laptop",
								"Price": 1800,
								"BaseUnit": "USD",
								"Description": "Kích thước: Cao 0.41–1.56 cm x Rộng 30.41 cm x Sâu 21.24 cm. Trọng lượng: 1.25kg. CPU: Intel Core i5 1.6GHz - 3.6GHz"
							}, {
								"MaterialCode": "MC00010",
								"Name": "Apple MacBook Air 13 inch 128GB 2018",
								"Type": "Laptop",
								"Price": 1800,
								"BaseUnit": "USD",
								"Description": "Kích thước: 30.41 x 21.24 x 1.56 cm. Trọng lượng: 1.25kg. CPU: Intel Core i5 1.6GHz dual-core, Turbo Boost lên đến 3.6GHz, 4MB L3 cache"
							}]
	        	};
	        	var oJsonModel = new JSONModel();
				oJsonModel.setProperty("/", this._oData);
				this.getView().setModel(oJsonModel);
    		},
    	
    	onAddButtonPressed: function () {
    		//this.getRouter().navTo("addMaterial");
    		var oView = this.getView(),
				that = this;
				if(!this.dialog){
				Fragment.load({
				id: "idFragmentAddMaterial",
				name: "Team2.Fragments.addMaterial",
				controller: that
			}).then(function (oDialog) {
				oView.addDependent(oDialog);
				that.oFragment.addMaterial = oDialog;
				that.oFragment.addMaterial.open();
			});
			}else{
				this.dialog.open();
			}
    	},
    	onSubmit: function(){
    		var sName = sap.ui.getCore().byId("idFragmentAddMaterial--idName").getValue(),
    			sType = sap.ui.getCore().byId("idFragmentAddMaterial--idType").getValue(),
    			sPrice = sap.ui.getCore().byId("idFragmentAddMaterial--idPrice").getValue(),
    			sDescription = sap.ui.getCore().byId("idFragmentAddMaterial--idDescription").getValue();
    		var oRecord = {
					"MaterialCode": "MC" + parseInt(Math.random() * 1000000, 10),
					"Name": sName,
					"Type": sType,
					"Price": sPrice,
					"BaseUnit": "USD",
					"Description": sDescription
    		};
    		var oModel = this.getView().getModel(),
				localdata = oModel.getProperty("/Materials");
			localdata.unshift(oRecord);
			oModel.setProperty("/Materials", localdata);
			oModel.refresh(true);
			// 
			MessageToast.show("Submit success");
			this.onClose();
    	},
    	onClose: function () {
			this.oFragment.addMaterial.close();
    	},
    	onSearchTable: function (oEvent) {
    		// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oTable = this.byId("materialsTable");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(aFilter);
    	}
			
	});
});