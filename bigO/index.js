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


// let addedValues2 = addTotalNumber(5, 4, 8, 5)
// console.log('addTotalNumber', addedValues2);

console.time();
let addedValues = addUpTo(10000000)
console.timeEnd();

console.log('addUpTo', addedValues);