let fs = require('fs');
fs.readFile('files/ejemplo_7.txt', 'utf-8', function (err, data) {
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
});