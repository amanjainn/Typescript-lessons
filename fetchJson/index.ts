import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/todos/5'

// Interface defines the structure of typescript object 
interface Todo{
    id:number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res=>{
     const todo=res.data as Todo ;  
     const ID= todo.id;
     const title=todo.title;
     const finished = todo.completed;
     logTodo(ID,title,finished)

})

const logTodo=(ID:number,title:string,finished:boolean)=>{
    console.log(`${ID},${title},${finished}`);
}

