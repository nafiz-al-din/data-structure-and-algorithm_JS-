function addTotalNumber(...n) {
    let total = 1;
    let val = [...n];
    
    for (let i = 0; i < val.length; i++) {
        total += val[i];
    }

    return total
}

function addUpTo(n) {
    let total = 0;
    
    while (n) {
        total += n--
    }
    
    return total
}

let addedValues = addUpTo(7)
let addedValues2 = addTotalNumber(5, 4, 8, 5)

console.log('addUpTo', addedValues);
console.log('addTotalNumber', addedValues2);