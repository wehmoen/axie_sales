import {CoinGeckoClient, SimplePriceResponse} from 'coingecko-api-v3';
const client = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
});

export async function getAxiePriceInUSD() {

    const result: SimplePriceResponse = await client.simplePrice({
        ids: 'axie-infinity',
        vs_currencies: 'usd',
    });
    return result['axie-infinity']['usd'];
}

const p = await getAxiePriceInUSD();

console.log(p);
