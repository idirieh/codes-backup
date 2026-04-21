const usersInfo = document.getElementById('users-info');
const userPosts = document.getElementById('users-post');
const userInfo = document.querySelector('.user-info');

function getUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(response.ok) {
                return response.json()
            }else {
                throw new Error(`HTTP erro! Status: ${response.status}`)
            }        
        })
        .then((users) => {
            usersInfo.innerHTML = ""
            for(user of users){
                usersInfo.innerHTML += `
                    <div class="user-info">
                         <h3 id="user-name">${user.name}</h3>
                         <p id="user-email">${user.email}</p>
                         <button class="btn" onclick="userClicked(${user.id}, this)">Get Details</button>
                     </div>
                `
            } 
            resolve()       
        })
        .catch(error => {
            console.error(error);        
        })
    })

}
    
getUsers()
.then(() => {
    getPosts()
})

function getPosts(id=1) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => response.json())
        .then((posts) => {
            userPosts.innerHTML = ""
            for(post of posts) {
                let content = `
                    <div class="post">
                        <h3 id="post-title">${post.title.toUpperCase()}</h3>
                        <hr>
                        <p id="post-body">${post.body}</p>
                    </div>
                `
                userPosts.innerHTML += content
            }
        })        
}
function userClicked(id, e){
    getPosts(id)
    let activeElement = document.getElementsByClassName('active');
    for(element of activeElement){
        element.classList.remove('active')
    }
    e.parentElement.classList.add('active')
}

