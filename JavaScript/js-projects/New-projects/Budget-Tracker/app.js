const addBtn = document.getElementById('add-btn');
const mainContainer = document.querySelectorAll('.container')[1];
const amount = document.querySelector('input[type=number]');
const balance = document.getElementById('balance');
const transaction = document.querySelector('input[type=text]');  
const type = document.querySelector('.type-select'); 



function formatCurrency(value) {
    // return '$' + parseFloat(value).toFixed(2);
    const options2 = { style: "currency", currency: "USD" };
    // return '$' + new Intl.NumberFormat(locale).format(value);
    return new Intl.NumberFormat("en-US", options2).format(value);
}

function addTransaction() {
    const container = document.createElement('div');
    const descriptionElement = document.createElement('p');
    const transValue = document.createTextNode(transaction.value);
    descriptionElement.appendChild(transValue)

    container.classList.add('entry');
    container.appendChild(descriptionElement)
    

    // Transcation Type

    if(type.value == 'income') {
        container.classList.add('income')
    }else {
        container.classList.add('expense')
    }

    // Add the Amount

    if(!amount.value){
        alert('Invalid Number');
        return;
    } ;

    const amountContainer = document.createElement('div');
    const amountElement = document.createElement('p');
    const amountValue = document.createTextNode(`$${amount.value}`);
    amountElement.appendChild(amountValue);

    amountContainer.classList.add('amount-container');
    amountElement.classList.add('amount');
    amountContainer.appendChild(amountElement);

    // Delete Button
    const delButton = document.createElement('button');
    const delButtonText = document.createTextNode('Delete');
    delButton.appendChild(delButtonText);
    delButton.setAttribute('onclick', 'deleteThis(this)')
    
    amountContainer.appendChild(delButton)


    // Appending Elements
    container.appendChild(amountContainer)
    mainContainer.appendChild(container);

    // Updating the Balance
    updateBalance();

    transaction.value = "";
    amount.value = "";
}

addBtn.addEventListener('click', addTransaction);


// Sum the Balance

let totalBalance = 0;
function updateBalance() {  
    if(type.value == 'income') {
        totalBalance += +amount.value;
    }else {
        totalBalance -= +amount.value;
    }

    balance.innerText = formatCurrency(totalBalance);
}

// Delete Transaction

function deleteThis(e) {
    const mainElement = e.parentElement.parentElement;
    // const theAmount = document.querySelector('.amount');
    const theAmount = +(e.previousElementSibling.innerText).replace('$', '');
    console.log(theAmount)
    removedTransactoin(theAmount)
    mainElement.remove();
}


//Todo: update the amount after removing the Income and Expenses

function removedTransactoin(amount) {  
    totalBalance += amount
    
    balance.innerText = formatCurrency(totalBalance);
}

// const tables = ['man', 'do', 're', 'fo'];

// window.localStorage.setItem('tables', JSON.stringify(tables))

// console.log(localStorage.getItem('tables'))
// console.log(JSON.parse(localStorage.getItem('tables')))


// function formatNumberWithCommas(numberToFormat) {
//   return new Intl.NumberFormat(locale).format(numberToFormat);
// }


// Click when press Enter
amount.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') addBtn.click()
})