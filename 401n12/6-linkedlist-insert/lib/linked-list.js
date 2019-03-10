'use strict';

const Node = require('./node');

/* SUMMARY

Variables
    HEAD

Behavior
    Insert Values ->
    Remove Values
    Interate/Loop
 */

class LinkedList{
    constructor(){
        this.head = null;
    }


    insertAtHead(value){
        const newNode = new Node(value);
        // 1 - Connects newNode to list
        newNode.next = this.head;

        // 2 - reassigning to HEAD
        this.head = newNode;
    }

    insertAtTail(value){
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;

        while(current.next) {
            // While we can move to the right
            current = current.next
        }
        // Once the while loop is over, then we're at the end
        // current.next is equal to null right now
        // next part makes a new connection
        current.next = newNode;
    };

    find(value){
        if (!this.head) {
            throw new Error('__ERROR__ List is empty!');
        }
        if (this.head.value === value) {
            return this.head;
        }

        // looping over linked list
        let current = this.head;
        while (current.next) {
            //checking if we find the value
            if (current.next.value === value) {
                return current.next;
            }
            current = current.next;
        }
        // if we're here, we didn't find anything
        return null;
    }

    append(value){
    // inserts new node with given value to end of list
        const newNode = new Node (value);
        let current;
        // if list is empty, make a new Node
        if (this.head === null) {
            this.head = newNode;
        } else {
            // otherwise, this.head goes through the list
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            // ... and add a node
            current.next = node;
        }
    }

    insertBefore(value, newVal){
        // inserts new node with given newValue before Value
        let newNode = new Node(newVal);
        let current;
        if(!this.head) {
            throw new Error ('__ERROR__ List is empty!');
        }
        if (this.head.value === value) {
            //unsure about logic here
            current = newNode;
            current.next = this.head;
            return 'New node added before.'
        } else {
            while (current.next){
                if (current.next.value === value){
                    current = newNode;
                    current.next = this.head;
                    return 'New node inserted before.';
                }
                current = current.next;
            }
        }
    }

    insertAfter(value, newVal){
    // inserts new node with given newValue after Value
        const newNode = new Node (newVal);
        let current;
        if(!this.head) {
            throw new Error ('__ERROR__ List is empty!');
        }
        if (this.head.value === value) {
            current = this.head;
            current.next = newNode;
            return 'New node inserted after.';
        } else {
        // otherwise, current goes through the list
            current = this.head;
            while (current.next) {
                if (current.next.value === value){
                    current = current.next;
                    current.next = newNode;
                    return 'New node inserted after.';
                }
                current = current.next;
            }
        }
    }
}

module.exports = LinkedList;