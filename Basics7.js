class Person {

constructor(firstname,lastname){
this.firstname = firstname

this.lastname = lastname

}


fullName(){
return this.firstname + this.lastname




}

}

let p = new Person('Girish','Kakwani')
console.log(p.fullName())


