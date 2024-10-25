// Create object person1 
let person1 = {
    name : "Jess",
    hair_colour : "Red",
    age : 31
}

console.log(person1);
console.log(person1.name);
console.log(person1.age);


// Create empty object and harvest it
let person2 = {}

person2["name"] = "Luke",
person2.hair_colour = "Brown",
person2.age = 43;
console.log(person2.name);


// Modify and delete attributes
person2.age = 50;
console.log(person2.age);

delete person2.age;
delete person2["hair_colour"];
console.log(person2);


// Strings methods
let animal = "Zack";
console.log(animal.length); // Characters length

console.log(animal.toLocaleUpperCase()); // Upper Case
console.log(animal.toLocaleLowerCase()); // Lower cASE

console.log(animal.slice(1, 3)); // Slice string, index position 
console.log(animal.charAt(1)); // Character at index position
console.log("Zack" + " is my favourite cat!!"); // Strings concatenation 
console.log(`${animal} is my little cat!!`); // String interpolation 


// Maths operations 
result = Math.sqrt(10);
console.log(result);

result = Math.ceil(1.2);
console.log(result);

result = Math.random();
console.log(result);

result = Math.floor(1.2);
console.log(result);


// Arrays
let cuteAnimals = ["koala", "wombat", "dog"];

cuteAnimals.push("cat"); // add cat to end of the array
cuteAnimals.unshift("dog"); // add dog to beginning of the array
cuteAnimals[0] = "birds"; // add element using index

console.log(cuteAnimals);

let [first, second] = cuteAnimals;

console.log(first); // Unpack element index 0
console.log(second); // Unpack element index 1

yes_or_no = cuteAnimals.includes("koala"); 
console.log(yes_or_no);

console.log(cuteAnimals[1]); // Access element by index
console.log(cuteAnimals.sort()); // Sorted array

new_cute_animals = cuteAnimals.map.length // map creates a new array stored in a new variable
console.log(new_cute_animals)