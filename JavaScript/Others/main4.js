
// JS object
let storeManager = {
    name: 'Moahmmed',
    movement: 40,
    speed: 100,
    health: 60

}

storeManager.next = "open new store"
console.log(storeManager);
console.log(storeManager.name);
console.log(typeof storeManager);

let house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2);
console.log(typeof house2);

const clothes = [];
clothes.push('t-shirt');
clothes.push('sweater');
clothes.push('coat');
clothes.push('hoodie');
clothes.push('jeans');
clothes.pop();
clothes.push('joggers');
console.log(clothes[2]);
let favCar = {}
favCar.color = 'blue';
favCar.covertible = true;
console.log(favCar)

// math object

console.log(Math.pow(2,3));
console.log(Math.sqrt(16)); // for more go to notion

let decimal = Math.random(); // random number from 0 to 0.99
console.log(decimal);
console.log(decimal * 10); // random number from 1 to 10


let rounded = Math.ceil(0.50);
// let rounded = Math.ceil(0.01)
// let rounded = Math.ceil(1.50)
// let rounded = Math.ceil(2.50)
console.log(rounded);

let decimal1 = Math.random() * 100;
let rounded1 = Math.ceil(decimal1);
console.log(rounded1);

const numbers = [9, 3, 12, 44, 1, 99, 7];
const minNumer = Math.min(...numbers);
console.log(minNumer);
const maxNumber = Math.max(...numbers);
console.log(maxNumber);


var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

var result = "Hello".indexOf('l');
console.log(result)
