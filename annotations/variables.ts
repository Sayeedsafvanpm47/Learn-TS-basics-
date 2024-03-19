let apples:number = 5 
//the type assigned after the : is the type annotation
//const apple:number = true // this will give an error as true cant be assigned to number
let speed:string = 'fast' 
let hasName:boolean = true
let nothing:null = null 
let no:undefined = undefined 

//for the thinhs above, we didnt have to add any of these annotations it would have automatically inferred that 

let colors:string[] = ['red','green','blue'] // we tell ts that we are going to assign a type array to colors that contains strings
let myNumbers:number[] = [1,2,3]

class Car{

}
let car:Car = new Car    // whenever we see this capital lettered annotation, we can infer that we are referring to a type Car Class, and the small lettered car is 
// reffering to the instance of a car 
// the above is how we create an instance of a class 
//type annotation for an object literal 
let point:{x:number;y:number;z:string} = {
          x:10,
          y:20 ,
          z:'sayeed'
}
console.log(point.x)
// now if we try to faulty assign any property to a diff name, or diff type value, then it will conflict with the error arised and will tell you to correct it 
//incase of a fucntion we have to set annotation as what kind of arguments it is going to take as well as what kind of value it is going to return 
                   // argument => return type, since we are not returning anything we assign void 
const logNumber : (i:number)=>void = (i:number)=>{

}

//when do we need typeinference and typeannotations 
//type annotation works in this case 
let apple:number
apple = 5 // if we hover over this, it will show apple type as number 
//but look at this case 
let orange 
orange = 5 // if we hover over this, it will show any.. so as long as youre in one line, youre coool , else youre effed up 


//if you simply use any variable with the type any, you wont be able to find any potential error that may occur, so you have to do type anottation, most common
//case is incase of json parse 
let json = '{"x":1,"y":5}'
let values = JSON.parse(json)
//console.log(values)
//the above is of type any, 
values.asojoasd // if you type this, ts wont find error since there is no property named asojiad there 
//solution 

let json2 = '{"x":1,"y":5}'
let values2 : {x:number;y:number} = JSON.parse(json2)
//console.log(values2)  // now we can see the type and it will throw the error accoridngly 

//type annotation requirement 2 : when we declare variable on one line and initialize later 

// let words = ['red','green','blue']
// let foundWord:boolean
// for(let i=0; i<words.length; i++)
// {
//           if(words[i]=='green')
//           {
//                     foundWord = true 
//                     console.log(foundWord)
                   
//                     break 
//           }
// }
//console.log(foundWord) // if we try to access this line with typeannotation , it will throw uninitialized error, but with any it would have worked 


//3rd case for type annotation 
// let numbers = [-10,-1,12]
// let numberAboveZero = false 
// for(let i=0; i<numbers.length; i++)
// {
//           if(numbers[i]>0)
//           {
//                     numberAboveZero = numbers[i]
//           }
// }

// the above will give you an error, what if you can support multiple types ? we can do this 

let numbers = [-10,-1,12]
let numberAboveZero:boolean|number= false 
for(let i=0; i<numbers.length; i++)
{
          if(numbers[i]>0)
          {
                    numberAboveZero = numbers[i]
          }
}
//the above will work, type inference would have messed up the above scenario 

          