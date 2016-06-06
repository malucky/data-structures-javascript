const Queue = require('../queue/Queue').Queue;

module.exports.Tree = class Tree {
  constructor(val) {
    this.val = val;
    this.children = [];
  }

  addChild(val) {
    const newTree = new Tree(val);

    this.children.push(newTree);

    return this;
  }

  addChildTree(newTree) {
    this.children.push(newTree);

    return this;
  }

  traverse(func, context, type = 'depthFirst') {
    if (type === 'depthFirst') {
      this.depthFirstTraverse(func, context);
    } else if (type === 'breadthFirst') {
      this.breadthFirstTraverse(func, context);
    } else {
      throw new Error('invalid-type');
    }
  }

  depthFirstTraverse(func, context, depth = 1) {
    func.call(context, this.val, depth);

    this.children.forEach(child => {
      child.depthFirstTraverse(func, context, depth + 1);
    });
  }

  breadthFirstTraverse(func, context) {
    const queue = new Queue();
    let depth = 1;
    let currNode = this;

    queue.enqueue(currNode);
    queue.enqueue(null);

    while(!queue.isEmpty()) {
      currNode = queue.dequeue();

      if (queue.isEmpty()) {
        return;
      } else if (currNode === null) {
        queue.enqueue(null);
        depth++;
      } else {
        func.call(context, currNode.val, depth);
        currNode.children.forEach(childNode => queue.enqueue(childNode));
      }
    }
  }
};
