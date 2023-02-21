sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/Device",
	"./controller/Root.controller"
], function(UIComponent, JSONModel, Filter, FilterOperator, Device, RootController) {
	"use strict";

	return UIComponent.extend("minha.app.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			UIComponent.prototype.init.apply(this, arguments);

			var oModel = new JSONModel({
				todos: []
			});
			this.setModel(oModel);

			this.getTodos();
			this.getRouter().initialize();
		},

		getTodos: function() {
			var that = this;
			fetch("https://jsonplaceholder.typicode.com/todos")
				.then(function(response) {
					return response.json();
				})
				.then(function(data) {
					that.getModel().setProperty("/todos", data);
				})
				.catch(function(error) {
					console.error("Erro ao buscar a lista de todos", error);
				});
		},

		getDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createContent: function() {
			var oViewData = {
				component: this
			};

			return sap.ui.view({
				viewName: "minha.app.view.Root",
				type: sap.ui.core.mvc.ViewType.XML,
				viewData: oViewData
			});
		}
	});
});
