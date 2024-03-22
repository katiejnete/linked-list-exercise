/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      return;
    }
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 2 && this.length >= 2) {
        const removeNode = this.tail.val;
        this.tail = currentNode;
        this.tail.next = null;
        this.length -= 1;
        return removeNode;
      } else {
        const removeNode = this.head.val;
        this.head = null;
        this.tail = null;
        this.length = 0;
        return removeNode;
      }
      currentNode = currentNode.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      return;
    }
    if (this.length === 1) {
      const removeNode = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removeNode;
    }
    const removeNode = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    return removeNode;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    if (!this.head) {
      return;
    }
    let currentNode = this.head;
    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        return currentNode.val;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, newVal) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    if (!this.head) {
      return;
    }
    let currentNode = this.head;
    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        currentNode.val = newVal;
      }
      currentNode = currentNode.next;
    }
    return;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }    
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return;
    }
    let currentNode = this.head;
    let prevNode;
    let nextNode;
    for (let i = 0; i <= idx; i++) {
      if (i === idx - 1) {
        prevNode = currentNode;
        nextNode = currentNode.next;
        if (!nextNode) {
          this.tail = newNode;
          prevNode.next = newNode;
          this.length += 1;
          return;
        }
        newNode.next = nextNode;
        prevNode.next = newNode;
        this.length += 1;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    if (this.length === 1) {
      this.pop();
      return;
    }
    let currentNode = this.head;
    let prevNode;
    let nextNode;
    for (let i = 0; i <= idx; i++) {
      if (i === idx - 1) {
        prevNode = currentNode;
      }
      else if (i === idx) {
        const removeNode = currentNode.val;
        nextNode = currentNode.next;
        if (!nextNode) {
          this.pop();
          return;
        }
        prevNode.next = nextNode;
        this.length -= 1;
        return removeNode;
      }
      currentNode = currentNode.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0;
    }
    let currentNode = this.head;
    let sum = 0;
    while (currentNode) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
