/* 
Asynchronous
    - Tasks that runs in background.
    - They do not block following codes. 
 */

const doSomething = () => {
    console.log("Do Something");
}

/* 
Callback Function
    - A function which is passed to another function as a parameter 
*/
setTimeout(doSomething,5000)

// Synchronous
console.log("Start Loop");

for (let i= 0; i < 10; i++) {
    console.log(i);
}

console.log("End Loop");