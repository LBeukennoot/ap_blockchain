// const sha256 = require('js-sha256');
import sha256 from 'js-sha256';

const mod10sha = (string = "") => {
    
    let split = string.split("");

    let ascii = split.map(char => {

        const charAscii =  charToAscii(char);
        return numToSingleValues(charAscii);

    });

    // chunk flattened ascii array
    const asciiArrayChunked = check10Multiple(ascii.flat(1));

    const sum = addArrayValues(asciiArrayChunked)

    return sha256(sum.join(""));
}

// modules.exports = mod10;
export default { mod10sha, addArrayValues, sumArrayValues, check10Multiple, arrayToChunks, arrayTo10Multiple, numToSingleValues, charToAscii };