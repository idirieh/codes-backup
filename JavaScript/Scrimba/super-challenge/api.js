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

export { getStockData }


// the perfect solution
function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random()*3).toFixed(2), 
        time: new Date().toLocaleTimeString()
    }
}


