/* 
Array Function
    - ForEach
    - Find
    - Map
    - Filter
*/

let fruits=["apple", "banana", "mango"]

/*
    for (let index = 0; index < fruits.length; index++) {
        const element = fruits[index];
        console.log(element);
    }
*/

/*
    function printElement(element){
        console.log(element);
    }
*/

/*
    const printElement = (element) => {
        console.log(element);
    } 
*/
    // fruits.forEach(printElement)

fruits.forEach((element)=>{
    console.log("Element", element);
})

let users=[
    {
        name:"Radha",
        address: "Dwarika"
    },
    {
        name:"Krishna",
        address: "Dwarika"
    }
]
users.forEach((element)=>{
    console.log(element.name, "lives in", element.address);
})