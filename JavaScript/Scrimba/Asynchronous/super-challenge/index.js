function getImagePromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = new Image()
            img.src = url
            // img.alt = 'scenic image'
            img.addEventListener('load', () => resolve(img))
            img.addEventListener('error', () => reject(new Error(`Failed to load image: ${url}`)))
        }, 500)
    })
}

const images = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic3'
]

async function preloadImages(imageUrlsArr) {
    const imgContainer = document.getElementById('img-container')
    const uploadContainer = document.getElementById('upload-container')
    
    const img1 = imageUrlsArr[0]
    const img2 = imageUrlsArr[1]
    const img3 = imageUrlsArr[2]

    try {
        const result = await Promise.all([getImagePromise(img1), getImagePromise(img2), getImagePromise(img3)])
        console.log("All images loaded successfully!");
        uploadContainer.style.display = 'none';
        result.forEach(img => {
            imgContainer.appendChild(img);      
            console.log(img)
        })
    }catch(err) {
        console.log(err)
    }


    
    // imageUrlsArr.forEach(url => {
    //     const img1 = getImagePromise(url)
    //     const result = await Promise.all()
    // });
/*
Challenge:
  1. Create an array of promises using getImagePromise.
  2. Save the results of calling all of those promises 
     in one go to a const 'results'.
  3. If the promises resolve: 
     - log "All images loaded successfully!".
     - hide 'uploadContainer'
     - iterate over the results and render them to imgContainer.
  4. If the promises reject:
     - catch and log the error.
*/
}

document.getElementById('submit-imgs').addEventListener('click', () => preloadImages(images))
