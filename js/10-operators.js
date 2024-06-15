/* 
Arithmetic Operators: + - * / %
Assignment Operators: =
Comparison Operators: == < >
Logical Operators: AND OR NOT

count++
++count
*/

let price = 1000
console.log(++price);


let user1 = "Ram"
let user2 = " Ram"
console.log(user1 == user2);


let product1 = {
    name: "Mouse",
    price: 1000
}
let product2 = {
    name: "Keyboard",
    price: 1000
}
console.log(product1.price == product2.price);

let services = ["First", "Second", "Third"]
console.log(0 % 2); // 0 // Right
console.log(1 % 2); // 1 // Left
console.log(2 % 2); // 0
console.log(3 % 2); // 1
console.log(services.length >= 3);
console.log(3 >= 3);

let count = 0
count = count + 100
count += 50
console.log(count);

// TypeCast
console.log(1 + "1"); // String
console.log("ad" - "bs");
console.log(1 - "1"); // Number


/* 
Arrow Function =>
if else
nested if else
switch
ternary operator
*/