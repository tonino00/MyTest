var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
var connMongoDB = function () {
 
 // Connection URL
 var url = 'mongodb://admin:123mudar@ds249787.mlab.com:49787/teste';
 
 // Use connect method to connect to the Server
 MongoClient.connect(url, {
  poolSize: 10, ssl: true
}, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
 });
}
module.exports = function () {
    return connMongoDB;
}