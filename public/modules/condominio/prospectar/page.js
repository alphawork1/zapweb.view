yum.define([
    PI.Url.create('Condominio', '/prospectar/page.html'),
    PI.Url.create('Condominio', '/prospectar/page.css'),
    
    PI.Url.create('Condominio', '/prospectar/search/search.js')
], function(html) {

    Class('Condominio.Prospectar.Page').Extend(PI.Page).Body({

        instances: function() {
            this.view = new Mvc.View(html);

            this.status = new Condominio.Status.Select();

            this.pesquisa = new Condominio.Prospecto.Search();

            this.title = 'Pesquisa Prospecto';

            this.observacao = new UI.RichText({
                dataModel: 'Observacao',
                placeholder: 'Informe uma observação',
                autosize: true
            });
        },

        viewDidLoad: function() {

        },

        events: {

        }


    });

});