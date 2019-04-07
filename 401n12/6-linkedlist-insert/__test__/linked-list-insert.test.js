'use strict';

const Node = require('../lib/node');
const LinkedList = require('../lib/linked-list');

describe('Linked List Insertion', () => {
    const linkedList = new LinkedList();
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(3);
    linkedList.insertAtHead(4);
    linkedList.find(2);
    linkedList.insertAtTail(5);
    linkedList.append(10);
    linkedList.insertBefore(10, 9);
    linkedList.insertAfter(10, 6);
    it('Can successfully add a node to the end of the linked list', () => {
        expect(linkedList.append(100)).toEqual('added 100');
    });
    it('Can successfully add multiple nodes to the end of a linked list',() => {
        expect().to();
    });
    it('Can successfully insert a node before a node located in the middle of a linked list', () => {
       expect(linkedList.insertBefore(2, 5)).toEqual('New node added before 2');
    });
    it('Can successfully insert a node before the first node of a linked list', () => {

    });
    it('Can successfully insert after a node in the middle of the linked list', () => {

    });
    it('Can successfully insert a node after the last node of the linked list', () => {

    });
});
