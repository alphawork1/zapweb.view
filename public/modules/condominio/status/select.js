yum.define([
    // PI.Url.create('Condominio', '/status/select.html'),
    // PI.Url.create('Condominio', '/status/select.css')
], function(html){

    Class('Condominio.Status.Select').Extend(Mvc.Component).Body({

        instances: function(){
            this.view = new Mvc.View('<div> <div at="select"></div> </div>');
            
            this.select = new UI.SelectionBox({label: 'Selecione'});
        },
        
        viewDidLoad: function(){
            
            // this.select.add(new UI.Selection.Separador());
            this.select.add(new UI.Selection.Item({ label: 'Cliente', showMenu: false }));
            this.select.add(new UI.Selection.Item({ label: 'Arquivado', showMenu: false }));
            this.select.add(new UI.Selection.Item({ label: 'Em negócio', showMenu: false }));
            
            this.base.viewDidLoad();
        },

    });

});