class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = new Node(val);
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (!currentNode.left) {
          currentNode.left = new Node(val);
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    function insertHelper(node) {
      //base case: we found our location to insert
      if (!node) return;

      //normal case: we are looking for the currect location
      if (val > node.val) {
        if (!node.right) {
          node.right = new Node(val);
        } else {
          insertHelper(node.right);
        }
      } else {
        if (!node.left) {
          node.left = new Node(val);
        } else {
          insertHelper(node.left);
        }
      }
    }

    insertHelper(this.root);

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return;

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return;

    function findHelper(node) {
      // base case: we didn't find the node, no node left to search
      if (!node) return;

      // normal case: traverse the node tree and continue searching
      if (node.val === val) return node;

      if (val > node.val) {
        return findHelper(node.right);
      } else {
        return findHelper(node.left);
      }
    }

    // returning the result of the find helper function, so the function should return
    // either the node or undefined
    return findHelper(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return;

    let visitedNodes = [];

    function traverse(node = this.root) {
      visitedNodes.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return;

    let visitedNodes = [];

    function traverse(node = this.root) {
      if (node.left) traverse(node.left);
      visitedNodes.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return;

    let visitedNodes = [];

    function traverse(node = this.root) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedNodes.push(node.val);
    }

    traverse(this.root);

    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return;

    let visitedNodes = [];
    let toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      let currentNode = toVisitQueue.shift();
      console.log(currentNode);
      visitedNodes.push(currentNode.val);
      if (currentNode.left) toVisitQueue.push(currentNode.left);
      if (currentNode.right) toVisitQueue.push(currentNode.right);
    }

    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
