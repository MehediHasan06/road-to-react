const cat = {
  name: "Lumi",
  legs: 4,
  color: "White",
  age: 2,
  bark: () => {
    return "meaw";
  }
};

cat.breed = "Deshi";
cat.getCatInfo = (name) => {
  return `${name} is the love of our home.`;
};
console.log(cat);
console.log(cat.name);
console.log(cat.legs);
console.log(cat["color"]);
console.log(cat["age"]);
console.log(cat["bark"]());
console.log(cat["getCatInfo"]("lumi"));

