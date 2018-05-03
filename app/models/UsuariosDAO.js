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

	var transporter = nodemailer.createTransport({
		service:'Gmail',
		auth: {
			user:'myteste2018@gmail.com',
			pass:'Locadados2018'
		}
	});

	var mailOptions = {
	  from: 'contato@locadados.com.br',
	  to: usuario.email,
	  subject: 'Email de confirmação de cadastro',
	  text: 'Obrigado por se cadastrar na locadados!',
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  }
	});

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
			if(result != undefined){

				req.session.autorizado = true;

				req.session.email = result.email;
				req.session.senha = result.senha;
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