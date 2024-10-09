class Car{
static wheels = 4

constructor(model,color){

    this.model = model;
    this.color = color;

}

display(){
    console.log(this.model,this.color,Car.wheels)
}

}

let c1= new Car("swift","white");
c1.display();


