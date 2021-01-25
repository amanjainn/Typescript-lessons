const cars=['ford','toyota','chevy']; //string
const foods=[]; //any
const names:string[]=[]; //string

const models =[ ['xyx'],['pqr'],['stu']];

//Help with inference when extracting value 

const car = cars[0];
const myCar= cars.pop();


//Prevent incompatible values;
//cars.push(122) //error


//help with 'map'
cars.map((car:string):string=>{
    return car;
}


