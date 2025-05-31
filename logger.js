//variable
//var url = 'http://mylogger.io/log';

//function
function log(message) {
    //Send an http request
    console.log(message);
}

//exports the log function
//module.exports.log = log;

//exports the log variable
//module.exports.loggingUrl = url;

//if the module contains only the function log we can also export it as below
module.exports = log;
