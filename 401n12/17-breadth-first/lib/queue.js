'use strict';

const Node = require('./node');

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        if (this.front === null && this.back === null){
            let newLine = new Node(value);
            this.front = value;
            this.back = value;
        } else {
            let current = this.back;
            current.next = new Node(value);
            this.back = current.next;
        }
    }

    dequeue() {
        let current = this.front;
        if(!current){
            this.front === null;
            this.back === null;
        } else {
            this.front = this.front.next;
        }
        return current.value;
    }

    peek(){
        return this.front;
    }
}

module.exports = Queue;