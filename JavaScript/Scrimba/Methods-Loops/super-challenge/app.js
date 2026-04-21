const contactsArr = [
    { name: 'John Smith', email: 'john.smith@gmail.com', phone: '415-792-6341' },
    { name: 'Kofi Mensah', email: 'kofi.mensah@yahoo.com', phone: '+233-24-597-1823' },
    { name: 'Jane West', email: 'jane.west@hotmail.com', phone: '310-453-8765' },
    { name: 'Alice Johnson', email: 'alice.johnson@outlook.com', phone: '202-555-8472' },
    { name: 'Amina Hassan', email: 'amina.hassan@gmail.com', phone: '+254-712-439582' },
    { name: 'Jane Smith', email: 'jane.smith@yahoo.com', phone: '212-555-2394' },
    { name: 'Chun Hei Park', email: 'chunhei.park@naver.com', phone: '+82-10-8243-6510' },
    { name: 'Rina Nakamura', email: 'rina.nakamura@jp.com', phone: '+81-90-2746-3951' }
]



/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

patternSearchSubmit.addEventListener('click', ()=> {
    contactDisplay.innerHTML = ''
    let searchedItem = patternSearchInput.value
    
    for(let contact of contactsArr){
        let regex = new RegExp(searchedItem, 'gi');
        if(contact.name.match(regex)){
            renderContact(contact)
        }
    }
})


function renderContact(contactObj) {
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')

    for(let item in contactObj){
        contactCard.innerHTML += `<p>${contactObj[item]}<p/>`
    }
    contactDisplay.appendChild(contactCard)

}


