const GetBtn = document.getElementById('btn')
const usersInfo = document.querySelector('.users-info');
// const userName = document.getElementById('user-name');
// const userEmail = document.getElementById('user-email');
const postInfo = document.querySelector('.users-post')
// const postTitle = document.getElementById('post-title');
// const postBody = document.getElementById('post-body');

// let myObj = { name: "Chris", age: 38 };
// console.log(myObj);
// console.log(typeof myObj);
// let myString = JSON.stringify(myObj);
// console.log(myString);
// console.log(typeof myString);
// let myJson = JSON.parse(myString);
// console.log(myJson);
// console.log(typeof myJson);



function getUsers() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
    request.responseType = "json";
    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            // console.log(request.response[1].name);
            // userName.innerText = request.response[1].name;
            // userEmail.innerText = request.response[1].email;
            usersInfo.innerHTML = ""
            let users = request.response;
            const fragment = document.createDocumentFragment();

            for (let user of users) { // Use `let` here to create a block-scoped variable
                let myDiv = document.createElement('div');
                myDiv.classList.add("user-info");

                // let theUserName = document.createTextNode(request.response[0].name);
                // let theUserName = document.createTextNode(user.name+" "+user.id);
                // userHeading.setAttribute("id", "user-name");
                // userHeading.appendChild(theUserName);
                let userHeading = createElement('h3', {id: 'user-name'}, user.name); // اختصار

                // let theUserEamil = document.createTextNode(request.response[0].email)
                // let theUserEamil = document.createTextNode(user.email)
                // userEmail.setAttribute("id", "user-email");
                // userEmail.appendChild(theUserEamil);
                let userEmail = createElement('p', {id: 'user-email'}, user.email);


                // let btnText = document.createTextNode("Get Details");
                // userBtn.setAttribute("id", "btn");
                // userBtn.appendChild(btnText);
                let userBtn = createElement('button', {id: 'btn'}, 'Get Details');

                userBtn.addEventListener('click', (e) => {
                    let allUsers = document.querySelectorAll('.user-info');
                    allUsers.forEach(item => {
                        item.classList.remove('active')
                    });
                    let currentTarget = e.currentTarget
                    let parentElement = currentTarget.parentElement
                    parentElement.classList.toggle('active')
                    // console.log(`Details for ${user.name}:\nEmail: ${user.email}`)
                    // console.log(currentTarget)
                    showUserDetails(user)
                })
    
                myDiv.append(userHeading, userEmail, userBtn);
                // myDiv.appendChild(userEmail);
                // myDiv.appendChild(userBtn);
                fragment.appendChild(myDiv)


            }

            usersInfo.appendChild(fragment);
        }else {
            alert('Error: '+ request.status)
        }
    }
}

function getPostWithUserFilter(id) {
    postInfo.innerHTML = ''; 
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    request.send();            
    request.responseType = "json";
    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            let fragment = document.createDocumentFragment();
            for (post of posts) {
                let myDiv = document.createElement('div');
                myDiv.classList.add('post')
                let postTitle = createElement('h3', {id: 'post-title'}, post.title);
                let postBody = createElement('p', {id: 'post-body'}, post.body);
                let myHr = document.createElement('hr');
                myDiv.append(postTitle, myHr, postBody);
                fragment.appendChild(myDiv)

            }

            postInfo.appendChild(fragment)
            // postTitle.innerText = posts[2].title;
            // postBody.innerText = posts[2].body;
        }else {
            alert('Eror: '+post.status)
        }
        
    }
}



function createElement(tag, attributes = {}, textContent = '') {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    if (textContent) element.textContent = textContent;
    return element;
}

function showUserDetails(user) {
    getPostWithUserFilter(user.id)
}

window.onload = getUsers;




// Chatgpt improve the same code

// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) throw new Error(`Error: ${response.status}`);
//         const users = await response.json();

//         const usersInfo = document.getElementById('usersInfo'); // Ensure this element exists
//         const fragment = document.createDocumentFragment();

//         users.forEach(user => {
//             const userDiv = createElement('div', { class: 'user-info' });

//             const userHeading = createElement('h3', { id: 'user-name' }, user.name);
//             const userEmail = createElement('p', { id: 'user-email' }, user.email);
//             const userButton = createElement('button', { id: 'btn' }, 'Get Details');

//             // Add event listener to the button
//             userButton.addEventListener('click', () => {
//                 alert(`Details for ${user.name}:\nEmail: ${user.email}`);
//                 // You can add more functionality here if needed
//             });

//             userDiv.append(userHeading, userEmail, userButton);
//             fragment.appendChild(userDiv);
//         });

//         usersInfo.appendChild(fragment);
//     } catch (error) {
//         console.error(error);
//         alert(error.message);
//     }
// }

// function createElement(tag, attributes = {}, textContent = '') {
//     const element = document.createElement(tag);
//     Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
//     if (textContent) element.textContent = textContent;
//     return element;
// }

// getUsers()












