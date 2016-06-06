module.exports.Queue = class Queue {
  constructor() {
    this._queue = [];
  }

  enqueue(item) {
    this._queue.push(item);

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

  peek() {
    if (this.isEmpty()) {
      throw new Error('empty');
    }

    return this._queue[0];
  }
};

const Stack = require('../stack/Stack').Stack;

module.exports.QueueWithStacks = class QueueWithStacks {
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

  peek() {
    if (this.isEmpty()) {
      throw new Error('empty');
    }

    while(!this._stack1.isEmpty()) {
      this._stack2.push(this._stack1.pop())
    }

    return this._stack2.peek();
  }
};
