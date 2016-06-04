export default class LinkedList {
  constructor() {
    this._head = null;
  }

  insert(val, index = null) {
    if (index === null) {
      return this.insertAtEnd(val);
    }

    return this.insertAtIndex(val, index);
  }

  insertAtIndex(val, index = 0) {
    if (index === 0) {
      return this.insertAtHead();
    }

    const node = new Node(val);
    const prevNode = this.getNode(index - 1);

    node.next = prevNode.next;
    prevNode.next = node;

    return node;
  }

  insertAtHead(val) {
    const node = new Node(val);

    node.next = this._head;
    this._head = node;

    return node;
  }

  insertAtEnd(val) {
    if (this._head === null) {
      return this.insertAtHead(val);
    }

    const node = new Node(val);

    this.getLast().next = node;

    return node;
  }

  getLast() {
    let currNode = this._head;

    if (currNode === null) {
      return null;
    }

    while (currNode.next !== null) {
      currNode = currNode.next;
    }

    return currNode;
  }

  getNode(index = null) {
    if (index === null) {
      return this.getLast();
    }

    if (this._head === null) {
      return null;
    }

    let currNode = this._head;
    let currIndex = 0;

    while (currNode.next && currIndex < index) {
      currNode = currNode.next;
      currIndex++;
    }

    return currNode;
  }
}

export class Node {
  constructor(val) {
    this._val = val;
    this.next = null;
  }
}
