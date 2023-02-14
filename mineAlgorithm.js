import fetch from 'node-fetch';
// const fetch = require("node-fetch");
// const mod10sha = require("./mod10sha.js");
import mod10sha from './mod10sha.js';

const nextBlockLink = "https://programmeren9.cmgt.hr.nl:8000/api/blockchain/next"


// stap 1

console.log(mod10sha("text"))
// console.log(mod10sha("000078454c038871fa4d67b0022a30baaf25eaa231f8991b108e2624f052f3f8CMGT Mining CorporationBob PIKAB11548689513858154874778871610312"))


fetch(nextBlockLink)
    .then((res) => res.json())
    .then((data) => hashNextBlock(data))

const hashNextBlock = ({ blockchain }) => {
    const {hash, nonce, timestamp, data} = blockchain;

    if (data.length > 1) {
        console.error("blockchain data contains multiple arrays");
        return;
    }

    const transaction = data[0];
    let hashable = hash
    hashable += transaction.from
    hashable += transaction.to
    hashable += transaction.amount
    hashable += transaction.timestamp
    hashable += timestamp
    hashable += nonce

    // console.log(mod10sha(hashable))
}