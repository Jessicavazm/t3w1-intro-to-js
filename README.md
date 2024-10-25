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


### Data types
There are 7 primitive data types in JavaScript
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

#### Example:    
    let person = {
    name: "John",
    hairColour: "brown",
    eyeColour: "green",
    };

#### How to create an new empty object
    let object = {};

#### Adding properties to an object with dot notation or square brackets
    // Dot notation
    object.name = "square";
    console.log(object); // => {name: "square" }

    // Bracket notation
    object["sides"] = 4;
    console.log(object); // => {name: "square", sides: 4}

#### Retrieve value with dot notation or bracket notation
    // Dot notation
    console.log(student.name);

    // Bracket notation
    console.log(student["age"]);

#### Retrieve nested value
    // Dot notation
    console.log(student.address.state); // => NSW

    // Bracket notation
    console.log(student["address"]["state"]);

#### Edit and delete data from an object
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


### How to create an array (square brackets)
Arrays can contain different data types. Index starts at 0. Use () when it needs to execute a function.

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


### How to declare an object (dictionary), key-value pair, use curly braces
Create an empty dictionary and populate it afterwards:

    let student = {}
    student["name"] = "Jess"

Create a dictionary and populate it:

    let person = {
        name : "Jess",
        age : 21 
    }

How to get specific values:

    person.age
    person.name

How to change values:

    person.age = 31
    person.name = "Jessica"


### Rules when defining variables
- can not start with a digit
- the first word is lower-case
- the first letter in every following word is upper-case, and the rest of the letters are lower-case
- can include: letters, digits, dollar signs $ and underscores _
- can not include: spaces, dashes -, or any other special characters


## Control statement - Control flow
Order in which statements in a program are run. 

* If/ else if/ else statements
* Match case statements
* == Checks for the same value
* === Checks for the same value and data type
* ! Condition is opposite of it's result (NOT operator)
* && AND operator, both conditions needs to be true in order to evaluate to TRUE
* || OR operator, only one condition needs to be true to evaluate to true, if both false = FALSE
* When a return statement is encountered in a *function*, the function stops executing and any code that appears after the return statement will be ignored.
* The block of statements is typically wrapped in curly braces. However, there are exceptions where only one statement is present; in such cases, the braces are not necessary.
* A ternary operator can be used interchangeably with a simple if…else statement that does not include any else if clauses. The code executed in cases of truthy or falsy condition should be short and simple in ternary operators. If you need to run multiple statements, opt for an if…else statement. Alternatively, you can extract the multiple statements into a function, and call the function in the ternary operator.


#### IF statement
We can add more conditions to an if…else statement if we use else if clause. We can add an optional else clause as a "default case". The else clause, when used, must be the last one in the if…else statement. Example bellow:

    let score = 2;

    if (score > 5){
    console.log("Your score is greater than 5. You're passing, congrats!");
    }
    else if (score < 5) {
    console.log("Your score is not enough to pass yet.");
    } else { 
    console.log("Almost there!");
    }


#### Switch statement (checks expressions against multiple values).
Including default is optional in match case statements, example bellow:

    switch (expression) {
    case value1:
        // run these statements if value1 === expression
        break;
    case value2:
        // run these statements if value2 === expression
        break;
    default:
    // run this if the expression is not equal to value1 or value2
    }


#### Ternary operator
The ternary operator, aka conditional operator, is a conditional which can be used in place of a simple if…else statement. It requires a condition and returns one of the two values. A condition is followed by a question mark, then by two values (expressions) separated by a colon. The operator returns the first value if the condition is truthy, or it returns the second value if the condition is falsy. Example bellow:

    condition ? <expression if true> : <expression if false>

    let arr = [1, 2, 3];
    arr.length ? console.log(arr[0]) : console.log("The array is empty");


#### Mathematical operators
    < - "less than"

    <= - "less than or equal"

    > - "greater than"

    >= - "greater than or equal"


#### Short-circuit logic AND (&&) operator
Used in an expression value1 && value2, logical and operator will return:
- value1 if value1 is falsy
- value2 if value1 is truthy
- musician.lastName && console.log(`Last name:`, musician.lastName); // The part following the and operator will run if and only if the first part, musician.lastName, is truthy. If it is falsy, the console.log statement will not execute.


#### || OR operator
Used in an expression value1 || value2, logical or operator will return:
- value1 if value1 is truthy
- value2 if value1 is falsy
- The OR operator can be used to ensure that a piece of code gets executed only if some condition is falsy.


### Arguments
Passing *arguments* in the function will allow function to use all the given arguments.

    function myArgs() {
        console.log(arguments) ;
    }

     myArgs(1,3,4,6);

Another way if you want to pass specific args plus other undefined args is to use => ...args

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

Anonymous function doesn't have a name, and it's stored in a variable. In the case bellow, the function is store in the const 'myFunction'. The function prints the input message. The function is called by the variable name plus the input value.

    const myFunction = function(input) {
        console.log(input);
    }

    myFunction("Such a cool function!!")

Another way to perform the same function with the 'rocket' function or the'fat arrow'.

    const myFunction = (input) => {
        console.log(input)
    }

    myFunction("Such a cool function!!")

Another example for add function (regular version).

    let add = function(x, y) {
        return x + y ;
    }

Another example for add function (fat arrow version).

    let add = (x, y) => x + y ;


### Call-back function
Any function which is passed as an argument to another function, and which is invoked by that other function.


### Loops

#### While loop
A while loop runs repeatedly, evaluating the condition at the start of every iteration. If the condition is truthy, the body statements are executed, then the condition is evaluated again, and so on. Example bellow:

    while (condition) {
    loop body
    }


#### Do...while loop
A do..while loop is very similar to a while loop. The difference is that the body precedes the condition. A do...while loop executes at least one iteration - even if the condition is falsy in the first iteration. Useful when you are testing user input against specific conditions. Example bellow:

    do {
    body;
    } while (condition);


#### For loop
A for loop is usually used to run statements a certain number of times. JS has 3 different types of FOR loops. Here, initialise, condition, and update are optional expressions forming a loop control statement. Initialise is an expression where an iteration variable is initialised. A loop runs while the condition expression is truthy. Update is evaluated at the end of each iteration. Example bellow:

    for (initialise; condition; update) {
    // loop body
    }


#### For...in loop
The for...in loop is a type of loop that allows you to iterate over the properties of an object. The for...in loop works by assigning each property of the object to a variable, one by one, and executing a block of code for each property. Example bellow:

    for (let variable in object) {
    // code to be executed
    }


#### For...of loop
The for...of loop can be used to work with iterables, for example, arrays and strings. In the general case, for...of loop iterates over the elements of an iterable and runs the same statements for every element. Example bellow:

    for (let item of iterable) {
    // code to be executed
    }


#### Conclusion
- Use a for loop when you know the number of times you want to execute a block of code.
- Use a while loop when you want to execute a block of code repeatedly as long as a certain condition is true.
- Use a do...while loop when you want to execute a block of code at least once, and then repeatedly as long as a certain condition is true.
- Use a for...in loop when you want to iterate over the properties of an object.
- Use a for...of loop when you want to iterate over the elements of an iterable object such as an array or a string.


### Break and continue statements 
- Break can be used in switch case statements to control what statement should or should not be executed.
- Break can be used to exit the loop earlier.
- Continue is used to skip a statement in the loop.


#### Spread Syntax (. . .)
Spread syntax is used to expand or "spread" elements of certain data types into separate values. We can spread values into an array, an object, or an argument list for a function call. Only iterables can   be spread into an array. String characters are added one by one to an array, all we need to do is to use the spread syntax on the string and wrap it in square brackets. 
    
    let str = "Spread";
    let strArr = [...str];

    console.log(strArr);
    // => ['S', 'p', 'r', 'e', 'a', 'd']


One way to avoid mutating the original object while working with the copy is creating a shallow copy with spread syntax. Note, however, that this option can be used on one-dimensional arrays only, with no nesting. If the original array has nested arrays, they still can be mutated in both the original and the shallow-copied array. Example bellow:

    let numbers = [1, 23, 45];
    let shallowCopy = [...numbers];

    shallowCopy.push(123);
    console.log(shallowCopy); // => [ 1, 23, 45, 123 ]
    console.log(numbers); // => [ 1, 23, 45 ]


Concatenate arrays with spread syntax. Objects and other non-iterable data types can not be expanded into an array using spread operator. It is possible to add stand-alone elements before, after, or in between the expanded arrays:

    let cats = ["Tom", "Garfield"];
    let dogs = ["Zack", "Snoopy"];
    let movieAnimals = ["Dory", ...cats, "Babe", ...dogs, "Bill"];
    console.log(movieAnimals);
    // => ['Dory', 'Tom', 'Garfield', 'Babe', 'Zack', 'Snoopy', 'Bill']


Spreading a string into an object. Every element's index will be used as a property (key), and the element's value will become the property value(for Arrays, the same process is applied). We can also use spread operator to combine two or more objects into one:


    let str = "Spread";
    let strObj = { ...str };
    console.log(strObj);
    // => {0: 'S', 1: 'p', 2: 'r', 3: 'e', 4: 'a', 5: 'd'}


Spread into an argument list for a function call. We can call functions and pass spread syntax as an argument (Spread syntax can be used multiple times in one argument list):

    function sum(num1, num2) {
    return num1 + num2;
    }

    let small = [1, 2];
    let big = [1000, 50_000];

    console.log(sum(...small)); // => 3


#### Rest syntax
Rest syntax looks exactly like spread syntax - it's three dots ... - and is often said to be the opposite of spread syntax. Rest syntax is used in function definitions and it allows to accept any number of arguments and transfer them into an array, example bellow:

    function printArgs(...args) {
    console.log(args);
    }

    printArgs(1); // => [ 1 ]
    printArgs(); // => []
    printArgs(2, 5, 8, 12); // => [ 2, 5, 8, 12 ]

When we define a function and use rest syntax, the parameter is called a rest parameter. Note that we can define a function to accept standard parameters together with rest ones. Note that we can't define a function with more than one rest parameter because it would be impossible to know which arguments correspond to which parameter otherwise. Another limitation is that the rest parameter, if exists, needs to be the last parameter in the function definition, 

