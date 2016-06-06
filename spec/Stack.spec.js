const Stack = require('../stack/Stack');

describe('Stack', () => {
  it('should be LIFO', () => {
    const stack = new Stack();
    const values = [1, 2, 3, 4, 5];
    const poppedValues = [];

    values.forEach(value => {
      stack.push(value);
    });

    while (!stack.isEmpty()) {
      poppedValues.push(stack.pop());
    }

    expect(poppedValues).toEqual(values.reverse());
  });

  it('should throw error when attempting to pop when empty', () => {
    const stack = new Stack();

    expect(stack.pop).toThrow();
  });

  it('should peak without popping', () => {
    const stack = new Stack();
    const value = 'a';

    stack.push(value);

    expect(stack.peek()).toEqual(value);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.pop()).toEqual(value);
    expect(stack.isEmpty()).toBe(true);
  });
});
