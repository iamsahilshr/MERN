// Problem No.1
let genders = ["Male", "Female", "Others"]
let religions = ["Hindu", "Buddhist", "Christian"]
let provinces = ["One", "Two", "Three"]

function randomValue(input1) {
    let formula1 = Math.floor(Math.random() * input1.length)
    let output1 = input1[formula1]
    return output1
}
let finalOutput1 = randomValue(genders)
console.log(finalOutput1);

// Problem No.2
let fruits = ["Apple", "Banana", "Mango"]

function randomFruitName(input2) {
    let formula2 = Math.floor(Math.random() * input2.length)
    let output2 = input2[formula2]
    return output2
}
let finalOutput2=randomFruitName(fruits)
console.log(finalOutput2);
// console.log(randomFruitName(fruits));

// Problem No.3 - Double(Sum)
function sum(a,b){
    let output=a+b
    return output
}
function double(x){
    let output=x*2
    return output
}

let output=sum(50,50)
console.log({output});

console.log(double(output));
console.log(double(sum(50,50)));

// Problem No.4 - Add Name
let fruitsAdd=["Apple","Banana","Mango"]
fruitsAdd.push("Orange")
fruitsAdd.push("Watermelon")
console.log(fruitsAdd);