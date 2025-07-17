class UniqueQueue {
  constructor(name = Symbol('Queue')) {
    this.name = name;
    this.list = new Set();
  }

  enqueue(element) {
    if (!this.list.has(element)) {
      this.list.add(element);
      console.log(`Enqueued in ${this.name.toString()}: ${element}`);
    }
  }

  dequeue() {
    if (this.list.size === 0) {
      return null;
    }
    const element = this.list.values().next().value;
    this.list.delete(element);
    console.log(`Dequeued from ${this.name.toString()}: ${element}`);
    return element;
  }

  clear() {
    this.list.clear();
    console.log(`Queue ${this.name.toString()} cleared.`);
  }

  peek() {
    if (this.list.size === 0) return null;
    return this.list.values().next().value;
  }

  get size() {
    return this.list.size;
  }

  has(element) {
    return this.list.has(element);
  }

  [Symbol.iterator]() {
    return this.list.values();
  }

  toArray() {
    return Array.from(this.list);
  }

  toString() {
    return `UniqueQueue(${this.name.toString()}): ${Array.from(this.list).join(', ')}`;
  }
}

module.exports = UniqueQueue;
