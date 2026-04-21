function checkUsername(userName) {
    if (userName) {
        console.log(userName)
    } else {
        throw new Error('No username provided')
        console.log('I do not execute')
    }
}

checkUsername()