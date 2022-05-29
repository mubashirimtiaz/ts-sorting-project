import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([-10, 20, 2, 43, -9]);

const sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(numbersCollection.data);
