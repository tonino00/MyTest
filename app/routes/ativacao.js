module.exports = function(application){
	application.get('/ativacao', function(req, res){
		application.app.controllers.ativacao.ativacao(application, req, res);
	});
}