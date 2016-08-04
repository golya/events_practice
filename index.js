'use strict';

const util = require('util');
const EventEmitter = require('events');

function TestEmitter() {
  EventEmitter.call(this);
}

util.inherits(TestEmitter, EventEmitter);

const test = new TestEmitter();

test.on('push', function() {
  console.log('push');
});

test.emit('push');
