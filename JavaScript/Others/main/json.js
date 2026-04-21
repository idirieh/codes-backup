// JSON is JavaScript Object Notation
// json format 


const jsonstr = '{"greeting": "Hello"}';
console.log(jsonstr);
console.log(typeof jsonstr);

const aPlainObj = JSON.parse(jsonstr);

aPlainObj.greeting = 'hi'
console.log(aPlainObj)

const data = {
    fistName: "Mohammed",
    lastName: "Salah",
    greeting: "Hello"
};

const tojson = JSON.stringify(data);
console.log(tojson)
console.log(typeof(tojson))


// will return The entire webpage in the browser's memory, as a JavaScript object.
console.log(document)