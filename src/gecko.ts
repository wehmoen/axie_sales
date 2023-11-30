import {CoinGeckoClient, SimplePriceResponse} from 'coingecko-api-v3';
const client = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
});

export async function EthToUSD(eth: string): Promise<string> {
    const price: SimplePriceResponse = await client.simplePrice({
        ids: 'ethereum',
        vs_currencies: 'usd',
    });

    const ethBigInt = BigInt(eth) * 100n;
    const ethPriceInUsd = BigInt(price["ethereum"]["usd"] * 100);

    // Calculate the total value in USD (as BigInt for precision)
    const totalInUsdBigInt = (ethBigInt * ethPriceInUsd) / BigInt(10 ** 18);



    // Convert BigInt to string for formatting
    return (Number(totalInUsdBigInt) / 10000).toFixed(2);
}
