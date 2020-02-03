#!/usr/bin/env node
// require('yargs') // eslint-disable-line
//   .command('serve [port]', 'start the server', (yargs) => {
//     yargs
//       .positional('port', {
//         describe: 'port to bind on',
//         default: 5000
//       })
//   }, (argv) => {
//     if (argv.verbose) console.info(`start server on :${argv.port}`)
//     serve(argv.port)
//   })
//   .option('verbose', {
//     alias: 'v',
//     type: 'boolean',
//     description: 'Run with verbose logging'
//   })
//   .argv


// const spawn = require('cross-spawn');
 
// // Spawn NPM asynchronously
// const child = spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });
 
// // Spawn NPM synchronously
// const result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });

var esprima = require('esprima');
var program = 'const answer = 42';
console.log(esprima.tokenize(program));


