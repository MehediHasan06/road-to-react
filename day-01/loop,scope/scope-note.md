<!-- To declare a variable we use the key word var, let and const. A variable can declared at different scope. Variable can be declared globally or locally or window scope. Anything declared without let, var or const is scoped at window level. -->

<!-- Global scope
A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes. -->

<!-- Local scope
A variable declared as local can be accessed only in certain block code. -->


let a = 'JavaScript'; //global scope
let b = 10; //global scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'; //local scope
    let b = 100; //local scope
    console.log(a, b) // Python 100
  }
  console.log(a, b) // JavaScript 10, accessible
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible

<!-- A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop etc). Block in JavaScript is a code in between two curly brackets ({}). -->

function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity) // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i) // 1, 2, 3
}
console.log(i)

<!-- When we use let our variable is block scoped and it will not infect other parts of our code. -->
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81
  console.log(gravity)
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  const gravity = 9.81
  console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
  console.log(i) // 1, 2, 3
}
// console.log(i), Uncaught ReferenceError: gravity is not defined


<!-- The scope let and const is the same. The difference is only reassigning. We can not change or reassign the value of const variable. I would strongly suggest you to use let and const, by using let and const you will writ clean code and avoid hard to debug mistakes. As a rule of thumb, you can use let for any value which change, const for any constant value, and for array, object, arrow function and function expression. -->

