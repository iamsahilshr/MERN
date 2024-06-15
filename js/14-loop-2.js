let countries = [
    {
        code: "us",
        name: "America",
        path: "america"
    },
    {
        code: "uk",
        name: "Britain",
        path: "britain"
    },
    {
        code: "np",
        name: "Nepal",
        path: "nepal"
    },
]
/* 
function findCountryCode(countryName) {
    for (let index = 0; index < countries.length; index++) {
        let element = countries[index]
        if (element.name == countryName) {
            console.log(element.code);
            return
        }
    }
    console.log("Invalid Data");
}
findCountryCode("Nepal") 
*/

function findCountryCode(countryName) {
    let countryCode = ""
    for (let index = 0; index < countries.length; index++) {
        let element = countries[index]
        if (element.name == countryName) {
            countryCode = element.code
            console.log("Country Matched.");
            break
        }
        else console.log("Try for anther country.");
    }
    if (countryCode) {
        console.log("Matched Country Code:", countryCode);
    }
    else {
        console.log("Invalid Data");
    }
}
findCountryCode("Nepal")