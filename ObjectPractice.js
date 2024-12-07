let employee = {

firstname : "Girish",

empid: "123",

job : "Engineer",

basicSal : "50000",

//bonus is the name of function
bonus : function (){

    return (this.basicSal*10)/100;

}


};
 console.log(employee["firstname"])
 console.log(employee.firstname);
 

console.log(employee.bonus())

