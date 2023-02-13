const charToAscii = (char) => {

    if ( parseInt(char) ) {

        return parseInt(char);

    } else {

        return char.charCodeAt(0);

    }
}

//stackoverflow: https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits
const numToSingleValues = (number) => {
    if(typeof number !== "number") {
        throw new Error("Input is not a number");
    }

    const digits = number.toString().split('');
    return digits.map(Number);
}

const arrayTo10Multiple = (array) => {

    // adding fill to array
    const fill = [0,1,2,3,4,5,6,7,8,9];
    const filledArray = array.concat(fill);

    // split array into chunk and only use [0]
    const multipleArray = arrayToChunks(filledArray)[0];

    return multipleArray;

}

const arrayToChunks = (array, chunkSize = 10) => {

    let chunks = [];

    for ( let i = 0; i < array.length; i += chunkSize) {

        // slice array into chunk and add to array
        const chunk = array.slice(i, i + chunkSize);
        chunks.push( chunk );

    }

    return chunks;

}

const check10Multiple = (array) => {

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

//stackoverflow: https://stackoverflow.com/questions/24094466/sum-two-arrays-in-single-iteration
const sumArrayValues = (array1, array2) => {
    return array1.map(function (num, idx) {
        return (num + array2[idx]) % 10;
    });
}

const addArrayValues = (array) => {

    const length = array.length;

    if ( length <= 2) {

        // sum the values of the two arrays
        //stackoverflow: https://stackoverflow.com/questions/24094466/sum-two-arrays-in-single-iteration
        const sum = array[0].map(function (num, idx) {
            return (num + array[1][idx]) % 10;
        });

        return sum;

    } else {

        let arraySum;

        for( let i = 0; i < array.length - 1; i++ ) {

            if( !arraySum ) {

                arraySum = addArrayValues([array[0],array[1]])

            } else {

                arraySum = addArrayValues([arraySum, array[i + 1]])

            }

        }

        return arraySum

    }

}

// export default { charToAscii }
module.exports = { charToAscii }
// export default { addArrayValues, check10Multiple, numToSingleValues, charToAscii };
// module.exports = { addArrayValues, check10Multiple, numToSingleValues, charToAscii };