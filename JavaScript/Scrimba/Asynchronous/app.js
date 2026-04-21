// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(
//       data => {
//       console.log(data.message)
//       const dog = document.getElementById('dog')
//       // dog.innerHTML = `<img src="https://picsum.photos/200/300" alt="">`
//       // dog.innerHTML = `<img src="${data.message}" alt="">`
//       const imgElement = document.createElement('img');
//       imgElement.src = data.message;
//       dog.appendChild(imgElement)
// })

// setInterval(() => {
//   getDogsPhotos()
// }, 2000);

async function getDogsPhotos(){
  const dog = document.getElementById('dog')
  dog.innerHTML = ""
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await response.json()
  // dog.innerHTML = `<img src="https://picsum.photos/200/300" alt="">`
  // dog.innerHTML = `<img src="${data.message}" alt="">`
  const imgElement = document.createElement('img');
  imgElement.src = data.message;
  dog.appendChild(imgElement)
}






// fetch('https://dog.ceo/api/breeds/image/rando')
//   .then(response => response.json())
//   .then(data => console.log(data.message))
//   .catch(err => {
//   console.log(err)
//   })
//   .finally(() => console.log('The operation completed.'))  



// const image = new Image()
// image.src = "http://..."

// console.log(image)

// image.addEventListener('load', ()=>console.log('Image has loaded'))
// image.addEventListener('error', ()=>console.log('Image has NOT loaded'))


function preLoadImg(url) {
  const promise = new Promise((resolve, reject) => {
    const img = new Image()   
    img.src = url;
    img.addEventListener('load', () => {
      resolve(img)
    })
    img.addEventListener('error', () => {
      reject('img has NOT loaded')
    })
  })
  return promise
/*
Challenge:
1. Return a new promise. The promise should:
    - create a new image and assign the incoming url 
      to its src attribute. (Use the Image constructor 
      for this!)
    - listen out for a load event. If a load event is 
      detected, the promise should resolve, providing the
      image element.
    - listen out for an “error” event. If an error 
      event is detected, the promise should reject giving 
      the message “img has NOT loaded”.
*/
}

try {
  const results = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
  console.log(typeof results)
  // document.getElementById('img-container').appendChild(results)
} catch (error) {
  console.error(error)
}



    

