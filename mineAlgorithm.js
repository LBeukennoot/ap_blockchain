import fetch from 'node-fetch';
import mod10sha from './mod10sha.js';

const nextBlockLink = "https://programmeren9.cmgt.hr.nl:8000/api/blockchain/next"
const nonceFoundLink = "https://programmeren9.cmgt.hr.nl:8000/api/blockchain"

// stap 1
fetch(nextBlockLink)
    .then((res) => res.json())
    .then((data) => hashNextBlock(data))

const hashNextBlock = (data) => {


    
    if(data.open) {
        // throw new Error("Closed");
    }

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
    let nonceFound = false;
    let newNonce = 0;

    // stap 2
    while(nonceFound == false) {
        for(let i = 1; i < 300000 && nonceFound == false; i+=1) {
            let newHashable = getHashedNewBlock(data, lastHashedBlock, i);
            console.log(i + " " + newHashable)
        console.log(data.countdown)


            if(newHashable.startsWith("0000")) {
                console.log(newHashable)
                nonceFound = true;
                newNonce = i;
                //stap 3
                fetch(nonceFoundLink,
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify({
                            "nonce": newNonce,
                            "user": "1018610 Lars B"
                        })
                    })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(res => console.log(res))
            }
        }
    }
}