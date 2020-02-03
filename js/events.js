const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (...rest) => {
  console.log('触发事件1', rest, this);
});

myEmitter.on('event', function(...rest){
  setImmediate(() => {
    console.log('异步地发生');
  });
});

myEmitter.once('eventOnce', (...rest) => {
  console.log(rest);
});
myEmitter.on('error', (err) => {
  console.error('err');
});

myEmitter.emit('event', 1, 2);

myEmitter.emit('eventOnce', 1);
myEmitter.emit('eventOnce', 2);
myEmitter.emit('error', new Error('出错'));

myEmitter.setMaxListeners(33)
console.log(myEmitter.eventNames());
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.listeners('error'));