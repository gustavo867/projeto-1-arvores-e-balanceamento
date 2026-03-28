class AVLNode {
  key: number;
  height: number = 1;
  left: AVLNode | null = null;
  right: AVLNode | null = null;

  constructor(key: number) {
    this.key = key;
  }
}

