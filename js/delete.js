var fs = require('fs-extra');
var path = require('path'); 
console.log(process.cwd());
// // 假设这个目录下有很多文件和文件夹
// // fs.emptyDirSync(`${process.cwd()}/test/v1`, function (err) {
// //   if (!err) console.log('success!')
// // })
// fs.outputJsonSync(path.join(process.cwd(), '/test/v1', 'version.txt'), {
//   name: 'delete'
// });
// fs.ensureFileSync(path.join(process.cwd(), '/test/v2', 'version.txt'));
// fs.removeSync(path.join(process.cwd(), '/test'));
const aaa=fs.readdirSync(path.join(process.cwd(), '/js/my/aa'));
console.log(aaa);