module.exports.perfil = function(application, req, res){

	if(req.session.autorizado){
		res.render("perfil");
	} else{
        res.send('Usuário precisa fazer login');
    }
}

module.exports.sair = function(application, req, res){

	req.session.destroy( function(err){
		res.render("index", {validacao: {}});
	});
}