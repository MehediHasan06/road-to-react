// getting values from other files
const countries = require('./array-assets/countries');
const webTechs = require('./array-assets/web_techs');

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// array element add
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");

// array manipulating with index
let honeyIndex = shoppingCart.indexOf("Honey");
shoppingCart.splice(honeyIndex, honeyIndex+1);
let teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = "Green Tea";
console.log(shoppingCart);

// pushing array elements if they're not there
let ethiopiaIndex = countries.indexOf("Ethiopia");
ethiopiaIndex === -1 ? countries.push("Ethiopia") : countries[ethiopiaIndex] = "ETHIOPIA";
console.log(countries);
let sassIndex = webTechs.indexOf("Sass");
sassIndex === -1 ? webTechs.push("Sass") : console.log('Sass is a CSS preprocess');

// array concat
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
