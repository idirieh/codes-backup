
const cars = {
    color: "red",
    speed: 140,
    forSale: true,    
}

const {foo, bar} = cars // must be same names
console.log(foo, bar) 


const arr = [["one", true, {test1: "Hello Man", price: 1}], ["two", false, {test2: "Hello Kid", price: 2}]]

// console.log(arr[1][price])

// arr.filter(([id, val]) => console.log(val))


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango"))

let x = [...arr];
console.log(x)
x[0] = 8;
console.log(x)
console.log(arr)

const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4]
console.log(Math.min(...averageSharePriceByMonthQ1))
console.log(Math.max(...averageSharePriceByMonthQ1))

const numbers = [9, 5, 3, 10]
console.log(Math.min(...numbers))


//* this
const gamer = {
    name: 'Dave',
    score: 0,
    incrementScore: () => { //'this' will not work with arrow func
        this.score++   
    }
}

console.log(gamer)
gamer.incrementScore()
console.log(gamer)

//* bind()

const button = document.getElementById('btn')

const product = {
    name: 'Vanilla Lip Gloss',
    sku: 'w234fg',
    stock: 276,
    getProductInfo: function() {
        //console.log(this)
        console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
    }
}


const productInfo = product.getProductInfo.bind(product)
button.addEventListener('click', productInfo)