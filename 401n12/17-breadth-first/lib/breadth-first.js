'use strict';

const Node = require('./node');
const Queue = require('./queue');
const BinaryTree = require('./tree');

function breadthFirst(tree) {
    let queue = new Queue();
    let output = null;

    queue.enqueue(tree.root);
    while(queue.front !== null){
        let str = queue.dequeue();
        console.log(queue.dequeue());
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

module.exports = breadthFirst;