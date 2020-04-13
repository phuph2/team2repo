sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	
	return Controller.extend("Team2.controller.App", {
		onInit : function () {
	         // set data model on view
	         var oData = {
	            helloObject : {
	               value : "Hi team 2!"
	            }
	         };
	         var oModel = new JSONModel(oData);
	         this.getView().setModel(oModel);
    	}
			
	});
});