yum.define([
	// PI.Url.create('Sindico', '/model.js')
], function () {

	Class('Prospecto.Model').Extend(Mvc.Model.Base).Body({

		instances: function () {

		},

		init: function () {
			this.base.init('/Prospecto');
		},


		initWithJson: function (json) {
			var model = new Prospecto.Model(json);
		},



	});
});