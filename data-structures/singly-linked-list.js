class listNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = this.tail = null;
    this.listLength = 0;
  }

  append(val) {
    const node = new listNode(val);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail = this.tail.next = node;
    }
    this.listLength++;
  }

  insert(toInsert, toSearch) {
    const node = new listNode(toInsert);
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === toSearch) {
        if (currentNode.next === null) {
          this.tail = node;
        }
        node.next = currentNode.next;
        currentNode.next = node;
      }
      currentNode = currentNode.next;
    }
  }

  delete(index) {
    if (index < 0 || index > this.listLength -1 ) return;
    if (!index || index === 0) {
      if (this.head) {
        if (this.head === this.tail) {
          this.head = this.tail = null;
        } else {
          this.head = this.head.next;
        }
        this.listLength--;
        return;
      }
      return;
    }

    let count = 0;
    let node = this.head;
    while(count <= index) {
      if (count === index - 1) {
        if (node.next === this.tail) {
          this.tail = node;
        }
        node.next = node.next.next;
        this.listLength--;
        return;
      }
      node = node.next;
      count++;
    }
  }

  contains(val) {
    let node = this.head;
    while (node !== null) {
      if (node.value === val) return true;
      node = node.next;
    }
    return false;
  }

  eachForward(callback = console.log, node = this.head) {
    while (node !== null) {
      callback(node.value);
      node = node.next;
    }
  }

  eachBackward(callback = console.log, node = this.head) {
    if (node !== null) {
      this.eachBackward(callback, node.next);
      callback(node.value);
    }
  }
}