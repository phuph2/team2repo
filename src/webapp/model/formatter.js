sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (iAmount) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var sStatus;
			if(iAmount === 0)  // cái này sai rùi đó.
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
		}
	};
});