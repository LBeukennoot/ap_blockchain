import sha256 from 'js-sha256';
import { removeSpacesFromArray, charToAscii, numToSingleValues, arrayTo10Multiple, arrayToChunks, check10Multiple, sumArrayValues, flattenArray } from '../utils/utils.js';

//removeSpacesFromArray

test("removes spaces from an array", () => {
    expect(removeSpacesFromArray(["t", "e","x","t"," "])).toStrictEqual(["t", "e","x","t"]);
});

test("removes multiple spaces from an array", () => {
    expect(removeSpacesFromArray(["t", "e","x","t"," "," "])).toStrictEqual(["t", "e","x","t"]);
});

test("returns same array if there are no spaces", () => {
    expect(removeSpacesFromArray(["t", "e","x","t"])).toStrictEqual(["t", "e","x","t"]);
});

//charToAscii

test("numbers stay numbers", () => {
    expect(charToAscii(9)).toBe(9);
    expect(charToAscii(10)).toBe(10);
});

test("characters will be converted to ascii", () => {
    expect(charToAscii("a")).toBe(97);
    expect(charToAscii("b")).toBe(98);
});

// numToSingleValues

test("will throw error if not a number", () => {
    expect(() => {numToSingleValues("a")}).toThrow("Input is not a number");
})

test("will separated values into array", () => {
    expect(numToSingleValues(123)).toStrictEqual([1, 2, 3]);
});

//arrayTo10Multiple

test("will add numbers to array length of 10", () => {
    expect(arrayTo10Multiple([0,1])).toStrictEqual([0,1,0,1,2,3,4,5,6,7]);
})

test("will return the same array if already length of 10", () => {
    expect(arrayTo10Multiple([0,1,2,3,4,5,6,7,8,9])).toStrictEqual([0,1,2,3,4,5,6,7,8,9]);
})

test("will throw error if input array length > 10", () => {
    expect(() => arrayTo10Multiple([0,1,2,3,4,5,6,7,8,9,1,2])).toThrow("Array too long");
})

//arrayToChunks

test("[arrayToChunks] will return the same array if already length of 10", () => {
    expect(arrayToChunks([0,1,2,3,4,5,6,7,8,9])).toStrictEqual([[0,1,2,3,4,5,6,7,8,9]]);
})

test("[arrayToChunks] will return two split up arrays if array length > 10", () => {
    expect(arrayToChunks([0,1,2,3,4,5,6,7,8,9,1])).toStrictEqual([[0,1,2,3,4,5,6,7,8,9], [1]]);
})

test("[arrayToChunks] will return two split up arrays if array length == 20", () => {
    expect(arrayToChunks([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9])).toStrictEqual([[0,1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8,9]]);
})

test("[arrayToChunks] will return same array if array length < 10", () => {
    expect(arrayToChunks([0,1,2,3])).toStrictEqual([[0,1,2,3]]);
})

//check10Multiple

test("[check10Multiple] will throw error if input array length > 10", () => {
    expect(() => check10Multiple([0,1,2,3,4,5,6,7,8,9,1])).toThrow("[check10Multiple] Input array > 10");
})

test("[check10Multiple] will return 1 array with length == 10 if input array length < 10", () => {
    expect(check10Multiple([0,1])).toStrictEqual([0,1,0,1,2,3,4,5,6,7]);
})

test("[check10Multiple] will return the same array if input array length == 10", () => {
    expect(check10Multiple([0,1,2,3,4,5,6,7,8,9])).toStrictEqual([0,1,2,3,4,5,6,7,8,9]);
})

//sumArrayValues

test("[sumArrayValues] will throw an error if one of the input arrays length != 10", () => {
    expect(() => sumArrayValues([[1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1,0]])).toThrow("Array must have length 10");
});

test("[sumArrayValues] will sum the values of two arrays and takes the % of the sum", () => {
    expect(sumArrayValues([[0,1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1,0]])).toStrictEqual([9,9,9,9,9,9,9,9,9,9]);
});

test("[sumArrayValues] will sum the values of three arrays and takes the % of the sum", () => {
    expect(sumArrayValues([[0,1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1,0], [2,2,2,2,2,2,2,2,2,2]])).toStrictEqual([1,1,1,1,1,1,1,1,1,1]);
});

test("[sumArrayValues] will sum the values of four arrays and takes the % of the sum", () => {
    expect(sumArrayValues([[0,1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1,0], [2,2,2,2,2,2,2,2,2,2],[5,5,5,5,5,5,5,5,5,5]])).toStrictEqual([6,6,6,6,6,6,6,6,6,6]);
});

test("[sumArrayValues] will sum the values of five arrays and takes the % of the sum", () => {
    expect(sumArrayValues([[0,1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1,0], [2,2,2,2,2,2,2,2,2,2],[5,5,5,5,5,5,5,5,5,5],[4,4,4,4,4,4,4,4,4,4]])).toStrictEqual([0,0,0,0,0,0,0,0,0,0]);
});

//flattenArray

test("array with 1 dimension flattens into 1 big array", () => {
    expect(flattenArray([[0,1,2],[0,1,2]])).toString([0,1,2,0,1,2]);
});

test("array with 2 dimension flattens into 1 big array", () => {
    expect(flattenArray([[0,1,2],[0,1,2,[0,1,2]]])).toString([0,1,2,0,1,2,0,1,2]);
});

//sha256

test("will hash correctly with method sha256", () => {
    expect(sha256("1234567890")).toBe("c775e7b757ede630cd0aa1113bd102661ab38829ca52a6422ab782862f268646");
});