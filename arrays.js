//you can store multiple values in an array

const fruits = ["apple", "oranges", "banana", "grapes"];

//you can also have arrays with different data types

const fruitsQuant = ["apple", 1, "banana", 2, false];
console.log(fruitsQuant);

//you can also nest arrays(arrays within arrays)

const newFruits = [
  ["apple", 1],
  ["banana", 2],
];

//access nested arrays with index

console.log(newFruits[0][1]); //will return 1
console.log(newFruits[1][0]); //will retuen banana

//modifying array data with indexes

fruits[1] = "watermelon";
console.log(fruits);

//the push method adds data to end of an array

fruitsQuant.push("orange", 3);
console.log(fruitsQuant);

newFruits.push(["gauava", 5]);
console.log(newFruits);

//removing the array data with pop() method
//it removes last element from an array

fruits.pop();
console.log(fruits);

newFruits.pop();
console.log(newFruits);

//removing an element at the start of the array using shitt() method
fruits.shift();
console.log(fruits);

//adding an element at the start of the array using unshitt() method
fruits.unshift("mango");
console.log(fruits);

fruits.unshift("chikoo", "Pineapple");
console.log(fruits);
