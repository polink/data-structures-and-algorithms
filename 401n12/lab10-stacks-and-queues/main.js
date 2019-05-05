'use strict';

const Node = require('./lib/node');
const Stack = require('./lib/stacks-and-queues');
const Queue = require('./lib/stacks-and-queues');

const stack = new Stack();

stack.push(1);
stack.push(2);
console.log(JSON.stringify(stack));
stack.peek();
stack.pop();
console.log(JSON.stringify(stack));

