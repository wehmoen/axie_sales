import { CoinGeckoClient, SimplePriceResponse } from 'coingecko-api-v3';

const client = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
});

let lastUpdated = 0;
let ethPriceInUsd = 0;

async function updateEthPrice() {
    if (Date.now() - lastUpdated > 60 * 1000) { // Update price every minute
        const price: SimplePriceResponse = await client.simplePrice({
            ids: 'ethereum',
            vs_currencies: 'usd',
        });
        ethPriceInUsd = price.ethereum.usd;
        lastUpdated = Date.now();
    }
}

export async function EthToUSD(eth: bigint): Promise<string> {
    await updateEthPrice(); // Ensure the price is up-to-date
    const ethAmount = Number(eth) / 1e18; // Convert from wei to ETH
    const totalInUsd = ethAmount * ethPriceInUsd; // Calculate total in USD
    return totalInUsd.toFixed(2); // Convert to a string with 2 decimal places
}
