let employee = {

firstname : "Girish",

empid: "123",

job : "Engineer",

basicSal : "50000",




bonus : function (){

    return (this.basicSal*10)/100;

}


};
 console.log(employee["firstname"])
 console.log(employee.firstname);
 

console.log(employee.bonus())

