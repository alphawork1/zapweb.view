yum.define([
	PI.Url.create('Condominio', '/prospectar/page.html'),
	PI.Url.create('Condominio', '/prospectar/page.css')
], function (html) {

    Class('Condominio.Prospectar.Page').Extend(PI.Page).Body({

        instances: function () {
            this.view = new Mvc.View(html);
            
            this.title = 'Pesquisa Prospecto';
        },

        viewDidLoad: function () {
            
        },

        events: {
		
		}


    });

});