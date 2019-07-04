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
        let current = this.root;

        function _walk(node){
            if(node === null){return;}
            if(!this.root){
                this.root = node;
            }
            if(node.value > current.value){
                if(node.left) {
                    _walk(node.left);
                } else if (!node.left){
                    current.left = node;
                }
            }
            if(node.value < current.value){
                if(node.right){
                    _walk(node.right);
                }
                // 7/3 partially done hereq
            }
        }

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
        console.log(this.root);
    }

    contains(value){
        if(!this.root){return null;}

        if(this.root.value === value){
            return true;
        }

        let current = this.root;

        while(current.value !== value){
            if (current.value === value) { // base case, but it's borked! likely need recursion for this
                // 7/2 should i reverse this and make it return true if current is the value? or would i need to use a different kind of loop
                return true;
            } else if (value > current.value) {
                current = current.right;
            } else if (value < current.value) {
                current = current.left;
            // } else if (value === current.value) {
            //     return true;
            }
        }
    }
}

module.exports = BST;