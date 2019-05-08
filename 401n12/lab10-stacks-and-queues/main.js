'use strict';

let clas = require('./lib/stacks-and-queues');
const Node = require('./lib/node');
const Stack = clas.Stack;
const Queue = clas.Queue;

const stack = new Stack();

stack.push(1);
stack.push(2);
console.log(JSON.stringify(stack));
stack.peek();
stack.pop();
console.log(JSON.stringify(stack));

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.peek();
queue.dequeue();

