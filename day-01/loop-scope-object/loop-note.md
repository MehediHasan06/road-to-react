<!-- for loop syntax -->
for (initialization, condition, increment/decrement) {}

const nums = [1, 2, 3, 4, 5];
const lastIndex = nums.length - 1;
const newArray = [];
for (let i = lastIndex; i >= 0; i--) {
  newArray.push(nums[i]);
};



<!-- while loop -->
let count = prompt('Enter a positive number: ')
while (count > 0) {
  console.log(count);
  count--;
}



<!-- do while loop -->
let count = 8;
do {
  console.log(count);
  count++;
} while (count < 11)



<!-- for of loop -->
<!-- The for of loop is very handy to use it with array. If we are not interested in the index of the array a for of loop is preferable to regular for loop or forEach loop. -->

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
for (const country of countries) {
  console.log(country.toUpperCase());
};



<!-- forEach loop -->
<!-- If we are interested in the index of the array forEach is preferable to for of loop. The forEach array method takes a callback function, the callback function takes three arguments: the item, the index and the array itself. -->

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
countries.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase());
});



<!-- for in loop -->
<!-- The for in loop can be used with object literals to get the keys of the object. -->

const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
}
for (const key in user) {
  console.log(key, user[key]);
};



<!-- break -->
<!-- Break is used to interrupt a loop. -->

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break
  }
  console.log(i);
};
// 0 1 2


<!-- continue -->
<!-- We use the keyword continue to skip a certain iterations. -->

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue
  }
  console.log(i)
}
// 0 1 2 4 5



