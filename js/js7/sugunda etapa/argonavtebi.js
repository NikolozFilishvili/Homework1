let person = {
    name: "niccolo",
    age: "25",
    city: "florencia",
    gender: "kaci",
    number1: 0,
    addition: function(number){
        return this.number1 += number
    },
    substraction: function(number){
        return this.number1 -= number
    },
    RTZ: function(){
        console.log(this.number1 -= this.number1)
    }
}
    
function sadboy(){
    return sad = console.log(person.addition(Number(prompt("enter what number you want to add"))))
}   
function happyboy(){
    return happy = console.log(person.substraction(Number(prompt("enter what number do you want to subtract"))))
}
function ReturnToZero(){
    return reset = person.RTZ()
}

