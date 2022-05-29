import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([-10, 20, 2, 43, -9]);
const charactersCollection = new CharactersCollection('yaaXb');

const numberSorter = new Sorter(numbersCollection);
const characterSorter = new Sorter(charactersCollection);

numberSorter.sort();
characterSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
