export function removeSpacesFromArray(array) {
    return array.filter(char => char !== " ");
}

export function splitString(string) {
    return string.split("");
}

export function arrayValuesToAscii(array) {
    return array.map(char => {

        return charToAscii(char);

    });
}

//expects an array with 2 or more arrays with length == 10
export function sumArrayValues(arrays) {

    // console.log(arrays)
    for(const array of arrays) {
        if(array.length != 10) {
            throw new Error("Array must have length 10");
        }
    }

    //stackoverflow: https://stackoverflow.com/questions/24094466/sum-two-arrays-in-single-iteration
    // RECURSIVE MAKEN
    const sum = (array1, array2) => {
        return array1.map(function (num, idx) {
            return (num + array2[idx]) % 10;
        });
    }

    let sumArray = [0,0,0,0,0,0,0,0,0,0];

    for(let i = 0; i < arrays.length; i += 1) {

        const arrayIndex = i;

        sumArray = sum(sumArray, arrays[arrayIndex]);
    }

    return sumArray;
}

export function charToAscii (char) {

    if ( isNumeric(char) ) {

        //char is a number so return number
        return parseInt(char);

    } else {

        // char is a string so return string
        return char.charCodeAt(0);

    }
}

export function isNumeric(string) {
    return ('0123456789'.indexOf(string) !== -1);
}

//stackoverflow: https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits
export function numToSingleValues (number) {
    if(typeof number !== "number") {
        throw new Error("Input is not a number");
    }

    const digits = number.toString().split('');
    return digits.map(Number);
}

//expects array with length <= 10
//returns array with length == 10
export function arrayTo10Multiple(array) {

    if (array.length > 10) {
        throw new Error("Array too long");
    }

    let fillIndex = 0;

    // RECURSIVE MAKEN
    const recurse = (array) => {
        if(array.length < 10) {
            array.push(fillIndex);
            fillIndex++;
            return recurse(array)
        } else {
            return array;
        }
    }

    return recurse(array);

}

export function flattenArray(array) {
    return array.flat(2);
}

export function arrayToChunks(array) {
    if(array.length <= MOD10CHUNKSIZE) {

        return [array]

    } else {
        const head = array.slice(0, MOD10CHUNKSIZE);
        const tail = array.slice(MOD10CHUNKSIZE, array.length);
        return [head, ...arrayToChunks(tail)]
    }

}

const MOD10CHUNKSIZE = 10;

const chunks = arrayToChunks([1,2,3,4,5,6,7,8,9, 10])
console.log(chunks)

export function check10Multiple (array) {

    if(array.length < 10) {
        return arrayTo10Multiple(array);
    } else if(array.length > 10) {

        throw new Error("[check10Multiple] Input array > 10");
        
    } else {
        return array;
    }
    
}