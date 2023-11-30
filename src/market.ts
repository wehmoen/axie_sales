import {axieTokenAddress, marketplaceAddress, marketplaceSaleTopic, orderExchangeContract, provider} from "./chain.js";
import {Axie, AxieMetadata, SkyMavisApi} from "./axie.js";
import {config} from "./config.js";
import {Log} from "ethers";

export type Sale = {
    timestamp: number
    seller: string
    buyer: string
    priceEth: bigint
    tokenId: bigint
    transactionHash: string
    metadata?: AxieMetadata
}

export async function getMarketplaceLogsFromTransaction(txHash: string) {
    const receipt = await provider.getTransactionReceipt(txHash);
    if (!receipt) {
        throw new Error("Transaction not found");
    }
    return receipt.logs.filter((log) => log.address === marketplaceAddress && log.topics[0] === marketplaceSaleTopic)
}

const api = new SkyMavisApi(config.SKY_MAVIS_API_KEY)

export async function parseLogs(logs: Log[]): Promise<Sale[]> {
    let sales: Sale[] = []

    for (const log of logs) {
        const data = orderExchangeContract.interface.parseLog({
            topics: [
                marketplaceSaleTopic
            ],
            data: log.data
        })

        if (data && data.name === "OrderMatched") {
            if (data.args[0][0][2][0][1] === axieTokenAddress) {
                try {
                    const axie = new Axie(api, Number(data.args[0][0][2][0][2]))
                    sales.push({
                        timestamp: (await provider.getBlock(log.blockNumber))!.timestamp,
                        seller: data.args[0][0][0],
                        buyer: data.args[3],
                        priceEth: data.args[0][1],
                        tokenId: data.args[0][0][2][0][2],
                        transactionHash: log.transactionHash,
                        metadata: await axie.getMetadata()
                    })
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }

    return sales
}

export async function parseSalesFromTransaction(txHash: string): Promise<Sale[]> {
    const logs = await getMarketplaceLogsFromTransaction(txHash);
    return parseLogs(logs)
}

