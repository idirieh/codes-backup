const cafeDataArr = [
    {
        heading: 'Our Commitment to Our Growers',
        teaser: 'Our growers enjoy the immense benefits of our fair trade practices and sustainable farming initiatives.'
    },
    {
        heading: 'Explore Our Menu',
        teaser: 'Discover our selection of handcrafted beverages and gourmet snacks tailored to tantalize your taste buds.'
    },
    {
        heading: 'Brewing Techniques',
        teaser: 'Learn the art of coffee making with our guide to various brewing methods from around the world.'
    },
    {
        heading: 'Coffee House Events',
        teaser: 'Join us for live music, poetry readings, and other exciting events at our local coffee house.'
    },
    {
        heading: 'Our Sustainability Journey',
        teaser: 'We are committed to reducing our environmental footprint, one cup at a time. Discover our eco-friendly initiatives.'
    },
    {
        heading: 'Meet Our Baristas',
        teaser: 'Get to know the passionate professionals who craft your perfect cup of coffee every day.'
    },
    {
        heading: 'Membership Perks',
        teaser: 'Become a member to enjoy exclusive discounts, special offers, and early access to our new products.'
    },
    {
        heading: 'Coffee Origins',
        teaser: 'Trace the journey of our beans from lush plantations across the globe to your coffee cup.'
    },
    {
        heading: 'Gift Cards & Merchandise',
        teaser: 'Find the perfect gift for the coffee lover in your life with our range of gift cards and branded merchandise.'
    },
    {
        heading: 'Visit Us',
        teaser: 'Experience the warmth and aroma of our coffee house by visiting us at one of our cozy locations.'
    }
]

let num = 1
// const testing = { warya : cafeDataArr[num]}
// console.log(testing)

// function* fetchDataGenerator(maxSections = 10) {
//     let sectionCount = 0
//     while (true) {
//         sectionCount++
//         if (sectionCount >= maxSections) {
//             console.log("Max section limit reached, stopping generator.")
//         }
//         const fakeApiResponse = { sectionText: cafeDataArr[sectionCount] }
//         // Simulate an asynchronous API call with a promise
//         return new Promise(resolve => setTimeout(() => resolve(fakeApiResponse), 100))
//     }
// }

// function* fetchDataGenerator(maxSections = 10) {
//     let sectionCount = 0
//     while (true) {
//         if (sectionCount >= maxSections) {
//             console.log("Max section limit reached, stopping generator.")
//             break
//         }else{
//             yield cafeDataArr[sectionCount]
//             sectionCount++
//         }

//     }
// }

// const generator = fetchDataGenerator()
// document.getElementById('btn').addEventListener('click', () => {
//     const result = generator.next()
//     result.value.then(data => {
//         // Process and display the data
//         console.log(data)
//     })
// })



// function handleScroll() {
//     const result = generator.next()
//     console.log(result)
//     if (!result) {
//         result.value.then(data => {
//             // Process and display the data
//             console.log(data)
//         }).catch(error => {
//             console.error('Failed to load section:', error)
//         })
//     } else {
//         console.log('No more sections to load.')
//     }
// }


// const promise = new Promise( (resolve, reject) => {
//     if(num <= 0){
//         resolve("Yes")
//     }else {
//         reject('What')
//     }
// })

// console.log(promise)


function mockApiCall() {
  const ApiResponse = { data: "Success!" };
  return new Promise(resolve => setTimeout(() => resolve(ApiResponse), 2000));
}

mockApiCall().then(response => {
  console.log(response); // { data: "Success!" } after 100ms
});



// sectionCount = 1
// const fakeApiResponse = { sectionText: cafeDataArr[sectionCount] }
// // Simulate an asynchronous API call with a promise
// const tata =  new Promise(resolve => setTimeout(() => resolve(fakeApiResponse), 100))
// .then(r => console.log(r.sectionText.heading))





