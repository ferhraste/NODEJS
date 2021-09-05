var eventos = require('events');

var EmisorEventos = eventos.EventEmitter;

var ee = new EmisorEventos();

ee.on('datos', function(fecha){ 
   console.log(fecha); 
});

setInterval(function(){
   ee.emit('datos', Date.now()); 
}, 500);