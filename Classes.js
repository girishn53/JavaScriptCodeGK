class Student{

setDetails(){

this.sid = 101;

this.name = "John";

this.grade = "A";

}


dislay(){


    console.log(this.sid,
        this.name,
        this.grade
    );
}
}

let stu = new Student();

stu.setDetails();

stu.dislay();



