var fs = require('fs-extra');
fs.copy('/Users/user/working/yargs/test', '/Users/user/working/yargs/test1', function (err) {
  if (err) return console.log(err)
  console.log('success')
})