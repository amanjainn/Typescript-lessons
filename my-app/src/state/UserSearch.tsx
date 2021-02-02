import {useState} from 'react'

  
const users=[
    {name:'aman',age:20},
    {name:'anurag',age:20},
    {name:'anupam',age:20},
    {name:'amrutya',age:20},
    {name:'abhijit',age:20},
    {name:'aman',age:20}
]


const UserSearch:React.FC=()=>{
    const [name,setName]=useState('');
    const [user,setUsers]=useState<{name:string,age:number} | undefined>();

    const searchUser=()=>{
           const foundUsers  =users.find(obj=>{return obj.name===name});
           setUsers(foundUsers);
    }
    return( <div>
        <h1>User Search</h1>
        <input value={name} onChange={(e)=>setName(e.target.value)}  />
        <button onClick={searchUser}>Find User</button>
        {!user ?<h2>No user found</h2>: <div><h4>Name: {user.name}</h4><h4>Age: {user.age}</h4>  </div> } 


    </div>)
}

export default UserSearch;