
//array declaration
var marks = [20,33,89,34,78]  

  var filteredArray  =marks.filter(marks=>marks%2==0);
 
var finalArray = filteredArray.map(marks=>marks*3).reduce((sum,val)=>sum+val,0)

console.log(finalArray)




