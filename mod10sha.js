import sha256 from 'js-sha256';
import { removeSpacesFromArray, check10Multiple, numToSingleValues, charToAscii, arrayToChunks, sumArrayValues, flattenArray, splitString } from './utils/utils.js';

const mod10sha = (string = "") => {

    let stringArray = splitString(string);
    console.log(stringArray)

    // remove spaces from string
    let stringArrayNoSpaces = removeSpacesFromArray(stringArray);
    console.log(stringArrayNoSpaces)

    // turn characters into ascii value, except numbers (t == 166)
    let arrayValuesAscii = stringArrayNoSpaces.map(char => {
        return charToAscii(char);
    });
    console.log(arrayValuesAscii);


    // split ascii values into single values [1,1,6,...]
    let splittedArrayValues = arrayValuesAscii.map(ascii => {
        return numToSingleValues(ascii);
    })

    splittedArrayValues = flattenArray(splittedArrayValues);
    console.log(splittedArrayValues);


    // split up this array into blocks of 10
    let chunkedArrays = arrayToChunks(splittedArrayValues);
    console.log(chunkedArrays);
    

    // if array length < 10, add 0,1,2,3,... untill length == 10
    const chunkedArrays10multiple = chunkedArrays.map(array => {
        return check10Multiple(array);
    });
    console.log(chunkedArrays10multiple);


    // add the first array to the second array, take the modulus of the sum
    const sumArray = sumArrayValues(chunkedArrays10multiple);
    console.log(sumArray);

    // make string of this array (join(""))
    const stringOfSumArray = sumArray.join("");
    console.log(stringOfSumArray);
    

    // do a sha256 over this string
    const hashedString = sha256(stringOfSumArray);
    console.log(hashedString);


    //return result
    return hashedString;

}

export default mod10sha;