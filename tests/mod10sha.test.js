// import {describe, expect, test} from '@jest/globals';// import { charToAscii } from '../utils/utils';
// charToAscii
const { charToAscii } = require('../utils/utils.js');
// import { charToAscii } from '../utils/utils.js';

test("1+1=2", () => {
    expect(1+1).toBe(2);
});

// test("numbers stay numbers", () => {
//     expect(charToAscii(9)).toBe(9);
//     expect(charToAscii(10)).toBe(10);
// });

// test("characters will be converted to ascii", () => {
//     expect(charToAscii("a")).toBe(97);
//     expect(charToAscii("b")).toBe(98);
// });

// // numToSingleValues

// test("will throw error if not a number", () => {
//     expect(() => {numToSingleValues("a")}).toThrow("Input is not a number");
// })

// test("will separated values into array", () => {
//     expect(numToSingleValues(123)).toStrictEqual([1, 2, 3]);
// });

// //arrayTo10Multiple

// test("will add numbers to array length of 10", () => {
//     expect(arrayTo10Multiple([2,5])).toStrictEqual([2,5,0,1,2,3,4,5,6,7]);
// })

// test("will return the same array if already length of 10", () => {
//     expect(arrayTo10Multiple([2,5,0,1,2,3,4,5,6,7])).toStrictEqual([2,5,0,1,2,3,4,5,6,7]);
// })

// //arrayToChunks

// test("will return the same array if already length of 10", () => {
//     expect(arrayToChunks([2,5,0,1,2,3,4,5,6,7])).toStrictEqual([[2,5,0,1,2,3,4,5,6,7]]);
// })

// test("will return two split up arrays if array length > 10", () => {
//     expect(arrayToChunks([2,5,0,1,2,3,4,5,6,7,8])).toStrictEqual([[2,5,0,1,2,3,4,5,6,7], [8]]);
// })

// test("will return same array if array length < 10", () => {
//     expect(arrayToChunks([2,5])).toStrictEqual([[2,5]]);
// })

// //check10Multiple

// test("will return 2 arrays with length == 10 if input is array with length 11", () => {
//     expect(check10Multiple([2,5,0,1,2,3,4,5,6,7,8])).toStrictEqual([[2,5,0,1,2,3,4,5,6,7], [8,0,1,2,3,4,5,6,7,8]]);
// })

// test("will return 1 array with length == 10 if input array length < 10", () => {
//     expect(check10Multiple([2,5])).toStrictEqual([2,5,0,1,2,3,4,5,6,7]);
// })

// test("will return the same array if input array length == 10", () => {
//     expect(check10Multiple([2,5,0,1,2,3,4,5,6,7])).toStrictEqual([2,5,0,1,2,3,4,5,6,7]);
// })

// //sumArrayValues

// test("will sum the values of two arrays and takes the % of the sum", () => {
//     expect(sumArrayValues([1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1])).toStrictEqual([0,0,0,0,0,0,0,0,0]);
// });

// //addArrayValues

// test("will return the sum of two arrays", () => {
//     expect(addArrayValues([[1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1]])).toStrictEqual([0,0,0,0,0,0,0,0,0]);
// })

// test("will return the sum of three arrays", () => {
//     expect(addArrayValues([
//         [1,2,3,4,5,6,7,8,9], 
//         [9,8,7,6,5,4,3,2,1], 
//         [2,2,2,2,2,2,2,2,2]]
//     ))
//     .toStrictEqual(
//         [2,2,2,2,2,2,2,2,2]
//     );
// })