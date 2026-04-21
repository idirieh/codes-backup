//* try/catch: Catches exceptions and errors that occur during the execution of the code, including network errors and other unexpected issues.
//* response.ok: Checks the success of the HTTP response status, which might not throw an error but still indicates a failure.

try {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    if(!response.ok){
      throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)

} catch (err) {
    console.log(err)
    // update the DOM to warn the user
    // access an alternative API
    throw new Error('This is a network error!')
} finally {
    console.log('The operation completed.')
}