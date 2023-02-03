const countries = require('./array-assets/countries');
const webTechs = require('./array-assets/web_techs');

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
let honeyIndex = shoppingCart.indexOf("Honey");
shoppingCart.splice(honeyIndex, honeyIndex+1);
let teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = "Green Tea";
// console.log(shoppingCart);

let ethiopiaIndex = countries.indexOf("Ethiopia");
ethiopiaIndex === -1 ? countries.push("Ethiopia") : countries[ethiopiaIndex] = "ETHIOPIA";
// console.log(countries);

let sassIndex = webTechs.indexOf("Sass");
sassIndex === -1 ? webTechs.push("Sass") : console.log('Sass is a CSS preprocess');

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);

// console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];