'use strict';

const Node = require('./node');
const Tree = require('./tree');

class BST extends Tree {
    constructor(node) {
        super();
        super.root = node;
        // this.count = 1; (size() {return this.count;} function to count size of BST or tree
    }

    add(root, value) {
        //does add need root or node here? need parameters to pass thru from the tree, but unsure how.
        let newNode = new Node(value);

        function _walk(root, value) {
            // Base Case to stop recursion
            if (root === null) {
                root = newNode;
                return 'Node with ' + value + 'added.';
            }

            // code for traversing BST
            if(!root.left && root.value > value) {
                root.left = newNode;
                return 'Node with ' + value + 'added.';
            }

            if(!root.right && root.value < value) {
                root.right = newNode;
                return 'Node with ' + value + 'added.';
            }

            if (root.left.value > value) {
                // if the left node is greater than the value, go left and keep going left
                _walk(root.left, value);
            } else if (root.left.value < value) {
                // else if value is greater than left...
                _walk(root.right, value);
            }

        }

        //recursive call
        _walk(root, value);
        console.log('Added node with value ' + value);
        return 'Added Node.';
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


    contains(root, value){

        function _walk(root, value) {
            // Base Case to stop recursion
            if(root.value === value) {
                return true;
            }
            // } else if (root === null) {
            //     return false;
            // }

            // code for traversing BST
            if (root.left.value > value) {
                // if the left node is greater than the value, go left and keep going left
                _walk(root.left, value);
            } else if (root.left.value < value) {
                // else if value is greater than left...
                _walk(root.right, value);
            }

        }

        //recursive call
        _walk(root, value);
    }
}

module.exports = BST;