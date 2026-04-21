/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myObject = {}; // normal object
let myEmptyObject = Object.create(null); // will be same as Map
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

/**
 * An object demonstrating how JavaScript handles object keys.
 * In JavaScript, object keys are always strings or symbols.
 * Even if a key is defined as a number, it is converted to a string.
 * Here, the key `10` is declared twice: once as a number and once as a string.
 * The second declaration (`"10": "String"`) overwrites the first (`10: "Number"`),
 * as both are treated as the same key (`"10"`).
 */
let myNewObject = {
  10: "Number",
  "10": "String", // overwrites the first (`10: "Number"`),
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String"); // will not overwrites unlike the objects
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let newMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// newMap.set(10, "Number");
// newMap.set("Name", "String");

console.log(newMap);

console.log(newMap.get(10));
console.log(newMap.get("Name"));
console.log(newMap.get(false));

console.log("####");

console.log(newMap.has("Name")); // ture

console.log("####");

console.log(newMap.size);

console.log(newMap.delete("Name"));

console.log(newMap.size);

newMap.clear();

console.log(newMap.size);


/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let myMap1 = new Map();

myMap1.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap1);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);

//* Array from
let myStr = "12345"

console.log(Array.from(myStr).map(num => Number(num)+1))
// same as the above
console.log(Array.from(myStr, num => +num + 1))