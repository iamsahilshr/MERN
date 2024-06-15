let numbers = [1, 2, 3, 4, 5]
let doubleNumbers = []

// Problem No.1 ForEach
numbers.forEach((element) => {
    doubleNumbers.push(element * 2)
})
console.log(doubleNumbers);

// Problem No.2 Filter
let oddNumbers = numbers.filter((element) => {
    if (element % 2 !== 0) {
        return true
    }
})
console.log(oddNumbers);

// Problem No.3 Short Method
let evenNumbers = numbers.filter(element => element % 2 == 0)
console.log(evenNumbers);

// Problem No.4 Map
let tripleNumbers = numbers.map((element) => {
    return element * 3
})
console.log(tripleNumbers);

// Problem No.5 Function
const sum = (firstInput, secondInput) => {
    return firstInput + secondInput
}
console.log(sum(5, 6));

// Problem No.6 Short Method
const sum1 = (firstInput, secondInput) => firstInput + secondInput
console.log(sum1(60, 60));

// Problem No.7 ForEach - Array
let names = ["Radha", "Krishna", "Sita", "Ram"]
let users = []

names.forEach((userName, index) => {
    users.push({
        name: userName,
        email: `${userName}@gmail.com`,
        password: `${userName}${index}`
    })
})
console.log(users);

// Problem No.8 Short Method - Map
let fakeUsers = names.map((userName, index) => {
    return {
        name: userName,
        email: `${userName}@gmail.com`,
        password: `${userName}${index}`
    }
})
console.log(fakeUsers);

// Problem No.10 setTimeout
setTimeout(() => {
    // console.log("Do Something!");
}, 5000)

// Try and Catch
try {
    let b = 5
    let c = 10
    let a = b + c
    console.log({ a });
} catch (err) {
    console.log("Error", err);
    console.log("Error", err.message);
}

/* 
Promise State
    - Pending
    - Resolve
    - Reject
*/

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Products Data Received")
        reject("Server Error")
    }, 2000)
})
console.log(promise);

promise.then((res) => {
    console.log(res);
})
    .catch((err)=>{
        console.log("Error:",err);
    })
console.log("After Promise");