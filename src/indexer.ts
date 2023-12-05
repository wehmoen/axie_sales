import {axieTokenAddress, marketplaceSaleTopic, provider} from "./chain.js";
import mongoose, {connect, Schema} from "mongoose"
mongoose.set('bufferCommands', false);
import {parseLogs} from "./market.js";
import dotenv from "dotenv";
dotenv.config()

const erc721SaleSchema = new Schema({
    seller: String,
    buyer: String,
    price: String,
    price_usd: String,
    seller_received: String,
    token: String,
    token_id: String,
    transaction_id: String,
    block: Number,
    processed: { type: Boolean, default: false }
}, {
    timestamps: true,
    collection: 'erc721_sales'
});

const settingsSchema = new Schema({
    key: { type: String, unique: true },
    value: String,
}, {
    timestamps: true,
    collection: 'settings'
});

const Erc721Sale = mongoose.model('Erc721Sale', erc721SaleSchema);
const Settings = mongoose.model('Settings', settingsSchema);


async function main() {

    await connect(process.env.DATABASE_URL!, {
        connectTimeoutMS: 10000000,
        //@ts-ignore
        useNewUrlParser: true,
    });
    console.log("Connected to database")

    let currentBlock = await getLastProcessedBlock();

    while (true) {
        const latestBlock = await provider.getBlockNumber();

        if (currentBlock < latestBlock - 3) {
            console.log("Processing block " + currentBlock)
            const logs = await provider.getLogs({
                fromBlock: currentBlock,
                toBlock: currentBlock,
                topics: [marketplaceSaleTopic]
            });

            const result = await parseLogs(logs)

            for (const sale of result) {
                try {
                    const s = new Erc721Sale( {
                        seller: sale.seller,
                        buyer: sale.buyer,
                        price: sale.priceEth.toString(16),
                        seller_received: sale.priceEth.toString(16),
                        price_usd: sale.priceUsd!.toString(),
                        token_id: sale.tokenId.toString(16),
                        token: axieTokenAddress.toString(),
                        transaction_id: sale.transactionHash,
                        block: currentBlock,
                        processed: false
                    })

                    await s.save();
                } catch (e: any) {
                    console.log("Failed to save sale: " + e.message)
                }
            }

            await updateLastProcessedBlock(currentBlock);
            currentBlock++;
        } else {
            await delay(4000);
        }
    }
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getLastProcessedBlock(): Promise<number> {
    const setting = await Settings.findOne({ key: 'lastProcessedBlock' });

    if (setting && setting.value) {
        return parseInt(setting.value);
    } else {
        return (await provider.getBlockNumber()) - 3;
    }
}

async function updateLastProcessedBlock(blockNumber: number) {
    await Settings.updateOne({ key: 'lastProcessedBlock' }, { value: blockNumber.toString() }, { upsert: true });
}

main().catch(console.error)
