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
        console.log(sumArrayValues(array[0],array[1]))
        return sumArrayValues(array[0], array[1]);

    } else {

        console.log("3 or more arrays")

        let tempArraySum;

        for( let i = 0; i < array.length; i++ ) {

            console.log("iteration number " + i)

            if( !tempArraySum ) {
                console.log(array[0])
                tempArraySum = sumArrayValues(array[0], array[1])
                
            } else {
                console.log(i)
                tempArraySum = sumArrayValues(tempArraySum, array[i])

            }

            // console.log(tempArraySum)

        }

        // console.log(tempArraySum)
        return tempArraySum

    }

}

// addArrayValues([[0,0,0,0,0,0,0,0,0], [2,2,2,2,2,2,2,2,2]])
addArrayValues([[1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1], [2,2,2,2,2,2,2,2,2]])

module.exports = { addArrayValues, sumArrayValues, check10Multiple, arrayToChunks, arrayTo10Multiple, numToSingleValues, charToAscii };