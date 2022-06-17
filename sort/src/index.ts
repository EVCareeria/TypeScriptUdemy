import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const linkedLIst = new LinkedList();
linkedLIst.add(30);
linkedLIst.add(-2);
linkedLIst.add(445);
linkedLIst.add(435);
linkedLIst.add(1);
linkedLIst.print();

const characterCollection = new CharactersCollection('mate2stIaN5g');
const numbersCollection = new NumbersCollection([10, 3, -2, 0, 5]);

console.log(characterCollection)

characterCollection.sort()
console.log(characterCollection)
numbersCollection.sort()
console.log(numbersCollection)
