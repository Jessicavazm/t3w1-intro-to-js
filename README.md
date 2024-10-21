# t3w1-intro-to-js

* log = output something, works like print
* When you call a function or method you need to have parenthesis (), => console.log("Hello, World!")
* For string interpolation, use: ${} => `My name is ${name}`
* All numbers are considered float data type in JS
* == Comparison, JS converts (coerce) one value's data type into the type of the other value so the data type matches and then the comparison is executed.
* === Strict comparison, JS will prevent the coerce comparison method. It will check both data type and values in order to be true.
* Switch case is more memory efficient than if/ else if/ else statements.
* ++ Increment functionality
* Single-line comments start with a double slash // 
* Multiline comments start with /* and end with */


### Data types
There are 7 primitive data types in JavaScript: 
- String: Strings are sequences of characters wrapped in quotation marks. An empty string "" is a string, too. 
- Number (it can be separated by underscore to make numbers more readable).
- BigInt (it used to represent large integers, use 'n' at the end of the number for it to be interpreted as BigInt type).
- Boolean true or false.
- Symbol can be used in objects.
- Null (represents an intentional absence of a value. You need to explicitly assign null to a variable).
- Undefined: variable that should have a defined value but for some reason it doesn't.


### Object/ Object literal
- Mutable
- Similar to Python Dictionary
- Keys are interpreted as strings 
- Dot notation doesn't work on numerical data type keys.
- Wrapped in curly braces and includes key-value pairs, or properties, with property names and values.
    
    let person = {
    name: "John",
    hairColour: "brown",
    eyeColour: "green",
    };
- How to create an new empty object:
    let object = {};
- Adding properties to an object with dot notation or square brackets:
    
    // Dot notation
    object.name = "square";
    console.log(object); // => {name: "square" }

    // Bracket notation
    object["sides"] = 4;
    console.log(object); // => {name: "square", sides: 4}
- Retrieve value with dot notation or bracket notation.
    
    // Dot notation
    console.log(student.name);

    // Bracket notation
    console.log(student["age"]);
- Retrieve nested value:
    
    // Dot notation
    console.log(student.address.state); // => NSW

    // Bracket notation
    console.log(student["address"]["state"]);
- Edit and delete data from an object:
    
    let person = {
    name: "Bob",
    age: 24,
    dob: 1998,
    };

    // Updating age
    person.age = 25;
    // or
    person["age"] = 25;

    // Deleting age:
    delete person["age"];
    // or
    delete person.age;
    // or
    key = "age";
    delete person[key];
- Destructuring JavaScript objects: the same concept as Python unpack dictionaries.


### String Methods
- How to check string type:
    console.log(typeof ""); // => string
- How to check string length
    console.log("Milk".length); // => 4
- How to convert string to Upper case:
    console.log("make me big!".toUpperCase()); // => MAKE ME BIG!
- How to convert string to Lower case:    
    console.log("MixED to SmaLl".toLowerCase()); // => mixed to small
- Accessing characters: JS strings are indexed sequence just like in Python:
    console.log("jess".charAt(1)); // => e
- String concatenation using '+':
    console.log("I am a student " + "at Coder Academy");


### Numbers methods
- Math.floor(1.2); //always rounds down
- Math.ceil(1.2); //always rounds up
- Math.sign(x) returns if x is negative, null or positive
- Math.sqrt(x) returns the square root of x:

### Arrays
An array is a special kind of object and is an indexed collection of values. In code, an array is represented by an ordered sequence of elements separated by commas and wrapped in square brackets. The first element's index is 0, the second element's index is 1, etc. Arrays are non-primitive type, which means arrays are mutable.
    let cuteAnimals = ["koala", "wombat", "dog"];


### Arrays methods
    let myArray = [];
    myArray.push(4); //append to the end
    myArray.unshift(2); //prepend to the beginning
    console.log(myArray); // => [2, 4]

    myArray.pop(); //remove from the end
    myArray.shift(); //remove form the beginning
    console.log(myArray); // => []
    cuteAnimals[3] = "crocodile"; // add elements to array by index


### Destructuring arrays
In JavaScript, array destructuring allows you to unpack values from arrays into distinct variables.

    let numbers = [3, 15, 47];
    let [first, second] = numbers;

    console.log(first); // => 3
    console.log(second); // => 15


### Difference between property and methods

You can think of object properties like variables of the object, and methods like functions. For example, a string has a length property - it’s like a variable in that it holds a value, the number of letters in the string. But the toLowerCase method is like a function because it does something - it takes the letters in a string and returns all of those letters in lowercase.


### How to define variables

* a = 1 => global scope (not preferred)
* var => local scope (old method)
* const => variable can not be resigned again (preferred)
* let => variable can be resigned (preferred)
* Interpolation: wrap string in backticks ` and interpolate our data with ${}.
        let year = 1995;

        console.log(year); // 1995
        console.log("JavaScript was born in " + year); // JavaScript was born in 1995
        console.log(`JavaScript was born in ${year}`); // JavaScript was born in 1995


### How to declare an object (dictionary), key-value pair, use curly braces

* Create an empty dictionary and populate it afterwards
    let student = {}
    student["name"] = "Jess"

* Create a dictionary and populate it 
    let person = {
        name : "Jess",
        age : 21 
    }

* How to get specific values
    person.age
    person.name

* How to change values
    person.age = 31
    person.name = "Jessica"


### Rules when defining variables

- can not start with a digit
- the first word is lower-case
- the first letter in every following word is upper-case, and the rest of the letters are lower-case
- can include: letters, digits, dollar signs $, underscores _
- can not include: spaces, dashes -, or any other special characters


### How to create an array, use square brackets. Arrays can contain different data types. Index starts at 0. Use () when it needs to execute a function.

* Way to collect multiple pieces of data together in one variable.
    let arr = ["Jess", 31, "Melbourne"]
* Find array length => arr.length
* arr.includes("Jess") => Returns boolean value, in this case 'true'
* Add element to end of array => arr.push("Hello, World!")
* Add element to begin of the array => arr.unshift(1)
    arr = [1,"Jess", 31, "Melbourne", "Hello, World!"]
* Remove item from the end of the array and return value => arr.pop()
* Remove item from the beginning of the array and return value => arr.shift()
* Access element by index, eg: arr[1], this should return 31
* Remove specific amount of items starting at a given index position using splice => arr.splice(1,2)
* Combine arrays by using concat method => let new_array = arr.concat(old_array)
* Sort an array using sort method, alphabetically for strings and lowest to highest for numbers => arr.sort()
* Reverse an array using reverse method => arr.reserve()
* Map method is used to create a new array by applying a function to each element of an existing array, new array needs to be stored in a new variable.


## Control statement - Control flow

* == Checks for the same value
* === Checks for the same value and data type
* ! Condition is opposite of it's result (NOT operator)
* && AND operator, both conditions needs to be true in order to evaluate to TRUE
* || OR operator, only one condition needs to be true to evaluate to true, if both false = FALSE


### Arguments

- Passing *arguments* in the function will allow function to use all the given arguments.
    function myArgs() {
        console.log(arguments) ;
    }

     myArgs(1,3,4,6);

- Another way if you want to pass specific args plus other undefined args is to use => ...args
    function otherArgs(x, y, ...args) {
        console.log(x, y, args );
    }
    otherArgs(1, 2 , 4, 6);

### Functions
Function is another type of objects such as string, integer.
- Assigned to a variable
- Nested in other objects/ functions
- Passed as args
- Returned from other functions

* Anonymous function doesn't have a name, and it's stored in a variable. In the case bellow, the function is store in the const 'myFunction'. The function prints the input message. The function is called by the variable name plus the input value.

    const myFunction = function(input) {
        console.log(input);
    }

    myFunction("Such a cool function!!")

* Another way to perform the same function with the 'rocket' function or the'fat arrow'.

    const myFunction = (input) => {
        console.log(input)
    }

    myFunction("Such a cool function!!")

* Another example for add function (regular version)

    let add = function(x, y) {
        return x + y ;
    }

* Another example for add function (fat arrow version)
    let add = (x, y) => x + y ;

### Call-back function

Any function which is passed as an argument to another function, and which is invoked by that other function.
