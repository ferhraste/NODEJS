var http = require("http");
let fs = require('fs');

var server = http.createServer(function (peticion, respuesta){
	
	fs.readFile('files/ejemplo_7.txt', 'utf-8', function (err, data) {
	  if(err) {
		console.log('error: ', err);
	  } else {
		respuesta.end(data);
	  }
	});
	
	
   
});

server.listen(3000, function(){
   console.log("tu servidor est� listo en " + this.address().port);
});