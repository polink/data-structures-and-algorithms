'use strict';

const Node = require('./lib/node');
const LinkedList = require('./lib/linked-list');



const linkedList = new LinkedList();
linkedList.insertAtHead(1);
linkedList.insertAtHead(2);
linkedList.insertAtHead(3);
linkedList.insertAtHead(4);
linkedList.kthFromEnd(4);
console.log(JSON.stringify(linkedList));