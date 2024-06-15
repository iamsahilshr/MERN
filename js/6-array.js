// Classes
let classes = [
    {
        class: "one",
        sections:
            [
                {
                    sectionName: "A",
                    classTeacher: "Teacher1",
                    students:["Student1","Student2"],
                },
                {
                    sectionName: "B",
                    classTeacher: "Teacher2",
                    students:["Student3","Student4"],
                },
                {
                    sectionName: "C",
                    classTeacher: "Teacher3",
                },
            ]
    },
    {
        class: "two",
        section:
        {
            sectionName:"B",
            classTeacher:"Teacher1",
        }
    },
    {
        class: "three",
        sections:
        [
            {
                sectionName:"A",
                classTeacher:"Teacher1",
            },
            {
                sectionName:"B",
                classTeacher:"Teacher2",
            },
            {
                sectionName:"C",
                classTeacher:"Teacher3",
            },
        ]
    },
]
console.log(classes);

// Carts
let carts=
[
    {
        productTitle:"airpod",
        rate:150,
        users:
        [
            {
                name:"Nick",
                email:"nick@gmail.com",
                address:
                {
                    homeAddress:"Alabama",
                    officeAddress:"Texas",
                },
                quantity:1,
                rate:150,
            },
            {
                name:"Binod",
                email:"binod@gmail.com",
                address:
                {
                    homeAddress:"Alabama",
                    officeAddress:"Texas",
                },
                quantity:1,
                rate:150,
            },
        ]
    },
    {
        productTitle:"watch",
        quantity:1,
        rate:300,
        date:2022,
        user:
        {
            name:"Binod",
            email:"binod@gmail.com",
            address:
            {
                homeAddress:"Alabama",
                officeAddress:"Texas",
            },
        }
    },
    {
        productTitle:"laptop",
        quantity:1,
        rate:1500,
        date:2022,
        user:
        {
            name:"Binod",
            email:"binod@gmail.com",
            address:
            {
                homeAddress:"Alabama",
                officeAddress:"Texas",
            },
        }
    },
]
console.log(carts);