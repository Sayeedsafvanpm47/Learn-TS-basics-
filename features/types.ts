const today = new Date(); // im assigning this variable to a type 
console.log(today.getTime().toFixed())

const person = {
          age: 20
}
// in the above case there is no name for the object, we're just passing the object, so ts defaults to only assuming the properties inside the object to take care of 
// if we reference some property on that variable that doesnt exist, it will throw an error 
class Color{
          print()
          {
                    console.log('hi i am red color')
          }
}
const red = new Color  // this red will have access to all the properties the class color have
red.print()