var http = require("http");
var entorno = require('./modulos/config.js').config()
var server = http.createServer(function (peticion, respuesta){
   respuesta.end("Hola Mundo");
});

var puerto;
if(entorno.PORT) {
  puerto = entorno.PORT;
} else {
  puerto = 3000;
}
server.listen(puerto, function(){
   console.log("tu servidor est� listo en " + this.address().port);
});