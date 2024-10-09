let person = {

    firstName:'Girish',

    lastName:'Kakwani',

    Age:'35'
}



console.log(person.lastName)

console.log("----------------");

person.firstName = 'Ankita'

console.log(person.firstName)
console.log("----------------");

person.gender = 'female'

console.log(person)

delete person.gender

console.log(person)

console.log('******************')


for (let key in person){

    console.log(person[key])
}

