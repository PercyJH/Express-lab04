var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_saludo);
app.get('/productos',c_productos);

function c_inicio(req,res) {
    res.send('<h1>Hola y BIENVENIDO</h1>');
}
function c_saludo(req,res) {
    res.send('<h1>MIS CLIENTES</h1><hr><ul><ol>Almeyda</ol><ol>Ugarte</ol><ol>Arias</ol></ul>');
}
function c_productos(req,res) {
    res.send('<h1>MIS PRODUCTOS</h1><hr><ul><ol>Clases de Inglés Intermedio</ol><ol>Clases de Inglés Básico</ol><ol>Clases de código Morse</ol></ul>')
}

function c_server() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ':' + port);
}

var server = app.listen(8000,c_server);
