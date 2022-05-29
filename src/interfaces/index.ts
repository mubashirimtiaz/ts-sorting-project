export interface Sortable {
  compare(index: number): boolean;
  swap(index: number): void;
  length: number;
}
