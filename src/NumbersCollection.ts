import { Sortable } from './interfaces';

export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(index: number): boolean {
    return this.data[index] > this.data[index + 1];
  }

  swap(index: number): void {
    const leftHand = this.data[index];
    this.data[index] = this.data[index + 1];
    this.data[index + 1] = leftHand;
  }
}
