// Problem No.1
let fruits =["Apple","Banana","Mango"]

for (let index = 0; index <fruits.length; index++)
    console.log("In Index", index + ",", "there is", fruits[index]);

// Problem No.2
let fruitsData =[
    {
        name:"Apple",
        quantity:10
    },
    {
        name:"Banana",
        quantity:20
    },
    {
        name:"Mango",
        quantity:30
    }
]

for (let index = 0; index <fruitsData.length; index++)
console.log("There is", fruitsData[index].quantity, "kg", fruitsData[index].name);