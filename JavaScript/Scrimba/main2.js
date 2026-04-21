// pre-increment
let currentTicketNumber = 0

function getNextTicketNumber() {
  return ++currentTicketNumber
}

// Simulating guests arriving and receiving ticket numbers
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`) 
console.log(`Guest 2, your ticket number is: ${getNextTicketNumber()}`) 
console.log(`Guest 3, your ticket number is: ${getNextTicketNumber()}`)

//* bigint

// BigInt is useful in contexts requiring precise handling of large integers,
// such as cryptography, or when interacting with databases that use large integer identifiers.

const tomsBankBalanceGBP = BigInt(9_007_199_254_740_991_152)

console.log(typeof tomsBankBalanceGBP)