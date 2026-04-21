// programming paradigm
// functional programming (FB)
function getDistance(kph, h){
    return kph * h;
}

let kph = 120;
let h = 3.5;

console.log(getDistance(kph, h));

// object oriented programming (OOP)

let virtBit = {
    sleepy: true,
    nap: function(){
        this.sleepy = false;
    }
}

console.log(virtBit.sleepy);
virtBit.nap();
console.log(virtBit.sleepy);

// example for (FB)
let show = 100;
let tax = 1.2;

function taxrate(show, tax){
    return show * tax;
}

let topay = taxrate(show, tax);
console.log(topay)

// same example but with (OOP)

let purchase = {
    show1: 100,
    tax1: 1.2,
    taxrate1: function(){
        return this.show1 * this.tax1;
    }
}

let topay1 = purchase.taxrate1();
console.log(topay1)

// oop classes
class Car{
    constructor(color, speed){
        this.color = "red";
        this.speed = 160;
    }
}

let ford = new Car();
console.log(ford.speed)
console.log(ford.color)

const animal = {
    color: 'red',
    fly: true
}

const cat = Object.create(animal);
cat.live = 'Asia';

for (prop in cat) {
    console.log('🥳', prop); // for in iterating over object and its prototype
}

console.log('------')

for (prop of Object.keys(cat)) {
    console.log('✔', prop + ': ' + cat[prop]) // for of iterating over object's own properties only
}

