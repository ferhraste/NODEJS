var http = require("http");
let fs = require('fs');
var entorno = require('./modulos/config.js').config();
var datosJS = fs.readFile('files/datos.json', 'utf-8', function (err, data) {
    if(err) {
      console.log('error: ', err);
    } else {
        var server = http.createServer(function (req,res){
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
        });
        
        var puerto;
        if(entorno.PORT) {
          puerto = entorno.PORT;
        } else {
          puerto = 3000;
        }
        server.listen(puerto, function(){
           console.log("tu server en " + this.address().port);
        });
    }
});
