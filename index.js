'use strict';

const util = require('util');
const EventEmitter = require('events');
util.inherits(TestEmitter, EventEmitter);

function TestEmitter() {
  EventEmitter.call(this);
}

const test = new TestEmitter();

test.on('push', function(msg) {
  console.log('push', msg);
});

test.emit('push', 'my message');
