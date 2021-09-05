var os=require('os');
 
/*DEPRECADO --> 
console.log('EOL:         '+os.EOL()); 
<-- DEPRECADO */
console.log('ARCH:        '+os.arch());
console.log('CPUS:        '+JSON.stringify(os.cpus(),null,2));
console.log('ENDIANNESS:  '+os.endianness());
console.log('HOMEDIR:     '+os.homedir());
console.log('HOSTNAME:    '+os.hostname());
console.log('LOADAVG:     '+os.loadavg());
console.log('NETWORK INT: '+JSON.stringify(os.networkInterfaces(),null,2));
console.log('PLATFORM:    '+os.platform());
console.log('RELEASE:     '+os.release());
console.log('TMPDIR:      '+os.tmpdir());
console.log('TYPE:        '+os.type());
console.log('UPTIME:      '+os.uptime());
var antes_array =os.freemem();

var ej4Arr=[];
for (let i = 0; i < 100001; i++) {
    ej4Arr.push(1) ;
  }
console.log('FREEMEM antes del arr  : ' + antes_array +' BYTES');
console.log('FREEMEM despues del arr: '+os.freemem() +' BYTES');

//05sep1831