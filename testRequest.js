
var request = require('request');
var fs = require('fs');
console.log('Downloading image...');
const writeStream = fs.createWriteStream('./future.jpg');
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         response.pipe(writeStream);
       })
       .end(console.log('Download complete!')
       );
