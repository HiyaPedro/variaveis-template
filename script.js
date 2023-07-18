console.log("Just checking we´re connected")

//const nome = "Peter"
//let age = 42
//let precença = true
//var like = false

//console.log(typeof nome)
//console.log(typeof age)
//console.log(typeof precença)
//console.log(typeof like)

// var and let can change values, but const cannot

const nome = prompt("Enter your name")
let age = Number(prompt("How old are you?"))
let precença = confirm("Are you going to the party?")
var like = confirm("Do you like icecream?")

console.log(nome)
console.log(age)
console.log(precença)
console.log(like)

console.log(typeof nome)
console.log(typeof age)
console.log(typeof precença)
console.log(typeof like)

console.log(`Ola meu nome é ${nome}. I am ${age} years old. Will I be at the party?: ${precença}. Do I like icecream?: ${like} `)
