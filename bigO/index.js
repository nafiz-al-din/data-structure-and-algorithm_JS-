function addUpTo(...n) {
    let total = 1;
    let val = [...n];
    
    for (let i = 0; i < val.length; i++) {
        total += val[i];
    }

    return total
}

let addedValues = addUpTo(2, 2, 2, 2, 1)
let addedValues2 = addUpTo(5, 4, 8, 5)
console.log(addedValues2);