module.exports.Stack = class Stack {
  constructor() {
    this._stack = [];
  }

  push(item) {
    this._stack.push(item);

    return item;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('empty');
    }

    return this._stack.pop();
  }

  isEmpty() {
    return !this._stack.length;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('empty');
    }

    return this._stack[this._stack.length - 1];
  }
};
