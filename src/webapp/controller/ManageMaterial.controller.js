sap.ui.define([
	"Team2/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, JSONModel, Filter, FilterOperator) {
	"use strict";
	
	return BaseController.extend("Team2.controller.ManageMaterial", {
		onInit : function () {
	         // set data model on view
    	},
    	
    	onAddButtonPressed: function () {
    		
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