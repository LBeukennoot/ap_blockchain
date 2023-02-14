import { sumArrayValues } from './utils/utils.js';

const array = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

    [3, 3, 3, 3, 3, 3, 3, 3, 3, 7],

    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
]

let sumArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for(let i = 0; i < array.length; i += 1) {

    const arrayIndex = i;

    console.log("now at iteration "+ arrayIndex)

    // if(sumArray == undefined) {

    //     sumArray = sumArrayValues(chunkedArrays10multiple[0], chunkedArrays10multiple[1]);
    //     console.log("add array with id 0 and array with id 1")

    // } else {

        // then add the third array to the result of the previous step
        sumArray = sumArrayValues(sumArray, array[arrayIndex]);
        console.log("add temp array and array with id " + arrayIndex)
        console.log(sumArray)

    // }
}

console.log( (((((1 + 2) % 10) + 3 ) % 10) + 5 ) % 10);
