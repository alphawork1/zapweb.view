yum.define([
	PI.Url.create('Prospecto', '/page/page.html'),
	PI.Url.create('Prospecto', '/page/page.css')
], function (html) {

    Class('Prospecto.Page').Extend(PI.Page).Body({

        instances: function () {
            this.view = new Mvc.View(html);
            
            this.title = 'Pesquisa Prospecto';
        },

        viewDidLoad: function () {
            
        },

        events: {
		
            '{unidadeLabel} click': function(){
                this.showPopupSelectUnidade();
            }
		}


    });

});