const promise = new Promise( (resolve, reject)=> {
    const success = Math.random() > 0.5
    if (success) { 
        resolve('Operation successful!')
    } else {
        reject('Operation failed.')    
    }
})

// promise.then(response => console.log(response))

try {
    const response = await promise
    console.log(response)
} catch(err) {
    console.log(err)
}



// upload a file
function uploadFile(callback){
    console.log('Step 1: Uploading file...')
    setTimeout(()=> {
        callback() // call next function
    }, 1000)
}
// process a file
function processFile(callback){
    console.log('Step 2: Processing file...')
    setTimeout(()=> {
        callback() // call next function
    }, 1000)
}
// notify a user
function notifyUser(callback){
    console.log('Step 3: Notifying user...')
    setTimeout(()=> {
        callback() // call next function
    }, 1000)
}


// const allDone = () => console.log('All steps completed!')
// uploadFile(processFile(notifyUser(allDone)))

uploadFile(()=> { processFile( ()=> { notifyUser( ()=> { console.log('All steps completed!') }) } ) })

new Promise((resolve) => {    
    setTimeout(()=> {
        console.log('Step 1: Uploading file...')
        resolve()
    }, 1000)
}).then(() => {
    return new Promise((resolve) => {        
        setTimeout(()=> {
            console.log('Step 2: Processing file...')
            resolve()
        }, 1000)
    })
}).then(() => {
    return new Promise((resolve) => {        
        setTimeout(()=> {
            console.log('Step 3: Notifying user...')
            resolve()
        }, 1000)
    })
}).then(() => {
    setTimeout(() => {
        console.log('All steps completed!')
    }, 1000)
    
})

// Promise تحدي

function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function processFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function notifyUser() {
    return new Promise((resolve, reject) => {
        console.log('Step 3: Notifying user...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

// حل حقي
try{
    uploadFile().then(() => processFile()).then(() => notifyUser()).then(() => console.log('All is Done'))
}catch(err) {
    console.log(err)
}

// الحل 

try {
    await uploadFile()
    await processFile()
    await notifyUser()
    console.log('All steps completed!')
} catch(err) {
    console.log(err)
}

//* Promise All يظهر النتيجة في حال مجال كل الوعود وليس واحد
function createPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5
        if (success) {
            resolve("Operation successful!")
        } else {
            reject("Operation failed.")
        }
    })
}

try {
    const promise1 = createPromise()
    const promise2 = createPromise()
    const promise3 = createPromise()
    const result = await Promise.all([promise1, promise2, promise3])
    console.log(result)
} catch(err) {
    console.log(err)
}


const img = {};
const imageUrlsArr = ["image1.jpg", "image2.jpg", "image3.jpg"];

for (let i = 0; i < imageUrlsArr.length; i++) {
    img[`img${i}`] = imageUrlsArr[i];
}

console.log(img.img0); // "image1.jpg"
console.log(img.img1); // "image2.jpg"
console.log(img.img2); // "image3.jpg"

