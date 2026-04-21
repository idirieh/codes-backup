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


/*
When the page loads, this site should display the
'header', 'hero', and 'nav' sections only.

As a user scrolls, more content should be added.
There are ten content sections in total, which are
loading from apiData.js

The handleScroll function should be debounced to
limit the number of times a scroll event triggers it.

If no debounce time is passed in, it should default
to 100 milliseconds.
 
At the moment, the code is broken.

Challenge:
1. Identify and fix the bugs in this code.
*/


// import { cafeDataArr } from '/apiData.js'

function* fetchDataGenerator(maxSections = 10) {
    let sectionCount = 0
    while (true) {
        if (sectionCount >= maxSections) {
            console.log("Max section limit reached, stopping generator.");
            return;
        }
        const fakeApiResponse = { sectionText: cafeDataArr[sectionCount] }
        // Simulate an asynchronous API call with a promise
        yield new Promise(resolve => setTimeout(() => resolve(fakeApiResponse), 100))
        sectionCount++
    }
}

// function* fetchDataGenerator(maxSections = 10) {
//     let sectionCount = 0;
//     while (sectionCount < maxSections) {
//         sectionCount++;
//         if (sectionCount >= cafeDataArr.length) {
//             console.log("Reached end of cafeDataArr, stopping generator.");
//             return; 
//         }
//         const fakeApiResponse = { sectionText: cafeDataArr[sectionCount] };
//         // Yield a Promise that resolves with the fake API response
//         yield new Promise(resolve => setTimeout(() => resolve(fakeApiResponse), 100));
//     }
//     console.log("Max section limit reached, stopping generator.");
// }

const generator = fetchDataGenerator()

function handleScroll() {
    const result = generator.next()
    // result.value.then(data => console.log(data))
    // console.log("done", result.done)
    if (!result.done) {
        result.value.then(data => {
            // Process and display the data
            const contentSection = document.createElement('section')
            const sectionHeader = document.createElement('h3')
            const sectionTeaser = document.createElement('p')
            sectionHeader.innerText = data.sectionText.heading
            sectionTeaser.innerText = data.sectionText.teaser
            contentSection.appendChild(sectionHeader)
            contentSection.appendChild(sectionTeaser)
            document.body.appendChild(contentSection)
        }).catch(error => {
            console.error('Failed to load section:', error)
        })
    } else {
        console.log('No more sections to load.')
    }
}

// Debouncing function
function debounce(func, timeout = 100) {
    let debounceTimer;
    return function () {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
            func()
        }, timeout)
    }
}

// Attach debounced handler to scroll event
document.addEventListener('scroll', debounce(handleScroll))

