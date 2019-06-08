'use strict';

const Node = require('./node');
const Tree = require('./tree');

class BST extends Tree {
    constructor(){
        super();
        // this.count = 1; (size() {return this.count;} function to count size of BST or tree
    }

    add(node, value){
        let newNode = new Node;
        newNode.value = value;

        function _walk (node, value){
            // Base Case to stop recursion
            if (node === null){
                node = newNode;
                return;}

            if (this.root === null){
                this.root = node;
                return 'Node added at root';
            }
            // code for left half of BST
            if (node.left.value > value) {
                // if the left node is greater than the value, go left and keep going left
                _walk(node.left);
            } else if (node.left.value < value) {
                // else if value is greater than left...
                _walk(node.right);
            }

            // code for right half of BST
            if (node.right.value < value) {
                _walk(node.right);
            } else if (node.right.value > value) {
                _walk(node.left);
            }
        }

        // if(!this.root){
        //     this.root = node;
        //     return;
        // }
        // let current = this.root;
        //
        // if (node.value > current.value) {
        //     if(!current.right){
        //         current.right = node;
        //     }
        //
        //     current = current.right;
        // } else {
        //     if(!current.left){
        //         current.left = node;
        //     }
        //
        //     current = current.left;
        // }
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