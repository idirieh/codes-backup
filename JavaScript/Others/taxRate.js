function taxRate(amountBfore, amountAfter){
    let taxAmount = amountAfter - amountBfore;
    let tax = (taxAmount / amountBfore) * 100;
    let taxPercentage = Math.round(tax) + '%';
    return taxPercentage
}

// console.log(taxRate(176, 198.88))
console.log(taxRate(365817, 460497))