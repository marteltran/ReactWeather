//This is feature of ES 6, regardless to your Weather app.
//Run this function by
//>node example-arrow-function.js
var names = ['Martel', 'Bob', 'Cindy'];

/*
//looping using normal javascript syntax
names.forEach( function (name) {
  console.log('name is ', name);
});

//Looping using ES 6 Arrow function.
//Not need 'function' keywork
names.forEach((name) => {
  console.log('name is', name);
});

//If only single statement, you can do this
names.forEach((name) => console.log('name is ', name));

//Otherway to use Arrow function as anonymous function (function without name)
//Define variable as a anonymous function
var returnMe = (person) => person + '!';
//passing argument value into it
console.log(returnMe('Martel'));
*/

//Different between anonymous function and Arrow function is:
//Anonymous function: scope of 'this' is only binded inside of the function
//Arrow function: scope of 'this' is binded up to the variable object that contains this function

var person = {
  name: 'Gimi',

  //Anonymous function
  // greet: function () {
  //   names.forEach( function () {
  //     //ERROR: 'this' keyword is not binded to 'person' var object
  //    //ReferenceError: name is not defined
  //     console.log(this.name + ' say hi to' + name);
  //   });

  //Fix the issue with 'this' binding to make it bind to names[] array
  //by using Arrow-function
  //Arrow-function
  greet: function () {
      names.forEach( (name) => {
        //'this' keyword binds to 'person' var object
        console.log(this.name + ' say hi to ' + name);
      });
  }
}

person.greet();

//Another example of Arrow-function
var add = (a,b) => {
  //need to return the result if you use {} (used for multi-statements)
  return a+b;
}
console.log('add: ', add(3,4));

//Automatic return result if you have only single statement
var addSimple = (a,b) => a+b;
console.log('addSimple: ', addSimple(3,4));
