module.exports.cadastro = function (application, req, res){
    res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = function(application, req, res){

    var dadosForm = req.body;

    req.assert('username', 'Usuário não pode ser vazio').notEmpty();
    req.assert('email', 'Email não pode ser vazio').notEmpty();
    req.assert('password', 'Este campo não pode ser vazio').notEmpty();
    req.assert('confirm-password', 'Este campo não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
        return;
    }

    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);

    res.send('podemos cadastrar')
}