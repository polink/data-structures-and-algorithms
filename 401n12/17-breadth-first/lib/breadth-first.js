'use strict';

const Node = require('./node');
const BinaryTree = require('./tree');

function breadthFirst(tree) {
    let queue = new Queue();
    let output = null;

    queue.enqueue(tree.root);
    while(queue.front !== null){
        let str = queue.dequeue();
        output += str + ' ,';

        if(str.left){
            queue.enqueue(str.left);
        }
        if(str.right){
            queue.enqueue(str.right);
        }

        console.log(output);
    }
}