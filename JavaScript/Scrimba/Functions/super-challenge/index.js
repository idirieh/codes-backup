const placeholderPropertyObj = {
    propertyLocation: '1 Joe Bloggs street',
    priceGBP: 100000,
    roomsM2: [16, 12, 6, 11, 5],
    comment: 'This is the description',
    image: 'placeholder.jpg'
}


const propertyForSaleArr = [
    {
        propertyLocation: 'Kensington, London',
        priceGBP: 890000,
        roomsM2: [14, 18, 14, 10, 6],
        comment: 'Highly desirable location in stunning scenery!',
        image: 'cottage.jpg'
    },
    {
        propertyLocation: 'Wirral, Liverpool',
        priceGBP: 650000,
        roomsM2: [18, 16, 15, 14, 17, 19, 9, 8],
        comment: 'Astonishing view with a modern finish!',
        image: 'desres.jpg'
    },
    {
        propertyLocation: 'Beach, Brighton',
        priceGBP: 420000,
        roomsM2: [5],
        comment: 'Beautiful interior and a spacious room.',
        image: 'hut.jpg'
    },
    {
        propertyLocation: 'Highlands, Scotland',
        priceGBP: 550000,
        roomsM2: [6, 12, 11, 5],
        comment: 'Lots of potential, snug, a must see!',
        image: 'shed.jpg'
    }
]

const container = document.getElementById('container');

function getPropertyHtml(propertiesObj = placeholderPropertyObj) {

    
    
    
    const newArr = propertiesObj.map((property) => {
        const {propertyLocation, priceGBP, roomsM2, comment, image} = property
        let totalSize = roomsM2.reduce((total, room) => total + room)
        let content = `
                <section class="card">
                    <img src="./images/${image}">
                    <div class="card-right">
                        <h2>${propertyLocation}</h2>
                        <h3>${priceGBP} &#163;</h3>
                        <p>${comment}</p>
                        <h3>${totalSize}</h3>
                    </div>
                </section> 

                `
        return content
    })
    return newArr.join('')

// SUPER CHALLENGE 💪

// Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

// If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.



// The HTML and CSS have been done for you. 
// This is the HTML template 👇. Replace everything in UPPERCASE with property data.



}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)