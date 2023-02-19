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

export function sumArrayValues(array1, array2) {
    //stackoverflow: https://stackoverflow.com/questions/24094466/sum-two-arrays-in-single-iteration
    return array1.map(function (num, idx) {
        return (num + array2[idx]) % 10;
    });
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

export function arrayTo10Multiple(array) {

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

    const length = array.length;

    if ( length === 10 ) {

        // return current (correct) array
        return array

    } else if ( length > 10 ) {

        // split too long array into chunks
        const chunks = arrayToChunks(array);

        // making sure last chunk also has length == 10
        const chunk10Multple = check10Multiple(chunks[chunks.length - 1]);
        chunks.pop();
        chunks.push(chunk10Multple);

        return chunks;

    } else {

        // adding 0,1,2,3... to array
        return arrayTo10Multiple(array);

    }
    
}