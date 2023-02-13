<!-- Object.assign: To copy an object without modifying the original object -->
const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki',
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  },
}
const copyPerson = Object.assign({}, person)
console.log(copyPerson);


<!-- Object.keys: To get the keys or properties of an object as an array -->
<!-- Object.values:To get values of an object as an array -->


const keys = Object.keys(copyPerson);
console.log(keys);   //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address);  //['street', 'pobox', 'city']
const values = Object.values(copyPerson);
console.log(values);



<!-- Object.entries:To get the keys and values in an array -->
const entries = Object.entries(copyPerson);
console.log(entries);


<!-- hasOwnProperty: To check if a specific key or property exist in an object -->
console.log(copyPerson.hasOwnProperty('name'));
console.log(copyPerson.hasOwnProperty('score'));


