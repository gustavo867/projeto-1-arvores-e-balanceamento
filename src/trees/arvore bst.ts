export class Node {
  key: number;
  left: Node | null = null;
  right: Node | null = null;

  constructor(key: number) {
    this.key = key;
  }
}

