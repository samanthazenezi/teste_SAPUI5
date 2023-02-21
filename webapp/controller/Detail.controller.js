sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("minha.app.controller.Detail", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function(oEvent) {
			var sPath = "/" + oEvent.getParameter("arguments").todoPath;
			this.getView().bindElement({
				path: sPath,
				model: "todos"
			});
		}
	});
});
