const Queue = require('../queue/Queue').Queue;
const QueueWithStacks = require('../queue/Queue').QueueWithStacks;
describe('Queue', () => {
  it('should be FIFO', () => {
    const queue = new Queue();
    const values = [1, 2, 3, 4, 5];
    const dequeuedValues = [];

    values.forEach(value => {
      queue.enqueue(value);
    });

    while (!queue.isEmpty()) {
      dequeuedValues.push(queue.dequeue());
    }

    expect(dequeuedValues).toEqual(values);
  });

  it('should throw error when attempting to dequeue when empty', () => {
    const queue = new Queue();

    expect(queue.dequeue).toThrow();
  });

  it('should peak without dequeueping', () => {
    const queue = new Queue();
    const value = 'a';

    queue.enqueue(value);

    expect(queue.peek()).toEqual(value);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toEqual(value);
    expect(queue.isEmpty()).toBe(true);
  });
});

describe('QueueWithStacks', () => {
  it('should be FIFO', () => {
    const queue = new QueueWithStacks();
    const values = [1, 2, 3, 4, 5];
    const dequeuedValues = [];

    values.forEach(value => {
      queue.enqueue(value);
    });

    while (!queue.isEmpty()) {
      dequeuedValues.push(queue.dequeue());
    }

    expect(dequeuedValues).toEqual(values);
  });

  it('should throw error when attempting to dequeue when empty', () => {
    const queue = new QueueWithStacks();

    expect(queue.dequeue).toThrow();
  });

  it('should peak without dequeueping', () => {
    const queue = new QueueWithStacks();
    const value = 'a';

    queue.enqueue(value);

    expect(queue.peek()).toEqual(value);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toEqual(value);
    expect(queue.isEmpty()).toBe(true);
  });
});
