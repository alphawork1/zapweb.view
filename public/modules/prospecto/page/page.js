yum.define([
	PI.Url.create('Prospecto', '/page/page.html'),
	PI.Url.create('Prospecto', '/page/page.css')
], function (html) {

    Class('Prospecto.Page').Extend(PI.MainPage).Body({

        instances: function () {
            this.view = new Mvc.View(html);
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