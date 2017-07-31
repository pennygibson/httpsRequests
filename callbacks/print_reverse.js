var getHTML = require('../step5');

var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step6/reverse.html'
    };

    function reverse (input){
      console.log(input.split('').reverse().join(''));
    }

    getHTML(requestOptions, reverse);