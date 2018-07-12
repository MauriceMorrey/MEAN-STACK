function BinarySearchTree() {
  this.root = null;
}

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.push = function(val) {
  var root = this.root;

  if (this.root === null) {
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while (currentNode) {
    if (val < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};

BinarySearchTree.prototype.inOrder = function inOrder(node = this.root) {
  if (node) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
    return;
  }
};
BinarySearchTree.prototype.preOrder = function preOrder(node = this.root) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
    return;
  }
};

var test = new BinarySearchTree();
test.push(30);
test.push(12);
test.push(6);
test.push(85);
test.push(28);
test.push(99);
test.push(45);
test.push(60);
test.push(15);
test.push(8);
test.inOrder();
test.preOrder();
console.log(test);
