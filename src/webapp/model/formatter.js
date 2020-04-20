sap.ui.define([
	"sap/ui/core/format/DateFormat"
	], function (DateFormat) {
	"use strict";
	return {
		statusText: function (oMaterial) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var sStatus;
			var sum=0;
			for(var i =0; i< oMaterial.length; i++){
				sum+=oMaterial[i].Amount;
			}
			if(sum===0)
				sStatus=1;
			else
				sStatus=2;
			switch (sStatus) {
				case 1:
					return resourceBundle.getText("invoiceStatusOOS");
				case 2:
					return resourceBundle.getText("invoiceStatusIS");
				default:
					return sStatus;
			}
		},
		
		statusState: function (oMaterial) {
			var sum=0;
			for(var i =0; i< oMaterial.length; i++){
				sum+=oMaterial[i].Amount;
			}
			if(sum===0)
				return "Error";
			else
				return "Success";
		},
		
		displayMaterialName: function (oMaterial) {
			var name = '';
			for(var i = 0; i < oMaterial.length; i++){
				if (name === '') {
					name=oMaterial[i].MaterialCode+ "\n";
				}
				else {
					name+=oMaterial[i].MaterialCode + "\n";
				}
				
			}
			return name;
		},
		
		displayMaterialAmount: function (oMaterial) {
			var amount = 0;
			for(var i = 0; i < oMaterial.length; i++){
				if (amount === 0) {
					amount=oMaterial[i].Amount+ "\n";
				}
				else {
					amount+=oMaterial[i].Amount + "\n";
				}
				
			}
			return amount;
		},
		
		displayStoredDate: function (oMaterial) {
			var date = '';
			var oDateFormat = DateFormat.getDateTimeInstance({pattern: "yyyy-MM-dd"});
			for(var i = 0; i < oMaterial.length; i++){
				if (oMaterial[i].StoredDate)
				{
					date += oDateFormat.format(new Date(oMaterial[i].StoredDate)) + "\n";
				}
			}
			return date;
		}
	};
});