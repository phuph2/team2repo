sap.ui.define([
	"Team2/controller/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(Controller, History, MessageToast){
	"use strict";
	return Controller.extend("Team2.controller.AddMaterial",{
		onInit: function(){
			this._oMessageManager = sap.ui.getCore().getMessageManager();
			this._oMessageManager.registerObject(this.getView(), true);
			this.setModel(this._oMessageManager.getMessageModel(), "message");
		},         
		
	});
});