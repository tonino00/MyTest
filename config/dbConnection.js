/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
    console.log('Entrou na função de conexão');
    var db = new mongo.Db(
        'teste',
        new mongo.Server(
            'mongodb://admin:123mudar@ds249787.mlab.com', // string contendo o endereço do servidor
            49787, // porta de conexão
            {}
        ),
        {}
    );

    return db;
}

module.exports = function(){
    return connMongoDB;
}




