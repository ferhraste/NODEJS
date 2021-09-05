var fs = require("fs");
console.log("hola");
fs.readFile("./files/ejemplo_1.txt", function(error, archivo){
   console.log("archivo",archivo);
})
console.log("ya!");