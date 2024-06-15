/* 
Array
    - Collection of similar elements having same data types.
 */
let oddNumbers = [1, 3, 5, "seven", 9] // Change this to: [1,3,5,7,9]
oddNumbers[3] = 7
console.log(oddNumbers);

/* 
Objects
    - Same like our real life objects having some properties and respective values.
    - Collection of multiple inputs.
    - Eg: Projector, Mouse, Keyboard, etc.

Syntax:
    let<objectName>={
        <key> : <value>,
        <key or property or attribute> : <value>,
    }
*/

let projector = {
    brand: "sony",
    color: "white",
    price: 10, // Convert 10 to 10000
}
// console.log(projector.price);
projector.price = 10000
projector.dimension = "5x5"
console.log(projector);