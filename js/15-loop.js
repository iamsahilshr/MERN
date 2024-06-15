// Problem No.1
let numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2
}
console.log("Double:", numbers);

// Problem No.2
let nepaliNames = ["Radha", "Krishna", "Sita", "Ram"]

let users=[]
for (let i = 0; i < nepaliNames.length; i++) {
    let element=nepaliNames[i].toLowerCase()
    users[i]={
        name:element,
        email:element+"@gmail.com",
        password:element+i
    }
}
console.log(users);