const code = `let a = 3;`;

const UglifyJS = require('uglify-js');

const ast = UglifyJS.parse(code);

console.log(ast);
