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

const hashNextBlock = (data) => {

    const getHashedNewBlock = (data, lastHashedBlock, nonce) => {
        if (data.transactions.length > 1) {
            console.error("[API error] Didn't expect multiple transactions");
            return;
        }

        // console.log(data)
        let transaction = data.transactions[0]
        let hashable = lastHashedBlock;
        hashable += transaction.from;
        hashable += transaction.to;
        hashable += transaction.amount;
        hashable += transaction.timestamp;
        hashable += data.timestamp;
        hashable += nonce;

        return mod10sha(hashable);
    }

    const getHashedLastBlock = (blockchain) => {
        const {hash, nonce, timestamp, data} = blockchain;
        // const

        if (data.length > 1) {
            console.error("[API error] Blockchain data contains multiple arrays");
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

        return mod10sha(hashable)
    }

    const lastHashedBlock = getHashedLastBlock(data.blockchain);
    // console.log(lastHashedBlock)
    let nonceFound = false;
    let newNonce = 0;

    // while(nonceFound == false) {
        // for(let i = 10000; i < 50000 && nonceFound == false; i+=1) {
        //     let newHashable = getHashedNewBlock(data, lastHashedBlock, i);
        //     console.log(i + " " + newHashable)

        //     if(newHashable.startsWith("0000")) {
        //         console.log(newHashable)
        //         nonceFound = true;
        //         newNonce = i;
        //     }
        // }
    // }
}