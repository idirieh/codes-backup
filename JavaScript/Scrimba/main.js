console.log("test")

let a = 4

console.log(a == 5? "Yes": "No")

const exerciseTimeMins = 70

// let message = exerciseTimeMins < 30 ? 'You need to try harder!' : 'Doing good!'
// console.log("message " + message)

const message1 = exerciseTimeMins < 30 ? 'You need to try harder!' : exerciseTimeMins < 60 ? 'Doing good!' : 'Excellent!'
console.log(message1)

const playerGuess = 3
const correctAnswer = 6


const answer = playerGuess === correctAnswer ? 'Correct!' : 'Wrong!'
console.log(answer)

const message = playerGuess > correctAnswer ? 'Too high' : playerGuess < correctAnswer ? 'Too low' : 'Exactly right'
console.log(message)

//* Switch Statement

let msg = ""
switch(true) {
    case playerGuess > correctAnswer:
        msg = 'Too high';
        break
    case playerGuess < correctAnswer:
        msg = 'Too low';
        break
    default:
        msg = 'Exactly right'
}

console.log("msg= "+msg)

/**
 * Price List
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
*/

// For example: "You selected Salad. That will be $4"

function selectItem(item) {
    let price = 0
    
    switch(item) {
        // item === "Coffee"
        case "Coffee":
            price = 2;
            break;
        case "Sandwiches":
            price = 5;
            break;
        case "Salad":
            price = 4;
            break;
        case "Lemon Cake":
            price = 3;
            break;      
        default:
            return `Sorry we don't sale ${item}`  
    }
    return `So Select ${item} the price will be $${price}`
}

console.log(selectItem('Sandwiches'))

// * Object Destructing

const favouriteFilm = {
    title: "American Gangster",
    year: 2007,
    genre: "crime Action",
    star: "Denzel Washington",
    director: "Ridley Scott"
}


console.log(favouriteFilm.title)
console.log(favouriteFilm.star)

// const title = favouriteFilm.title
// const year = favouriteFilm.year
// const genre = favouriteFilm.genre
// const star = favouriteFilm.star
// const director = favouriteFilm.director

const {title, year, genre, star, director} = favouriteFilm // same as the above
console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`)



const dreamHoliday = {
    destination: 'Interlaken, Switzerland',
    activity: 'Harder Kulm',
    accommodation: 'Lakeside hotel',
    companion: 'My family'
}

const {destination, activity, accommodation, companion} =  dreamHoliday;
console.log(`I would love to go to ${destination} to visit the ${activity}. I'd sleep in a ${accommodation} and hang out with ${companion} all day.`)


// * Settimeout
function displayTrafficLight(light){
    console.log(light)
}

setTimeout(displayTrafficLight, 3000, '🟢') // this way to any add parameters or arguments

displayTrafficLight('🔴')

function logAnswer(answer, points) {
    console.log(`The answer is ${answer} of course! If you got that right, giver yourself ${points} points.`)
}

console.log('What is the capital of Peru?')

// setTimeout(logAnswer, 3000, 'Lima', 10)

const questionTimer = setTimeout(logAnswer, 3000, 'Lima', 10)

// clearTimeout(questionTimer) // to cancel the timeout function
// console.log('Cancelling...')

//* Setinterval

function startCountdown(ms) {
    let secondsRemaining = 3
    function message(){
        console.log(`Your device will shut down in ${secondsRemaining} seconds`)
        secondsRemaining -= 1
        if(secondsRemaining == 0){
            console.log(`Your device is shutting down`)
            clearInterval(shutdownTimer)
        }
    }

    const shutdownTimer = setInterval(message, ms)

}
startCountdown(1000)

// The solution
function startCountdown() {
    let secondsRemaining = 3

    const shutdownTimer = setInterval(function () {
        if (secondsRemaining > 0) {
            console.log(`Your device will shut down in ${secondsRemaining} seconds`)
            secondsRemaining--
        } else {
            console.log(`Your device is shutting down`)
            clearInterval(shutdownTimer)
        }

    }, 1000)
}
startCountdown()

//* reading big numbers
const bankBalance = 9_007_199_254_740_991 // this is the max number in JS
console.log(bankBalance)
console.log(typeof bankBalance)

//* BigInt
const tomsBankBalanceGBP = BigInt(9_007_199_254_740_991_345)

console.log(tomsBankBalanceGBP)

