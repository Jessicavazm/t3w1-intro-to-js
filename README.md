# t3w1-intro-to-js

* log = output something, works like print
* When you call a function or method you need to have parenthesis (), => console.log("Hello, World!")
* For string interpolation, use: ${} => `My name is ${name}`
* All numbers are considered float data type in JS
* == Comparison, JS converts (coerce) one value's data type into the type of the other value so the data type matches and then the comparison is executed.
* === Strict comparison, JS will prevent the coerce comparison method. It will check both data type and values in order to be true.


### How to define variables
* a = 1 => global scope (not preferred)
* var => local scope (old method)
* const => variable can not be resigned again (preferred)
* let => variable can be resigned (preferred)


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

