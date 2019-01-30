

// console.log('hello yargs');
// process.argv  
// [ '/usr/local/bin/node',
//   '/Users/zhangxiangyu/workspace/yargs/hello.js',
//   'tom' ]
// var name = process.argv[2] // tom
// console.log('hello', process.argv[3]);
// var exec = require('child_process').exec; //child_process是node的子进程

// child_process.exec(command[, options][, callback])
// 创建一个shell，然后在shell里执行命令。执行完成后，将stdout、stderr作为参数传入回调方法。
// var child = exec('echo hello ' + name, function(err, stdout, stderr) {
//   if (err) throw err;
//   console.log(stdout); // hello 123
// //   console.log(stderr);
// });

// shell模块重新包装了chils_process
// var shell = require('shelljs'); // shell的本地模式
// shell.exec(`echo hello${name}`)

// shell的全局模式，允许直接在脚本中写shell命令
// require('shelljs/global');
// echo('I am coming'); // 输出I am coming
// mkdir('test'); // 新建了一个文件夹test

// // shelljs只是解决了如何调用shell命令，yargs模块能处理命令行参数
// // 指定别名
// var argv = require('yargs').alias('n', 'name').alias('g', 'age').argv;
// // node hello.js --name=tom --age=12
// // hello, I am tom; I am 12 years old
// // or
// // node hello.js --name tom --age 12
// console.log(`hello, I am ${argv.name}; I am ${argv.age} years old`);
// console.log(`hello hah, I am ${argv.n}; I am ${argv.g} years old`);
// console.log(argv._) // 获取非连接线开头的参数
// // node hello.js --name tom --age 12 A 
// // [ 'A', 'B', 'd' ]


// var argvNew = require('yargs')
// .demand(['n'])          // demand:是否必选
// .default({n: 'tom'})    // default:默认值
// .describe({n: 'your name'}).argv // describe：提示
// console.log(argvNew.n);

// var argvSecond = require('yargs').option('n', {
//   alias: 'name',
//   demand: true,
//   default: 'tom',
//   describe: 'your name',
//   type: 'string'
// }).option('g', {
//   alias: 'age',
//   demand: false,
//   default: 12,
//   describe: 'your age',
//   type: 'number'
// }).argv;
// // node hello.js --n=huahua --age=27
// // hello! I am huahua, I am 27 years old
// console.log(`hello! I am ${argvSecond.name}, I am ${argvSecond.g} years old`);

// boolean只起到开关作用，返回true或false
// var argvThird = require('yargs')
// .boolean(['n', 'g'])
// .argv
// console.log(`hello! I am ${argvThird.n}, I am ${argvThird.g} years old`);

// var argvFourth = require('yargs')
// .option('n', {
//   boolean: true
// })
// .option('g', {
//   boolean: false
// })
// .argv
// console.log(`hello! I am ${argvFourth.n}, I am ${argvFourth.g} years old`);

// yargs提供以下方法，生成帮助信息
// var argvFive = require('yargs').option('n', {
//   alias: 'name',
//   demand: true,
//   default: 'tom',
//   describe: 'your name',
//   type: 'string'
// })
// .usage('Usage: hello [options]') // 用法格式
// .example('hello -n tom', 'say hello to tom') // 提供例子
// .help('h')  //显示帮助信息
// .alias('h', 'help info')
// .epilog('copyright 2018') // 出现在帮助信息的结尾
// .option('g', {
//   alias: 'age',
//   demand: false,
//   default: 12,
//   describe: 'your age',
//   type: 'number'
// })
// .usage('Usage: hello [options]') // 用法格式
// .example('hello -g 12') // 提供例子
// .help('h')  //显示帮助信息
// .alias('h', 'help age')
// .epilog('copyright 2018 years') // 出现在帮助信息的结尾
// .argv;
// // node hello.js --n=huahua --age=27
// // hello! I am huahua, I am 27 years old
// console.log(`hello! I am ${argvFive.name}, I am ${argvFive.g} years old`);

function hander (argv) {
  console.log(argv._)
}
var yagvSix = require('yargs')
.command('morning', 'good morning', function (yargs) {
  console.log('Good Morning')
}, hander)
.command('evening', 'good evening', function (yargs) {
  console.log('Good Evening')
})
.argv;
console.log(`hello ${yagvSix.n}`)

// require('shelljs/global');
// var yagvSix = require('yargs')
// .command('morning', 'good morning', function (yargs) {
//   echo('Good Morning')
// })
// .command('evening', 'good evening', function (yargs) {
//   echo('Good Evening')
// })
// .argv;
// console.log(`hello ${yagvSix.n}`)

// require('shelljs/global');
// require('yargs')
// .command('morning', 'good morning', function (yargs) {
//   echo('Good Morning');
//   let argv = yargs.reset().option('m', {
//     alias: 'message',
//     description: 'provide any sentence'
//   })
//   .help('h')
//   .alias('h', 'help')
//   .argv
//   echo(argv.m);
// })
// .argv

console.log(process.cwd())

