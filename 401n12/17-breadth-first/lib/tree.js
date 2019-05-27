'use strict';

const Node = require('./node');
const Queue = require('./queue');

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    inOrder(node){
        inOrder(node.left);
        console.log(node);
        inOrder(node.right);
    }

    preOrder(node){
        console.log(node);
        preOrder(node.left);
        preOrder(node.right);
    }

    postOrder(node){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node);
    }
    breadthFirst() {
        let queue = new Queue();
        let output = '';
        let str = queue.dequeue();

        if (this.root){

            queue.enqueue(this.root);
            while(queue.front){
                if(queue.front.left){
                    queue.enqueue(queue.front.left);
                }
                if(queue.front.right){
                    queue.enqueue(queue.front.right);
                }
                // output += queue.dequeue() + ' ,';
                queue.dequeue();
                // console.log(output);
            }
        }
    }
}

module.exports = BinaryTree;