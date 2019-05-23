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

    preOrder(root){}
}