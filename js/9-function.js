let genders = ["Male", "Female", "Others"]
let religions = ["Hindu", "Buddhist", "Christian"]
let provinces = ["One", "Two", "Three"]

/* 
let randomGenderIndex=Math.floor(Math.random()*genders.length)
console.log(genders[randomGenderIndex]);

let randomReligionIndex=Math.floor(Math.random()*religions.length)
console.log(religions[randomReligionIndex]);

let randomProvinceIndex=Math.floor(Math.random()*provinces.length)
console.log(provinces[randomProvinceIndex]); 
*/

function generateRandomValue(InputArray){
let randomIndex=Math.floor(Math.random()*InputArray.length)
console.log(InputArray[randomIndex]);
}
generateRandomValue(genders)
generateRandomValue(religions)
generateRandomValue(religions)

// Recognizes which datatype it is by using 'typeof'
let datatype=typeof("Ram")
console.log(datatype);