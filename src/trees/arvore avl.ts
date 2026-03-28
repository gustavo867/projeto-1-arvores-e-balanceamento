class AVLNode {
  key: number;
  height: number = 1;
  left: AVLNode | null = null;
  right: AVLNode | null = null;

  constructor(key: number) {
    this.key = key;
  }
}

export class AVL {
  root: AVLNode | null = null;

  private height(n: AVLNode | null) {
    return n ? n.height : 0;
  }

  private updateHeight(n: AVLNode) {
    n.height = 1 + Math.max(this.height(n.left), this.height(n.right));
  }

  private rotateRight(y: AVLNode): AVLNode {
    const x = y.left!;
    const t2 = x.right;

    x.right = y;
    y.left = t2;

    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  private rotateLeft(x: AVLNode): AVLNode {
    const y = x.right!;
    const t2 = y.left;

    y.left = x;
    x.right = t2;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }
  
   insert(key: number) {
    this.root = this._insert(this.root, key);
  }

  private _insert(node: AVLNode | null, key: number): AVLNode {
    if (!node) return new AVLNode(key);

    if (key < node.key) node.left = this._insert(node.left, key);
    else node.right = this._insert(node.right, key);

    this.updateHeight(node);

    const balance = this.height(node.left) - this.height(node.right);

    if (balance > 1 && key < node.left!.key) return this.rotateRight(node);
    if (balance < -1 && key > node.right!.key) return this.rotateLeft(node);

    if (balance > 1 && key > node.left!.key) {
      node.left = this.rotateLeft(node.left!);
      return this.rotateRight(node);
    }

    if (balance < -1 && key < node.right!.key) {
      node.right = this.rotateRight(node.right!);
      return this.rotateLeft(node);
    }

    return node;
  }
}
