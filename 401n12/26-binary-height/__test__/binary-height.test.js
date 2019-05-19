'use strict';

/*
“Happy Path” - Expected outcome
Expected failure
Edge Case (if applicable/obvious)
 */

const Node = require('../lib/node');
const BinaryTree = require('../lib/binarytree');

describe('Binary Tree Height', () => {
    const tree = new BinaryTree(5);
    tree.left = 2;
    tree.right = 6;
    it('Displays the Binary Tree root as expected', () =>{
        console.log(tree);
        expect(tree.root).toEqual(5);
    })
});