let cartItems = [
    {
        name: "Sahil",
        items: [
            { name: "Mouse", price: 3000 },
            { name: "Keyboard", price: 7000 },
            { name: "Mouse", price: 4500 },
            { name: "Headphone", price: 2650 }
        ]
    },
    {
        name: "Krishna",
        items: []
    },
    {
        name: "Rocky",
        items: []
    }
]
// Method 1
let filteredCartItems = []
    cartItems.forEach((cartItem) => {
        if (cartItem.items.length>0){
            filteredCartItems.push(cartItem)
        }

    })
console.log(filteredCartItems);

// Method 2
let newFilteredCartItems=cartItems.filter((cartItem)=>{
    if (cartItem.items.length>0){
        return true
    }
})


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
    hasMetAttendance: true
}
let students=[student1, student2, student3]
let eligibleStudents=[]
let nonEligibleStudents=[]

/* students.forEach((student)=>{
    if((student.hasScholarship || student.paidStatus) && student.hasMetAttendance){
        eligibleStudents.push(student)
    }
    else{
        nonEligibleStudents.push(student)
    }
})
console.log(eligibleStudents); */

eligibleStudents=students.filter((student)=>{
    if((student.hasScholarship || student.paidStatus) && student.hasMetAttendance){
        return true
    }
})

nonEligibleStudents=students.filter((student)=>{
    if((student.hasScholarship || student.paidStatus) && student.hasMetAttendance){
        return false
    }
    else{
        return true
    }
})
console.log(nonEligibleStudents);