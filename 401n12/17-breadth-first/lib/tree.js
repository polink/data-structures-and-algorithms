'use strict';

const Node = require('./node');

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    inOrder(root){
        inOrder(root.left);
        console.log(root);
        inOrder(root.right);
    }

    preOrder(root){
        console.log(root);
        preOrder(root.left);
        preOrder(root.right);
    }

    postOrder(root){
        postOrder(root.left);
        postOrder(root.right);
        console.log(root);
    }
}

module.exports = BinaryTree;