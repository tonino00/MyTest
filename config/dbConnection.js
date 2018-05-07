
var mongo = require("mongodb").MongoClient;
var assert = require("assert");

const url = "mongodb://admin:123mudar@ds249787.mlab.com:49787/teste";
const dbName = "teste";

var connMongoDB = function(dados) {
    mongo.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        query(db, dados);
        client.close();
        });
    };

function query(db, dados) {
    var collection = db.collection(dados.collection);
    switch (dados.operacao) {
        case "inserir":
        collection.insertOne(dados.usuario, dados.callback); 
            break;
        default:
            break;

        }
    }



    function query(db, dados) {
        var collection = db.collection(dados.collection);
        switch (dados.operacao) {
            case "buscar":
            collection.find(dados.usuario,dados, dados.callback); 
                break;
            default:
                break;

            }
        }



module.exports = function(){
    return connMongoDB;
}