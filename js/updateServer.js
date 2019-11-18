const {tsquery} = require('@phenomnomnominal/tsquery');
const path = require('path');
const fs = require('fs');
const escodegen = require('escodegen');

const defaultEntryAst = {
  kindName: 'PropertyAssignment',
  text: `Help: path.join(__dirname, '../../web-react/debug-ssr/zxy/v1/help/bundle.js')`
};
const artConfigPath = path.join(process.cwd(), './js/server.ts');
const readableStream = fs.createReadStream(artConfigPath);
const buffers = [];
readableStream.on('data', (data) => { buffers.push(data); });
readableStream.on('end', () => {
  const fileBufferStr = Buffer.concat(buffers).toString();

  const ast = tsquery.ast(fileBufferStr);
  console.log();
  const query = 'Identifier[name="createGetComponent"]';
  const nodes = tsquery(ast, query);

  for(let item of nodes) {
    if (item.parent.kindName === 'CallExpression' && item.parent.arguments.length === 1 && item.parent.arguments[0].kindName === 'ObjectLiteralExpression') {
      console.log('llkjhgghjkl');
      console.log(item.parent.arguments[0].properties)
      item.parent.arguments[0].properties.push(defaultEntryAst);
    }
  }

  const sourceCode = escodegen.generate(ast);
    const entryRegex = /(entry.*?\},)/s;
    const newEntry = sourceCode.match(entryRegex);
    if (newEntry === null) { return; }
    replace({
      regex: /(entry.*?\},)/s,
      replacement: newEntry[0],
      paths: [artConfigPath],
      recursive: false,
      silent: true
    });
})