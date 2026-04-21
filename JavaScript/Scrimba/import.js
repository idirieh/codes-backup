import { interplanetaryDestinationsArr , shortSpaceTripsArr} from './data.js'
import  getMatchingTripsArr  from './getMatchingTripsArr'


// import { 
//     interplanetaryDestinationsArr as st, 
//     shortSpaceTripsArr
// } from './data.js'


// console.log(shortSpaceTripsArr)


console.log(getMatchingTripsArr(interplanetaryDestinationsArr, 'exotic'))
