console.log("30 days of react just started...");
const emptyArr = Array();
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

// basic array method
const countryLength = countries.length;
const firstCountry = countries[0];
const lastCountry = countries[countries.length - 1];
const middleCountry = countries.length % 2 != 0 ? countries[Math.round(countries.length/2)-1] : "Middle name can't be possible as the array's length is even! ";
const mixedDataTypes = ["hello", 1, 2, 5, true, {name: 'Mehedi'}, [0,9,8,7]];

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// array elements to uppercase and concat,join
itCompanies.map((company) => console.log(company.toUpperCase()));
console.log(itCompanies.join(", ").concat(" are big companies."));

// finding array elements based on conditions
itCompanies.indexOf("Netflix") === -1 ? console.log("Netflix is not in the array") : console.log("Netflix is in the array.");
itCompanies.map((company) => {
  company.split('o').length > 2 ? "" : console.log(company);
});

// array sort, reverse, slice, splice
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(-3));
console.log(itCompanies.slice((Math.floor(itCompanies.length)/2),(Math.floor(itCompanies.length)/2)+1));
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
