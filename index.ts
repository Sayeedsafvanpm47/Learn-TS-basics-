// import axios from 'axios';
// const url = 'https://jsonplaceholder.typicode.com/users/1'
// interface Todo{
//           id : number;
//           name: string;
//           phone:string;
// }
// axios.get(url).then((res)=>{
//           const todo = res.data as Todo  // we are setting the interface props and connecting to res.data object 
//           console.log(`${todo.id} & ${todo.name} & ${todo.phone.slice(0,3)}`)
// })


// in ts the fnuction arguments order also matters, it is because, if the functions are not in an order, then it will misinterpret the items, and we also have to define the types while passing the arguments 

// import axios from 'axios';
// const url = 'https://jsonplaceholder.typicode.com/users/1'
// interface Todo{
//           id : number;
//           name: string;
//           phone:string;
// }
// axios.get(url).then((res)=>{
//           const todo = res.data as Todo  // we are setting the interface props and connecting to res.data object 
//           const id = todo.id 
//           const name = todo.name 
//           const phone = todo.phone 
//           todoShow(id,name,phone); //order of params do matter 
// })
// function todoShow(id:number,name:string,phone:string)
// {
//           console.log(`${id},${name},${phone}`)
// }


