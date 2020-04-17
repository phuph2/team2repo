sap.ui.define([
	"Team2/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/UIComponent",
	"../model/formatter",
], function (BaseController, JSONModel, Filter, FilterOperator, UIComponent, formatter) {
	"use strict";
	
	return BaseController.extend("Team2.controller.ManageStock", {
		formatter: formatter,
		
		onInit : function () {
	        var _oODataModel = this.getOwnerComponent().getModel();
			var oModel = new sap.ui.model.odata.ODataModel("/", true);
    	},
		
    	onAddButtonPressed: function () {
    		
    	},
    	
    	onSearchTable: function (oEvent) {
    		// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains , sQuery));
			}

			// filter binding
			var oTable = this.byId("stocksTable");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(aFilter);
    	}
			
	});
});