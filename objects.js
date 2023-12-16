//creating a simple javascript object
//objects are similar to arrays, but instead of using indexes to access its values, it uses its properties

const myCar = {
  name: "Honda City",
  make: 2021,
  type: "sedan",
};

//accessing values of objects using .notation

const carName = myCar.name;
console.log(carName);

//updating the value of object
myCar.name = "Kia Seltos";
console.log(myCar.name);

//adding a property to the object
myCar.average = "12 Kmpl";
myCar.cc = 1500;
console.log(myCar);

//deleting property from the object
delete myCar.average;

console.log(myCar);
