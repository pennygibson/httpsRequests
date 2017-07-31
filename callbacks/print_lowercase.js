var getHTML = require('../step5');

var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step6/lowercase.html'
    };

    function printLowerCase (input){
      console.log(input.toLowerCase());
    }

    getHTML(requestOptions, printLowerCase);