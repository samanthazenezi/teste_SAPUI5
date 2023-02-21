sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("minha.app.controller.Root", {

		onSearch: function(oEvent) {
			var sQuery = oEvent.getParameter("query");

			var oFilter = new Filter("title", FilterOperator.Contains, sQuery);

			var oList = this.byId("list");
			var oBinding = oList.getBinding("items");
			oBinding.filter(oFilter, "Application");
		},

		onSelectionChange: function(oEvent) {
			var oListItem = oEvent.getParameter("listItem");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				todoPath: oListItem.getBindingContext().getPath().substr(1)
			});
		}
	});
});
