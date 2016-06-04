export default class Queue {
  constructor() {
    this._queue = [];
  }

  enqueue(item) {
    this._queue.unshift(item);

    return item;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('empty');
    }

    return this._queue.shift();
  }

  isEmpty() {
    return !this._queue.length;
  }

  peak() {
    if (this.isEmpty()) {
      throw new Error('empty');
    }

    return this._queue[0];
  }
}

import Stack from '../stack/Stack';

export class QueueWithStacks {
  constructor() {
    this._stack1 = new Stack();
    this._stack2 = new Stack();
  }

  enqueue(item) {
    return this._stack1.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('empty');
    }

    while(!this._stack1.isEmpty()) {
      this._stack2.push(this._stack1.pop())
    }

    return this._stack2.pop();
  }

  isEmpty() {
    return this._stack1.isEmpty() && this._stack2.isEmpty();
  }

  peak() {
    if (this.isEmpty()) {
      throw new Error('empty');
    }

    while(!this._stack1.isEmpty()) {
      this._stack2.push(this._stack1.pop())
    }

    return this._stack2.peak();
  }
}
