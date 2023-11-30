import express from 'express';
import {ethers} from "ethers";
import {marketplaceAddress, marketplaceSaleTopic, provider} from "./chain.js";
import {parseLogs} from "./market.js";

const app = express();

app.get('/logs/:from/:to', async (req, res) => {
    const {from, to} = req.params;
    let fromBlock, toBlock;
    try {
        fromBlock = parseInt(from);
        toBlock = parseInt(to);
    } catch (e) {
        res.status(400).json({error: "Invalid block number"});
        return;
    }

    if (fromBlock > toBlock) {
        res.status(400).json({error: "Invalid block range"});
        return;
    }

    if (toBlock - fromBlock > 10) {
        res.status(400).json({error: "Block range too large. Max 10"});
        return;
    }

    try {

        const filter: ethers.Filter = {
            fromBlock,
            toBlock,
            topics: [
                marketplaceSaleTopic
            ],
            address: marketplaceAddress
        }

        const logs = await provider.getLogs(filter);
        const result = await parseLogs(logs)

        res.header("content-type", "application/json").send(
            JSON.stringify(result, (_, v) => {
                if (typeof v === "bigint") {
                    return v.toString()
                }
                return v
            }, 2)
        );
    } catch (e) {
        console.log(e)
        res.status(500).json({error: "Internal server error"});
    }

});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}!`);
});
