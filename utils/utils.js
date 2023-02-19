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

    if ( parseInt(char) ) {

        //char is a number
        return parseInt(char);

    } else {

        // char is a string
        return char.charCodeAt(0);

    }
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

    // adding fill to array
    const fill = [0,1,2,3,4,5,6,7,8,9];
    const filledArray = array.concat(fill);

    // split array into chunk and only use [0]
    const multipleArray = arrayToChunks(filledArray)[0];

    return multipleArray;

}

export function flattenArray(array) {
    return array.flat(2);
}

export function arrayToChunks(array, chunkSize = 10) {

    let chunks = [];

    for ( let i = 0; i < array.length; i += chunkSize) {

        // slice array into chunk and add to array
        const chunk = array.slice(i, i + chunkSize);
        chunks.push( chunk );

    }

    return chunks;

}

export function check10Multiple (array) {

    if(array.length < 10) {
        return arrayTo10Multiple(array);
    } else if(array.length > 10) {

        throw new Error("[check10Multiple] Input array > 10");
        
    } else {
        return array;
    }
    
}