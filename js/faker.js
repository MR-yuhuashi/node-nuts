var faker = require('faker');

let ua = faker.internet.userAgent();
console.log(ua);

console.log({
  webKit: ua.indexOf('AppleWebKit') > -1,
  ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
  weixin: ua.indexOf('MicroMessenger') > -1
}) ;

console.log(process.platform);