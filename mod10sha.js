// const sha256 = require('js-sha256');
import sha256 from 'js-sha256';
// const sha256 = require("js-sha256");
import { removeSpacesFromArray, check10Multiple, numToSingleValues, charToAscii, arrayToChunks, sumArrayValues, flattenArray, splitString } from './utils/utils.js';
// const { removeSpacesFromArray } = require("./utils/utils.js");

const mod10sha = (string = "") => {

    let stringArray = string.splitString("");

    // remove spaces from string
    let stringArrayNoSpaces = removeSpacesFromArray(stringArray);

    // turn characters into ascii value, except numbers (t == 166)
    let arrayValuesAscii = stringArrayNoSpaces.map(char => {
        return charToAscii(char);
    });

    // split ascii values into single values [1,1,6,...]
    let splittedArrayValues = arrayValuesAscii.map(ascii => {
        return numToSingleValues(ascii);
    })

    splittedArrayValues = flattenArray(splittedArrayValues);

    // split up this array into blocks of 10
    let chunkedArrays = arrayToChunks(splittedArrayValues);

    // if array length < 10, add 0,1,2,3,... untill length == 10

    chunkedArrays.map(array => {
        check10Multiple(array);
    });

    console.log(chunkedArrays);

    let chunkedArrays10multiple = [];

    for(const chunkedArray of chunkedArrays) {
        chunkedArrays10multiple.push(check10Multiple(chunkedArray));
    }

    // add the first array to the second array, take the modulus of the sum
    let sumArray = [0,0,0,0,0,0,0,0,0,0];
    
    // console.log("should be adding " + chunkedArrays10multiple.length + " arrays")
    // console.log(chunkedArrays10multiple)

    for(let i = 0; i < chunkedArrays10multiple.length; i += 1) {

        const arrayIndex = i;

        // console.log("now at iteration "+ arrayIndex)

        // if(sumArray == undefined) {

        //     sumArray = sumArrayValues(chunkedArrays10multiple[0], chunkedArrays10multiple[1]);
        //     console.log("add array with id 0 and array with id 1")

        // } else {

            // then add the third array to the result of the previous step
            sumArray = sumArrayValues(sumArray, chunkedArrays10multiple[arrayIndex]);
            // console.log("add temp array and array with id " + arrayIndex)
            // console.log(sumArray)

        // }
    }

    // make string of this array (join(""))
    const stringOfSumArray = sumArray.join("");

    // do a sha256 over this string
    const hashedString = sha256(stringOfSumArray);

    //return result
    return hashedString;

}

// modules.exports = mod10;
export default mod10sha;