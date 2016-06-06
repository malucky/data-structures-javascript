const LinkedList = require('../linked-list/LinkedList').LinkedList;

describe('LinkedList', () => {
  it('should insert item at the end', () => {
    const linkedList = new LinkedList();
    const values = [1, 2, 3, 4, 5];
    const insertedValues = [];

    values.forEach(value => {
      linkedList.insert(value);
    });

    linkedList.traverse(val => insertedValues.push(val));

    expect(insertedValues).toEqual(values);
  });
});
