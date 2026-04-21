const jobHunter = {
    name: 'Tom Chant',
    // jobSearchArea: 'Europe',
}

/***** if else *****/
// if (jobHunter.jobSearchArea) {
//     console.log(`${jobHunter.name}'s work location is ${jobHunter.jobSearchArea}`)
// }
// else {
//     console.log(`${jobHunter.name}'s work location is Worldwide`)
// }

// console.log(jobHunter.jobSearchArea ? `${jobHunter.name}'s work location is ${jobHunter.jobSearchArea}` : `${jobHunter.name}'s work location is Worldwide`)

// console.log(jobHunter.jobSearchArea || `${jobHunter.name}'s work location is ${jobHunter.jobSearchArea}`)


/***** ternary *****/
// const workLocation = jobHunter.jobSearchArea ? jobHunter.jobSearchArea : 'Worldwide' 
// console.log(`${jobHunter.name}'s work location is ${workLocation}`)

/***** OR operator *****/
// تنفذ اذا العبارة الصحيحة فقط
const workLocation = jobHunter.jobSearchArea || 'Worldwide'
console.log(`${jobHunter.name}'s work location is ${workLocation}`)



/***** And && Operator *****/
// تعمل في حال كان العبارة الأولى صحيحة
const user = {
    userName: 'Tom',
    role: 'admin',
}

user.role === 'admin' && console.log('Dashboard Displayed')

// console.log(user.role === 'admin')

// challenge

const accountBalanceUsd = '$45,000,000,000 🤑💰'
const swissBankPassCodesArr = [1234,5678,9876,3434]

function authenticationCheck(passCode){
    
    // if(swissBankPassCodesArr.includes(passCode)){
    //     console.log(accountBalanceUsd)
    // }
    
    // same as above
    swissBankPassCodesArr.includes(passCode) && console.log(accountBalanceUsd)
}

authenticationCheck(3434)


/***** Nullish ?? Operator *****/
function fetchUserBalance() {
    
    // This is where we would make call to bank's database
    
    const userBalance = 0 
    return userBalance
}

/*
Challenge:
    1. Swap the logical OR operator for a Nullish Coalescing operator.
    Ignore any red lines you see in the editor!
*/

const balance = fetchUserBalance()
const displayBalance = balance ?? "currently not available"

console.log(`Your balance is ${displayBalance}.`)


/***** Optional Chaining *****/

const library = {
    sections: {
        fiction: {
            genres: {
                fantasy: [
                    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
                    { title: "A Game of Thrones", author: "George R.R. Martin", year: 1996 }
                ],
                scienceFiction: [
                    { title: "Dune", author: "Frank Herbert", year: 1965 },
                    { title: "Neuromancer", author: "William Gibson", year: 1984 }
                ]
            }
        }
    }
}

console.log(library.sections.fiction.genres.fantasy[0].year /*|| "Not Avilable"*/)
// نفس الي فوق مع تفادي الأخطاء
console.log(library && library.sections && library.sections.fiction && library.sections.fiction.genres && library.sections.fiction.genres.fantasy[0].year /*|| "Not Avilable"*/)
// نفس الي فوق
console.log(library?.sections?.fiction?.genres?.fantasy[0]?.year /*|| "Not Avilable"*/)


