let color1 = "red"
let color2 = "green"
let color3 = "blue"
let color4 = "yellow"
let color5 = "black"
let color6 = "white"
console.log(color1)

/* 
Array
    - Collection of multiple values known as elements.
    - Collection of similar data types.
    - Index (Always starts with 0)
*/
let colors = ["red", "green", "blue", "yellow", "black", "whiite"]
console.log(colors[5])
console.log("Before", colors[5])

// Renaming an element
colors[5] = "white"
console.log("After", colors[5])

console.log(colors[6])

// Adding an element
colors[6] = "orange"
console.log(colors)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "ten"] // Wrong
console.log(numbers)