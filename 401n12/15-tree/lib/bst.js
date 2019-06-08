'use strict';

const Node = require('./node');
const Tree = require('./tree');

class BST extends Tree {
    constructor(){
        super();
        // this.count = 1; (size() {return this.count;} function to count size of BST or tree
    }

    add(node, value){
        node = new Node;
        node.value = value;

        if(!this.root){
            this.root = node;
            return;
        }
        let current = this.root;

        if (node.value > current.value) {
            if(!current.right){
                current.right = node;
            }

            current = current.right;
        } else {
            if(!current.left){
                current.left = node;
            }

            current = current.left;
        }
    }

    contains(value){
        if(!this.root){return null;}

        if(this.root.value === value){
            return true;
        }

        let current = this.root;

        while(current.value !== value){
            if (current === null) { // base case, but it's borked! likely need recursion for this
                return null;
            } else if (value > current.value) {
                current = current.right;
            } else if (value < current.value) {
                current = current.left;
            } else if (value === current.value) {
                return true;
            }
        }
    }
}

module.exports = BST;