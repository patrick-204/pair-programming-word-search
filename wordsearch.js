const wordSearch = (letters, word) => { 
    if (letters.length === 0) return false;

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    // vertical word logic. Take the letters array, transpose it and perform 
    // the same action that was performed above

    // define empty arr to store a new set of arrays that
    // are of length equal to the amount of columns in letter
    tempArr = [];
    for (let c = 0; c < letters.length[0]; c++) {
        tempArr.push([]);
    }

    // create the trasnposed array
    for (let c = 0; c < letters.length[0]; c++) {
        for (let r = 0; r < letters.length; r++) {
            tempArr[c][r] = letters[r][c];
        }
    }

    // define a new array to store the mapped version of the contents of 
    // the letters array, joining all elements of each nested array together, and keeping
    // each nested array separated by comma (the words of the word search)
    const verticalJoin = tempArr.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    // 2nd temp arr
    // let tempArr2 = [];
    // run through the diagonal array for top left down
    // if nested index is equal to out the =n push to arr
    // for (let c = 0; c < letters.length[0]; c++) {
    //     for (let r = 0; r < letters.length; r++) {
    //         if (c === r) {
    //             tempArr2.push(letters[r][r]);
    //         }
    //     }
    // }

    // console.log(tempArr2);

    // if the word isn't found in either h or v test then return false
    return false;
}

module.exports = wordSearch