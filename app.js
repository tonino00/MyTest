/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen('https://locadados.herokuapp.com/', function(){
	console.log('Servidor online');
})