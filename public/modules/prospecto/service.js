yum.define([
	PI.Url.create('Prospecto', '/page/page.js'),
	PI.Url.create('Prospecto', '/model.js')
], function (html) {

	Class('Service.Prospecto').Extend(PI.Service).Body({

		load: function(app){
			this.base.load(app);
		},

		routes: {
			
			'Prospecto/Pesquisar': function(){
				setTimeout(function() {
					var page = new Prospecto.Page({
						model: new Prospecto.Model()
					});
					
					app.home.setPage( page );
				}, 1);
			}
		}

	});

});