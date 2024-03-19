// in case of typeinnference with functions, ts will only try to figure out what type of value the function will return  

const add = (a:number,b:number) : number=>{
           return a+b
}
//in the above if we didnt return anything after specifying that the return type is number, we will get error, so we have to return a value 
// that is number
console.log(add(3,10))
const subtract = (a:number,b:number)=>{
          a-b
}
//in the above fn, if we hover over, we get the return type as void. So ts have used type inference here 
const logger = (a:string):void=>{
          console.log(a)
}
logger('sayeed')

const throwError = (message:string):never=>{
          throw new Error(message)
} 
// throwError('error has occured') - this is a corner case 
//technically, the above function wont return anything, so we have to annotate it using 'never'

// const forecast = { date:new Date(),weather:'sunny' }
// const logWeather = (forecast : {date:Date,weather:string}):void=>{
//           console.log(forecast.date,forecast.weather)
// }
// logWeather(forecast)

// the same above can be written using destructuring like this 

const forecast = {date: new Date(),weather:'sunny'}
const logWeather = ({date,weather}:{date:Date,weather:string}):void=>{
          console.log(date,weather)
}
logWeather(forecast) 