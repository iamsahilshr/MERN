// Cart Database
let cartItems = [
    {
        user: {
            name: "Sahil",
            address: "Dhungedhara",
            items: [
                { name: "Mouse", price: 3000 },
                { name: "Keyboard", price: 7000 }
            ]
        }
    },
    {
        user: {
            name: "Krishna",
            address: "Dhungedhara",
            items: [
                { name: "Headphone", price: 2650 }
            ]
        }
    },
    {
        user: {
            name: "Rocky",
            address: "Putalisadak",
            items: [
                { name: "Mouse", price: 4500 },
            ]
        }
    }
]
/* 
Output:
Sahil has ordered of Rs.10000
*/
/* for (let index = 0; index < cartItems.length; index++) {
    let element = cartItems[index]
    let userName = element.user.name

    let total = 0

    let subItems = element.user.items
    for (let subItemIndex = 0; subItemIndex < subItems.length; subItemIndex++) {
        total=total+subItems[subItemIndex].price
    }

    console.log(userName, "has ordered of Rs.", total);
    // console.log(`${userName} has ordered of Rs.${total}`);   // Template Literal or String Literal
} */

cartItems.forEach((cartItem) => {
    total = 0
    cartItem.user.items.forEach((subItem) => {
        total = total + subItem.price
    })
    console.log(`${cartItem.user.name} has ordered of Rs.${total}`);
})