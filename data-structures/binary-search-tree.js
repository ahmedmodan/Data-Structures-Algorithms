class node {
  constructor(value) {
    this.value = value;
    this.rightChild = null;
    this.leftChild = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  _valueCheck(val) {
    if (val === undefined) throw new Error(`cannot call ${this.name} method with an empty value`);
  }

  insert(val, cNode = this.root) {
    this._valueCheck.call(this.insert, val);
    if (cNode === this.root && this.root === null) {
      this.root = new node(val);
      this.size++;
      return;
    }
    if (cNode.value > val) {
      if (cNode.leftChild === null) {
        cNode.leftChild = new node(val);
        this.size++;
      } else {
        this.insert(val, cNode.leftChild);
      }
    } else if (cNode.rightChild === null) {
      cNode.rightChild = new node(val);
      this.size++;
    } else {
      this.insert(val, cNode.rightChild);
    }
  }

  search(val, node = this.root) {
    this._valueCheck.call(this.search, val);
    if (node.value === val) return true;
    if (node.leftChild === null && node.rightChild === null) return false;
    if (node.value > val) {
      return this.search(val, node.leftChild);
    }
    return this.search(val, node.rightChild);
  }

  delete(val, node = this.root) {
    this._valueCheck.call(this.delete, val);
    if (this.root.value === val) {
      this.root = null;
      this.size--;
    } else {
      if (node.value > val) {
        if (node.leftChild.value === val) {
          node.leftChild = null;
          this.size--;
        } else {
          this.delete(val, node.leftChild);
        }
      } else if (node.rightChild.value === val) {
        node.rightChild = null;
        this.size--;
      } else {
        this.delete(val, node.rightChild);
      }
    }
  }

  breadthFirst() {
    const queue = [this.root];
    const results = []
    while (queue.length > 0) {
      const curr = queue.shift();
      results.push(curr.value);
      if (curr.leftChild) queue.push(curr.leftChild);
      if (curr.rightChild) queue.push(curr.rightChild);
    }
    return results;
  }

  preOrder(cNode = this.root, results = []) {
    if (cNode === null) {
      return;
    }
    results.push(cNode.value);
    this.preOrder(cNode.leftChild, results);
    this.preOrder(cNode.rightChild, results);
    return results;
  }

  inOrder(cNode = this.root, results = []) {
    if (cNode === null) {
      return;
    }
    this.inOrder(cNode.leftChild, results);
    results.push(cNode.value);
    this.inOrder(cNode.rightChild, results);
    return results;
  }

  postOrder(cNode = this.root, results = []) {
    if (cNode === null) {
      return;
    }
    this.postOrder(cNode.leftChild, results);
    this.postOrder(cNode.rightChild, results);
    results.push(cNode.value);
    return results;
  }
}