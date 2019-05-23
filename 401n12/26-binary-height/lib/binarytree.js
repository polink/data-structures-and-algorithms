'use strict';

const Node = require('./node');

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    inOrder(root){
        // left root right, using recursion
        inOrder(root.left);
        inOrder(root.value);
        inOrder(root.right);
    }

    preOrder(root){
        // root left right
    }

    postOrder(root){
        // left right root
    }
}

module.exports = BinaryTree;