class Employee{

constructor (id,name,roll)
{
    this.id = id;
    this.name = name;
    this.roll =roll;
}

display(){

    console.log(this.id,this.name,this.roll)
}

}

let emp1 = new Employee(1,"Girish",10);

emp1.display();
