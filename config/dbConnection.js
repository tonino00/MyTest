
var mongo = require("mongodb").MongoClient;
var assert = require("assert");

const url = "mongodb://user:yourpassword@ds249787.mlab.com:49787/teste";
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
        case "buscar":
        collection.find(dados.usuario).toArray(dados.callback); 
            break;
        default:
            break;

        }
    }



module.exports = function(){
    return connMongoDB;
}