var faker = require('faker');
console.log(faker.name.findName());
console.log(faker.finance.amount(0,3000,10));
console.log(faker.fake('{{name.lastName}}, {{name.firstName}}'));