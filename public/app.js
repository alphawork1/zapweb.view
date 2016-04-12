yum.define([
	PI.Url.create('Public', '/ui.config.js'),
    PI.Url.create('Public', '/app.css'),
    PI.Url.create('Home', '/page.js'),
    PI.Url.create('Auth', '/page.js'),
    PI.Url.create('UI', '/progress/progress.js')
], function (html) {
    
    Class('App').Extend(Mvc.Component).Body({

        instances: function () {
            this.progress = new UI.Progress({
                color: '#007acc'
            });
        },

        viewDidLoad: function () {
            var self = this;
            
            Auth.Model.create().isAutenticate().ok(function(){
                
                self.home = new Home.Page();
                self.home.render(self.view.body);
               
               self.base.viewDidLoad();     
            }).error(function(){
                
                self.auth = new Auth.Page();
                self.auth.render(self.view.body);
                
                self.base.viewDidLoad();
            }).done(function(){
                $('#progress').remove();
            });            
        },

        progressLoad: function (total) {

            if (!this.progress.isRender()) {
                this.progress.render($('#progress'));
            }

            this.progress.total(total);
        }

    });

});