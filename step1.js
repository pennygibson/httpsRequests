var https = require('https');

function getAndPrintHMTLChunks(){
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, function(response){
  response.setEncoding('utf8');

  response.on('data', function (data){
    console.log('Chunk Received', data.length);
    console.log(data + '\n')

  });

  response.on('end', function(){
    console.log('Response stream compete.')
  });
});
}
getAndPrintHMTLChunks();