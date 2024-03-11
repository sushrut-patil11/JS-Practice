// let js = "amazing";
// console.log(40 + 8 + 23 - 10)

const country = "India";
const continet = "Asia"
let population = 1425775850;

console.log(country);
console.log(continet);
console.log(population);


let isIsland = false;
const language = "hindi";
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof country);
// const halfpopulation = population / 2;
console.log(population / 2);

const finpopulation = 600000;

const islargerpopulation = population > finpopulation;

console.log(islargerpopulation);

const avgPopulation = 1400000;

console.log(population > avgPopulation);

const description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

const extrapopulation = population - avgPopulation;

if (population > avgPopulation) {
    console.log(`My countrys population is ${extrapopulation} above than average`);
}

/*let numNeighbours = prompt('How many neighbour countries does your contry have?');

if (Number(numNeighbours) === 1) {
    console.log("Only 1 border");
} else if (Number(numNeighbours > 1)) {
    console.log("More than 1 borders");
} else {
    console.log("zero border");
} */

const sarahLang = "english";
const sarahPop = 5000000;
const sarahIsland = false;


if (sarahLang === language && sarahPop > population && sarahIsland === isIsland) {
    console.log("Sarah should live in INDIA");
} else {
    console.log("Sarah should not live in INDIA");
}