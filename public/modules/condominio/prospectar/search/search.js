yum.define([
    PI.Url.create('Condominio', '/prospectar/search/search.html'),
    PI.Url.create('Condominio', '/prospectar/search/search.css'),
    
    PI.Url.create('Unidade', '/search/textbox.js')
], function(html){

    Class('Condominio.Prospecto.Search').Extend(Mvc.Component).Body({

        instances: function(){
            this.view = new Mvc.View(html);
            
            this.unidade = new Unidade.Search.TextBox();
        }

    });

});