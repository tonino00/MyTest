module.exports = function(application){
	application.get('/perfil', function(req, res){
		application.app.controllers.perfil.perfil(application, req, res);
	});
}

	application.get('/sair', function(req, res){
		application.app.controllers.perfil.sair(application, req, res);
	});
}