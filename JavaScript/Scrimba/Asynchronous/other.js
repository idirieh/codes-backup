//* Promises

// without promises
setTimeout(() => {
    console.log("title1")
    setTimeout(() => {
        console.log("title2")
        setTimeout(() => {
            console.log("title3")
        }, 1000)
    }, 1000)    
}, 1000)


// Return the initial Promise to start the chain
new Promise(resolve => setTimeout(() => resolve('title1'), 1000))
    .then((result1) => {
    console.log(result1); // 'title1'
    return new Promise(resolve => setTimeout(() => resolve('title2'), 1000));
})
.then((result2) => {
    console.log(result2); // 'title2'
    return new Promise(resolve => setTimeout(() => resolve('title3'), 1000));
})
.then((result3) => {
    console.log(result3); // 'title3'
});


async function runChain() {
  const title1 = await new Promise(resolve => setTimeout(() => resolve('title1'), 1000));
  console.log(title1);

  const title2 = await new Promise(resolve => setTimeout(() => resolve('title2'), 1000));
  console.log(title2);

  const title3 = await new Promise(resolve => setTimeout(() => resolve('title3'), 1000));
  console.log(title3);
}

runChain();




/*
Challenge:
    1. Make a fetch request to the "Bored" API: 
         Base URL: https://apis.scrimba.com/bored/api
         Endpoint: /activity
    2. Log an object containing an activity suggestion 
       to the console.
    ⚠️ Make sure you use the async/await method!
    🛟 hint.md for help!
*/


fetch('https://apis.scrimba.com/bored/api/activity').then(data => console.log(data))
fetch('https://apis.scrimba.com/bored/api/activity').then(response => response.json()).then(data => console.log(data))

// نفس الي فوق
// هنا تكمن اهمية الانتظار
async function getActivity(){
    const url = 'https://apis.scrimba.com/bored/api/activity';
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}
getActivity()
