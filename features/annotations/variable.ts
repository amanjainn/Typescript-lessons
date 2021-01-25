let apples:number= 5;
let speed :string='fast';
let hasName:boolean =true;
let nothing: null=null;
let no: undefined=undefined;

//built in objects
let now :Date= new Date();

//array 
let colors:string[]=['red','green','blue'];
let numbers: number[]=[1,2,4,4];

//classes 
class Car{}

let car: Car = new Car();

//Object literal 

let point:{x:number; y:number}={
    x:10,
    y:10
};

//Function 

const logNumber:(i:number)=>void =(i:number)=>{
     console.log(i);
}

//When to use annotations
//  1) Function that returns the 'any' type
const json = '{"x":2,"y":20}'
// const coordinates = JSON.parse(json);//Shows any data type
const coordinates : {x:number,y:number}=JSON.parse(json);
console.log(coordinates); 

// 2) When we declare a variable on one line and intialize it later
//  let school ;
//  school ='bangalore'
let school :string;
school='bangalore'


// 3)Variables whose type cannot be inferred correctly 
let number: boolean | number = false;
number=3;


 