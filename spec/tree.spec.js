const Tree = require('../tree/Tree').Tree;

describe('Tree', () => {
  it('should defaults to depth-first traversal', () => {
    const values = [0, 1, 2, 3, 4, 5];
    const trees = values.map(val =>new Tree(val));
    const arr = [];
    const indices = [];

    trees[0].addChildTree(trees[1]);
    trees[0].addChildTree(trees[2]);
    trees[0].addChildTree(trees[3]);

    trees[1].addChildTree(trees[4]);
    trees[1].addChildTree(trees[5]);

    trees[0].traverse((val, index) => {
      arr.push(val);
      indices.push(index);
    });

    expect(arr).toEqual([0, 1, 4, 5, 2, 3]);
    expect(indices).toEqual([1, 2, 3, 3, 2, 2]);
  });

  it('should handle breadth-first traversal', () => {
    const values = [0, 1, 2, 3, 4, 5];
    const trees = values.map(val =>new Tree(val));
    const arr = [];
    const indices = [];

    trees[0].addChildTree(trees[1]);
    trees[0].addChildTree(trees[2]);
    trees[0].addChildTree(trees[3]);

    trees[1].addChildTree(trees[4]);
    trees[1].addChildTree(trees[5]);

    trees[0].traverse((val, index) => {
      arr.push(val);
      indices.push(index);
    }, null, 'breadthFirst');

    expect(arr).toEqual(values);
    expect(indices).toEqual([1, 2, 2, 2, 3, 3]);
  });

  it('the traversals should handle only one tree', () => {
    const tree = new Tree(1);
    const arrDepth = [];
    const indicesDepth = [];

    tree.traverse((val, index) => {
      arrDepth.push(val);
      indicesDepth.push(index);
    }, null, 'depthFirst');

    expect(arrDepth).toEqual([1]);
    expect(indicesDepth).toEqual([1]);

    const arrBreadth = [];
    const indicesBreadth = [];

    tree.traverse((val, index) => {
      arrBreadth.push(val);
      indicesBreadth.push(index);
    }, null, 'depthFirst');

    expect(arrBreadth).toEqual([1]);
    expect(indicesBreadth).toEqual([1]);
  });

  it('should throw an error if traverse is called with unknown type', () => {
    const tree = new Tree(1);

    expect(() => tree.traverse(console.log, null, 'unknown')).toThrow();
  });
});
