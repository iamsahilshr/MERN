let student1 = {
    name: "Laxmi",
    gender: "Female",
    paidStatus: true,
    hasScholarship:false,
    hasMetAttendance: true
}
let student2 = {
    name: "Narayan",
    gender: "Male",
    paidStatus: false,
    hasScholarship:true,
    hasMetAttendance: false
}
let student3 = {
    name: "LaxmiNarayan",
    gender: "Others",
    paidStatus: true,
    hasScholarship:true,
    hasMetAttendance: false
}
/*
function checkEligibility(student) {
    if (student.paidStatus) {
        if (student.gender == "Male") {
            console.log("Mr." + student.name, "can give the examination");
        }
        else if (student.gender == "Female") {
            console.log("Mrs." + student.name, "can give the examination");
        }
        else {
            console.log(student.name, "can give the examination");
        }
    }
    else {
        if (student.gender == "Male") {
            console.log("Mr." + student.name, "can't give the examination");
        }
        else if (student.gender == "Female") {
            console.log("Mrs." + student.name, "can't give the examination");
        }
        else {
            console.log(student.name, "can't give the examination");
        }
    }
}
checkEligibility(student1)
checkEligibility(student2)
checkEligibility(student3)
*/

function checkEligibility(student) {
    let prefix = "Mr."
    if (student.gender == "Female") {
        prefix = "Mrs."
    }
    else if(student.gender=="Others"){
        prefix="__"
    }

    if (student.paidStatus || student.hasScholarship){
        console.log(prefix + student.name, "can give the examination");
    }
    else {
        console.log(prefix + student.name, "can not give the examination");
    }
}
checkEligibility(student1)
checkEligibility(student2)
checkEligibility(student3)