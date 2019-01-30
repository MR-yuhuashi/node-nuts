const path = require('path');
// let myPath = path.normalize(__dirname)
// console.log(__dirname)
// console.log(myPath)

// 路径结合，合并
console.log(path.join('path1', 'path2', 'path3')) // path1/path2/path3

// 获取绝对路径
console.log(path.resolve('path1', 'path2', 'path3')) // /Users/user/working/yargs/path1/path2/path3

// 获取相对路径
let from = '/Users/user/working/qnn-vue/'
let to = '/Users/user/my-tools/vue-devtools/'
console.log(path.relative(from, to))
console.log(path.relative(to, from))

// 获取路径中的目录名
console.log('path.dirname::')
console.log(__dirname) // /Users/user/working/yargs/js
console.log(path.dirname(__dirname)) // /Users/user/working/yargs

console.log('path.basename::')
console.log(path.basename('/Users/user/working/qnn-vue/package.json', '.json')) // package

// 获取路径中的扩展名
console.log('path.extname::')
console.log(path.extname('/Users/user/working/qnn-vue/package.json')) // .json

// 获取操作系统中的文件分割符
console.log(path.sep) //  /

// 获取操作系统中的目录分割符
console.log(path.delimiter) // :




