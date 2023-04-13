// console.log('hello');

// let a = 20
// let firstName = "Sabir"
// let isLoggedIn = true


// console.log(typeof(isLoggedIn));

// const pie = 3.1416
// console.log(pie);

// let a;

// let b;

// a = 20
// a = 5000
// a = 0
// console.log(a);

// pie = 3213232
// console.log(pie);


// Operator ==, ===

// let a = 20
// let b = "20"

// // ==
// if (a == b) {
//     console.log('equal');
// }
// else{
//     console.log('not equal');
// }
// // ===
// if (a === b) {
//     console.log('equal');
// }
// else{
//     console.log('not equal');
// }

// let text1 = "John"
// let text2 = "Doe"
// let text3 = text1 + " " + text2

// console.log(text3);

// Concatenation //
// let fname = "Mashkur Alam";
// let lname = "Sabir";
// let id = 01;
// let age = 27
// let address = "Dhaka";

// console.log("Name: " + fname + " " + lname);
// console.log("ID: " + id);
// console.log("Age: " + age);
// console.log("Address: " + address);



// ~~Functions~~~ //

// function addTwoNum(num1, num2){
//     let total = num1 + num2;
//     // console.log(total);
//     return total
// }

// console.log(addTwoNum(10,20));  // 30

// ~~~Turnery
// let a = 10
// let b = 20

// if (a < b) {
//     console.log("a is smaller than b");
// } else {
//     console.log("b is smaller than a");
// }

// a < b ? console.log("a is smaller than b") : console.log("b is smaller than a")



// ~~~Strings~~~ //
// let a = "Helloadsfasdf asddsf"
// console.log(a.length);

// let text = "My name is\n \"Sabir\" \t name "
// console.log(text);



// ~~~Array~~~ //
// let cars = ["volvo", "toyota", 'honda']
// console.log(cars);
// let students = ["Sabir", "Adnan", 'Tonmoy']
// console.log(students);
// let post = []
// let person = {}

// console.log(post);
// console.log(person);
// console.log(typeof(cars));
// console.log(cars.length);

// Array -> [] 
// Object -> {}
// Function -> ()


// Prompt()




// ~~~Array Methods ~~~ //
// 1. array length
// 2. push() / unshift()
// 3. pop() / shift()
// 4. Array.isArray()
// 5. splice() / slice()
// 6. revers()
// 7. sort()

let cars = ["volvo", "toyota", 'honda'] //array
// console.log(typeof(cars)); //object
// console.log(cars.length);  //length

// let cars_length = cars.length;
// let last_element = cars[cars_length-1]; //last element

// console.log();

// cars.push("bmw");
// console.log(cars);

// console.log(Array.isArray(cars)); // Array checking

// console.log(cars.pop()); //pop() remove last element
// console.log(cars);

// cars.shift(); // remove 1st element
// console.log(cars);

// cars.unshift("Ferrari");
// console.log(cars);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi"); //add elements

// console.log(fruits);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
// console.log(fruits);





// // ~~~ FUNCTIONS ~~~ //

// function add(a, b) {
//     //statement
//     let sum = a + b;
//     return sum; 
// }

// //call
// let result = add(7,5); //sum
// console.log(result);


// function printStudentDetails(name, id, age){
//     console.log("Name: "+name);
//     console.log("ID: "+id);
//     console.log("Age: "+age);
// }

// printStudentDetails("Sabir", 546, 28);