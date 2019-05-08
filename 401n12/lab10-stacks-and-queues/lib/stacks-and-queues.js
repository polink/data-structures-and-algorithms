'use strict';

const Node = require('./node.js');

class Stack {
    constructor(){
        this.top=null;
    }
    // how do i instantiate a stack when this class is called?

    push(value) {
        let nextTop = new Node(value);
        nextTop.pointer(this.top);
        this.top = nextTop;
    }

    pop(){
        // removes node from top of stack
        let popTop = this.top;
        this.top = this.top.next; // i think this will return the next one in the stack instead of the current one.
        popTop.pointer(null);
        // return node's value?
        // return this.top.value;
    }

    peek(){
        console.log(this.top.value);
        return this.top.value;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        if (this.front === null && this.rear === null){
        let newLine = new Node(value);
        this.front = newLine;
        this.back = newLine;
        } else {
            let current = this.back;
            current.next = new Node(value);
            this.back = current.next;
        }
        // adds a new node with this value to back of queue
        // O(1) time performance?
    }

    dequeue(){
        //removes node from front of queue, return value of node
        if (this.front === null || this.front.next === null){
            this.front === null;
            this.back === null;
        } else {
            this.front = this.front.next;
        }
    }

    peek() {
        return this.front.value;
        // need reference to node?
    }
}

module.exports = Stack, Queue;