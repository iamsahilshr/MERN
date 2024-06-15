/* 
if (<condition>){
    // Do something for true/matched condition
    }
else{
    // Do something else
}
*/

// Problem No.1
let willRain = false
let hasProbability = true
/* 
if (willRain) {
    console.log("You need to take Umbrella");
}
else {
    if (hasProbability) {
        console.log("You might need to take Umbrella");
    }
    else {
        console.log("No need to take Umbrella");
    }
}
*/
if (willRain) {
    console.log("You need to take Umbrella");
}
else if (hasProbability) {
    console.log("You might need to take Umbrella");
}
else {
    console.log("No need to take Umbrella");
}

// Problem No.2
let student1 = {
    name: "Ram",
    gender: "Male",
    paidStatus: true
}
let student2 = {
    name: "Sita",
    gender: "Female",
    paidStatus: true
}
let student3 = {
    name: "Hari",
    gender: "Male",
    paidStatus: false
}