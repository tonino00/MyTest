var crypto = require("crypto");



function UsuariosDAO(connection){
	this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){

			
			var password_Hash = crypto.createHash("md5").update(usuario.senha).digest("hex");
			
			usuario.senha = password_Hash;
			
			collection.insert(usuario);

			mongoclient.close();
		});
	});
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){

			var password_Hash = crypto.createHash("md5").update(usuario.senha).digest("hex");
			usuario.senha = password_Hash;

			collection.find(usuario).toArray(function(err, result){

				if(result[0] != undefined){

					req.session.autorizado = true;

					req.session.email = result[0].email;
					req.session.senha = result[0].senha;
				}

				if(req.session.autorizado){
					res.redirect("perfil");
				} else {
					res.render("index", {validacao: {}});
				}

			});
			mongoclient.close();
		});
	});
}


module.exports = function(){
	return UsuariosDAO;
}