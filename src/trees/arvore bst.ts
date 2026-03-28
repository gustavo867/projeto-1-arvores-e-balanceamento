export class Node {
  key: number;
  left: Node | null = null;
  right: Node | null = null;

  constructor(key: number) {
    this.key = key;
  }
}

export class BST {
  root: Node | null = null;

  insert(key: number) {
    this.root = this._insert(this.root, key);
  }

  private _insert(node: Node | null, key: number): Node {
    if (!node) return new Node(key);

    if (key < node.key) node.left = this._insert(node.left, key);
    else node.right = this._insert(node.right, key);

    return node;
  }

  search(key: number): boolean {
    return this._search(this.root, key);
  }

  private _search(node: Node | null, key: number): boolean {
    if (!node) return false;
    if (node.key === key) return true;

    if (key < node.key) return this._search(node.left, key);
    return this._search(node.right, key);
  }

  height(node: Node | null = this.root): number {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  remove(key: number) {
    this.root = this._remove(this.root, key);
  }

  private _remove(node: Node | null, key: number): Node | null {
    if (!node) return null;

    if (key < node.key) node.left = this._remove(node.left, key);
    else if (key > node.key) node.right = this._remove(node.right, key);
    else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let min = this.findMin(node.right);
      node.key = min.key;
      node.right = this._remove(node.right, min.key);
    }

    return node;
  }

  private findMin(node: Node): Node {
    while (node.left) node = node.left;
    return node;
  }
}
