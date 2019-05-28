'use strict';

const Node = require('./node');

class BinaryTree {
    constructor(root) {
        this.root = root;
        this.max = 0;
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

    findMax(root){

        if(root === null) {
            return this.max;
        };

        if(root.value>this.max){
            this.max = root.value;
        };
        this.findMax(root.left);
        this.findMax(root.right);
        // this.findMax(inOrder(root));
    }
}

module.exports = BinaryTree;