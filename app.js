// Node.js module variable contains information about the current module
console.log(module);

// The `module` object has a property called `exports`  
// that is used to export functionality from the module
console.log('exports:' + module.exports);

//to import a module
//var logger = require('./logger');

//instead of creating it as a variable we can create it as a constant
const log = require(__dirname + '/logger');

//to access a function in a logger module
//logger.log('Hello from the logger module');

//to print a variable from another module
//console.log(logger.loggingUrl);

// to rename variable press the F2 key
// if there is only one function in the module it can be called as follows
log('Hello world! from the logger module');

//Module Wrapper function
//In Node.js, every module is wrapped in a function by the module system. This function provides several parameters to each module. These parameters are:
//exports: A shortcut to module.exports. It is used to export objects, functions, or variables from a module.
//require: A function to import other modules or packages.
//module: An object representing the current module. It contains metadata about the module and the exports property.
//__filename: The absolute path of the current module file.console.log(exports);     // {}
console.log(require);     // [Function: require]
console.log(module);      // Module object
console.log(__filename);  // Full path to the current file
console.log(__dirname);   // Full path to the directory of the current file
//__dirname: The absolute path of the directory containing the current module.


var url = 'https://nodejs.org/en/docs';

//Path module
const path = require('path');
var parseObject = path.parse(__filename);
console.log(parseObject);


//OS Module
const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();
console.log('Total Memory: ' + totalMem);
console.log(`Free Memory: ${freeMem}`);


//file system module
const fs = require('fs');
var filePath = fs.readdir('./', function(err, files) {
    if (err) {
        console.log(`error reading directory: ${err}`);
    } else {
        console.log(`the file path is: ` + files );
    }
}
);


const EventEmitter = require('events');
const emmiter = new EventEmitter( );

//register a listener
emmiter.on('message logged', function(arg){
    console.log(`listener called test ${arg.id} ${arg.url}`);
})

//raise an event
emmiter.emit('message logged', {id: 1, url:'test.com'} );

//raise logging and send some data