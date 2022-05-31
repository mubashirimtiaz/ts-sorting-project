import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedLink';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([-10, 20, 2, 43, -9]);
numbersCollection.sort();

const charactersCollection = new CharactersCollection('yaaXb');
charactersCollection.sort();

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
