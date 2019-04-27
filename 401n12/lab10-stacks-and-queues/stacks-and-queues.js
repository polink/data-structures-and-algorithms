'use strict';

class Node {
    constructor (value, next){
        this.value = value;
        this.next = next;
    }
    pointer(node){
        this.next = node;
    }
}

class Stack {
    constructor(){
        this.top=null;
    }
    // how do i instantiate a stack when this class is called?

    push(value) {
        let nextTop = new Node(value);
        nextTop.pointer(this.top);
        this.top = newTop;
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
        return this.top.value;
    }
}

class Queue {
    constructor(front) {
        this.front = front;
    }

    enqueue (value) {
        // adds a new node with this value to back of queue
        // O(1) time performance?

    }

    dequeue (){
        //removes node from front of queue, return value of node
    }

    peek () {
        return front.value;
        // need reference to node?
    }
}