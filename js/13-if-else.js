let student1 = {
    name: "Laxmi",
    pay: true,
    scholarship: true,
    attendance: true
}
let student2 = {
    name: "Narayan",
    pay: false,
    scholarship: false,
    attendance: false
}
let student3 = {
    name: "LaxmiNarayan",
    pay: true,
    scholarship: false,
    attendance: true
}
function checkEligibility(student) {
    if ((student.pay || student.scholarship) && student.attendance) {
        console.log(student.name, "can give the examination");
    }
    else {
        console.log(student.name, "can not give the examination");
    }
}
checkEligibility(student1)
checkEligibility(student2)
checkEligibility(student3)

/* 
Loops:
    - For
    - While
    - Do While

For Syntax:
for(starting point; condition; mutator){
}
*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}