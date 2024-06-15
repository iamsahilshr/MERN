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

let users = []
/* users.push({
    name: "Ram",
    gender: randomValue(genders),
    religion: randomValue(religions),
    province: randomValue(provinces)
})
users.push({
    name: "Hari",
    gender: randomValue(genders),
    religion: randomValue(religions),
    province: randomValue(provinces)
})
users.push({
    name: "Shyam",
    gender: randomValue(genders),
    religion: randomValue(religions),
    province: randomValue(provinces)
}) */

function signUp(name) {
    users.push({
        name: name,
        gender: randomValue(genders),
        religion: randomValue(religions),
        province: randomValue(provinces)
    })
}
signUp("Ram")
signUp("Hari")
signUp("Shyam")

console.log(users);