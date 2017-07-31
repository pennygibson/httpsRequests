var https = require('https');

function getAndPrintHTML(){
  var input;
  var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
    https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    response.on('data', function (data){
      input += data;
      console.log(input);
    });

  });
}
getAndPrintHTML();
