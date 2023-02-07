const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// sort,max and min
console.log(ages.sort());
console.log(Math.min(...ages));
console.log(Math.max(...ages));

// array middle value
let arrLength = ages.length;
arrLength % 2 === 0 ? console.log(ages[(arrLength/2)-1],ages[arrLength/2]) : console.log(ages[Math.round(ages(arrLength/2)-1)]);

// array avarage age
let totalAges = 0;
ages.forEach(age => {
  totalAges += age;
});
let avarageAge = totalAges/arrLength;
console.log(Math.abs(avarageAge));
