const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
const nameEvent = 'user:click';

myEmitter.on(nameEvent, function (click) {
  console.log('An user clicked', click);
});

myEmitter.emit(nameEvent, 'on scroll bar');
myEmitter.emit(nameEvent, 'on ok button');