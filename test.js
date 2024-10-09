var marks  = [20,30,23,87,54];

var filteredMarks = marks.filter(marks=>marks%2==0);

console.log(filteredMarks);


var mappedArray = filteredMarks.map(filteredMarks=>filteredMarks*3);

console.log(mappedArray);

var finalArray = mappedArray.reduce((sum,val)=>sum+val,0)

console.log(finalArray)