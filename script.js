//Create object using Object literal syntax

const circle = {
   radius : 3,
   axis : {
      x: 3,
      y: 4
   },
   pie: 3.1415,
   
   isVisible : true,
   drawCircle: function(constant){
      
      return(Math.floor((constant * this.pie) * this.radius))
   }
}
console.log(circle.drawCircle(2));

//factory function so that drawCircle method is reusable 
const circle1 = {
   radius : 3,
   axis : {
      x: 3,
      y: 4
   },
   pie: 3.1415,
   
   isVisible : true,
   circlePlotter(radius){
      let constant = 2 * 3.14;
      return(constant * radius )
   }
}

// function circlePlotter(pie, radius){
//    let constant = 2
//    return((constant * pie) * radius )
// }

console.log(circle1.circlePlotter(3));

const firstCircle = (circle1.circlePlotter(7));
console.log(`My beautiful ${firstCircle} circle`)


//Object.prototype


function Person(name, surName, dob){
   this.name = name;
   this.surName = surName;
   this.birthday = new Date(dob)
   // this.calculateAge = function(){
   //    const diff = Date.now()- this.birthday.getTime();
   //    const ageDate = new  Date(diff);
   //    return Math.abs(adeDate.getUTCFullYear() - 1970);
   //    console.log(this)
   // }
} 
//calculateAge function applies uniformly. As such it can be put in a prototype as below

Person.prototype.calculateAge =  this.calculateAge = function(){
   const diff = Date.now()- this.birthday.getTime();
   const ageDate = new  Date(diff);
   return Math.abs(adeDate.getUTCFullYear() - 1970);
   console.log(this)
} 

//Another prototypial function for Person constructor
//Get full name

Person.prototype.getFullName = function(){
   return `${this.name} son of ${this.surName}`
};
//what happens
Person.prototype.getReverseFullName = function(name, surName){
   return (name, surName)
}

//Full address
Person.address = ": Default address in space"

Person.prototype.getAddress = function(){
   return `${this.name} ${this.surName} ${Person.address}`
}

//Change last name 

Person.prototype.changeName = function(newSurName) {
   this.surName = newSurName
}

//Address getter



const v = new Person("jona", "jonson", 3-5-1987);
const mondo = new Person("JoJo", "Kayce");
const addressee = new Person("Daniel", "Bafe")
const mary = new Person("Mary", "Lucia", 7-3-1987)

mary.changeName("Mann")



console.log(v)
console.log(mondo.getFullName())
console.log(addressee.getAddress())
console.log(mary)


function Mankind(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName

}

//Greeting to mankind

Mankind.prototype.salute = function() {
   return `Graciea ${this.firstName} ${this.lastName}`
}

const mankind1 = new Mankind("Iria","Manuwopi")

console.log(mankind1.salute())

//Higher order constructor if you like. we are calling Mankind 
function Customer(firstName, last, phone, membership) {
   Mankind.call(this, firstName, last);

   this.phone = phone;
   this.membership = membership
   
}
//inherit the Mankind prototype method

Customer.prototype = Object.create(Mankind.prototype)
;
//create customer
const customer1 = new Customer("John", "Josi", "555-777-234", "std")

console.log(customer1.salute())