'use strict';

const util = require('util');
const EventEmitter = require('events');
util.inherits(TestEmitter, EventEmitter);

function TestEmitter() {
  EventEmitter.call(this);
}

function AsyncMethod() {
  return Promise.resolve('done');
}

const test = new TestEmitter();

test.on('push', function(msg) {
  console.log('push', msg);
  AsyncMethod().then((result) => {
    console.log(result);
  });
  console.log('event end');
});

test.emit('push', 'my message');
