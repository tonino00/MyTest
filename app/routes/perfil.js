module.exports = function(application){
	application.get('/perfil', function(req, res){
		application.app.controllers.perfil.perfil(application, req, res);
	});

}

module.exports.sair = function(application, req, res){

	req.session.destroy( function(err){
		res.render("index", {validacao: {}});
	});
}