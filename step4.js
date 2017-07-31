var https = require('https');

function getHTML(options, callback){
  var input;

    https.get(options, function(response){
    response.setEncoding('utf8');

    response.on('data', callback){
      input += data;
      console.log(input);
    };
    response.on('end', function(){
    callback(input)
  });

  });

}
function printHTML(html){
      console.log(html)
    }
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

getAndPrintHTML(requestOptions, printHTML);
