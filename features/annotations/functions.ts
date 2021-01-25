const add=(a:number,b:number):number=>{
    return a+b;
}
//function return can work without annotations 
const sub=(a:number,b:number)=>{
    return a+b;
}

const throwError = (message: string): void=>{
    if(!message){
        throw new Error(message);
    }
}