// Create an Object: Declare an empty object named person.
// Add Properties: Add properties name, age, and email to the person object with values of your choice.
let person = {
    name: "nigga",
    lastName: "niggerkes",
    Email: "Niga.kok.@gmail.com",
    age: 15
}
// Access Property: Access and log the name property of the person object.
acessname = person["name"]
console.log(acessname)

// Modify Property: Change the age property of the person object to a new value.
person.age = 17
console.log(person.age)
// Add Method: Add a method called introduce to the person object that logs a greeting message with the person's name and age.
let person1 = {
    name: "nigga",
    lastName: "niggerkes",
    Email: "Niga.kok.@gmail.com",
    age: 15,
    introduce: function(){
        console.log(`hello my ${this.name} ${this.lastName}`)
    }
}
person1.introduce();

// Nested Objects: Create an object called address with properties street, city, and postalCode. Add this as a property of the person object.
let person2 = {
    name: "nigga",
    lastName: "niggerkes",
    Email: "Niga.kok.@gmail.com",
    age: 15,
    introduce: function(){
        console.log(`hello my ${this.name} ${this.lastName}`)
    },
    adress : {
        street: "qucha",
        city: "calaci",
        postalCode: "batonibizina"
    }
}
// Access Nested Property: Access and log the city property within the address object.
city_ma_nigga = person2.adress.city
console.log(city_ma_nigga)
