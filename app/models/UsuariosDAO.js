var crypto = require("crypto");
var nodemailer = require('nodemailer');



function UsuariosDAO(connection){
	this._connection = connection;
}

UsuariosDAO.prototype.inserirUsuario = function(usuario, res) {
	var dados = {
		operacao:"inserir",
		usuario:usuario,
		collection: "usuarios",
		callback: function(err, result) {
		}
	};

	var password_Hash = crypto.createHash("md5").update(usuario.senha).digest("hex");
	usuario.senha = password_Hash;
	
	this._connection(dados);
};

UsuariosDAO.prototype.autenticar = function(usuario, req, res){

	var dados = {
		operacao:"buscar",
		usuario:usuario,
		collection: "usuarios",
		callback: function(err, result) {
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
		}
	};


			var password_Hash = crypto.createHash("md5").update(usuario.senha).digest("hex");
			usuario.senha = password_Hash;

			this._connection(dados);
}


module.exports = function(){
	return UsuariosDAO;
}