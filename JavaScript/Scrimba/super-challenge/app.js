// import { getStockData } from "./api.js"

function randomNumber(min, max) {
  let randomNum = Math.random() * (max - min);
  return randomNum.toFixed(2);
}

function todayDate(){
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, '0'); // Hours (00-23)
  const minutes = String(today.getMinutes()).padStart(2, '0'); // Minutes (00-59)
  const seconds = String(today.getSeconds()).padStart(2, '0'); // Seconds (00-59)
  return `${hours}:${minutes}:${seconds}`
}


function getStockData() {
  return {
      name: 'QtechAI',
      sym: 'QTA',
      price: randomNumber(1, 4),
      time: todayDate()
  }
}


/*
App requirements:
 - The app should display the name, symbol, and 
   price of the stock, with a timestamp as per the 
   screenshot. 
 - The triangle compares the current stock price to 
   its previous price. If the price has increased, it 
   should be a green triangle pointing up, if the price 
   has decreased it should be a red triangle pointing 
   down, and if there has been no change it should be a 
   grey triangle pointing to the right.
 - The price should update every 1.5 seconds. 
*/

/*
Challenge:
  1. Find a way to get fresh stock data every 1.5 seconds.
  2. Call the renderStockTicker function with the fresh data.
  3. Add logic to renderStockTicker to display the correct 
     information.
  ⚠️ You will need to write code here in index.js and in
   fakeStockAPI.js.
*/



let previousPrice = 0


function renderStockTicker() {  
    const stockData = getStockData()      
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    const {name , sym, price, time} = stockData
    stockDisplayName.innerText = name 
    stockDisplaySymbol.innerText = sym
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time
    let currentPrice = stockData.price
    console.log("Previous: "+previousPrice)
    console.log("Current: "+stockData.price)
    // if(currentPrice > previousPrice ){
    //   stockDisplayPriceIcon.innerHTML = '<img src="Green_triangle.png">'
    // }else if(currentPrice < previousPrice){
    //   stockDisplayPriceIcon.innerHTML = '<img src="Red_triangle.png">'
    // }else if(currentPrice == previousPrice){
    //   stockDisplayPriceIcon.innerHTML = '<img src="Gray_triangle.png">' 
    // }      
    stockDisplayPriceIcon.innerHTML = currentPrice > previousPrice ? '<img src="Green_triangle.png">' : currentPrice < previousPrice ? '<img src="Red_triangle.png">' : '<img src="Gray_triangle.png">' 
    previousPrice = currentPrice
}

renderStockTicker()


setInterval(renderStockTicker, 2000)






