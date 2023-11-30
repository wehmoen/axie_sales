import {axieTokenAddress} from "./chain.js";

export type AxieMetadata = {
    image?:           string;
    axieID?:          number;
    class?:           string;
    bodyShape?:       string;
    title?:           string;
    primaryColor?:    string;
    purity?:          Purity;
    parts?:           Part[];
    r1Parts?:         R1Part[];
    r2Parts?:         R2Part[];
    staTs?:           StaTs;
    potentialPoints?: PotentialPoints;
    genes?:           string;
    sireID?:          number;
    matronID?:        number;
    birthDate?:       number;
    breedCount?:      number;
}

export type Part = {
    class?:        string;
    id?:           string;
    name?:         string;
    specialGenes?: null;
    stage?:        number;
    type?:         string;
    speciaLGenes?: null;
    claSs?:        string;
}

export type PotentialPoints = {
    beast?:   number;
    aquatic?: number;
    plant?:   number;
    bug?:     number;
    bird?:    number;
    reptile?: number;
    mech?:    number;
    dawn?:    number;
    dusk?:    number;
}

export type Purity = {
    numMystic?: number;
    numJapan?:  number;
    numXmas?:   number;
    numSummer?: number;
    numShiny?:  number;
    pureness?:  number;
    purity?:    number;
}

export type R1Part = {
    class?:        string;
    id?:           string;
    name?:         string;
    specialGenes?: null;
    stage?:        number;
    type?:         string;
    speciaLGenes?: null;
    clAss?:        string;
}

export type R2Part = {
    class?:        string;
    id?:           string;
    name?:         string;
    specialGenes?: null;
    stage?:        number;
    type?:         string;
    specialGeNes?: null;
}

export type StaTs = {
    hp?:     number;
    speed?:  number;
    skill?:  number;
    morale?: number;
}


export class SkyMavisApi {
    private host: string = "https://api-gateway.skymavis.com/"
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

   getAxie(id: number): Promise<any> {
        return this.fetch("/skynet/ronin/nfts/search", {
            "contractAddresses": [
                axieTokenAddress
            ],
            "includes": [],
            "paging": {
                "cursor": "string",
                "limit": 1,
                "offset": 0,
                "pagingStyle": "offset"
            },
            "tokenIds": [
                id.toString()
            ]
        })
    }

    private async fetch(path: string, params: any) {
        const response = await fetch(this.host + path, {
            headers: {
                "x-api-key": this.apiKey,
                "content-type": "application/json"
            },
            body: JSON.stringify(params),
            method: "POST"
        });
        return await response.json();
    }
}

export class Axie {

    id: number;
    private api: SkyMavisApi;
    metadata?: AxieMetadata;

    constructor(api: SkyMavisApi, id: number,) {
        this.id = id;
        this.api = api;
    }

    private async fetch() {
        const apiResult = await this.api.getAxie(this.id);
        if (apiResult.result.paging.total === 0) {
            throw new Error("Axie not found")
        }
        const axie = apiResult.result.items[0];

        this.metadata = axie.rawMetadata;
    }

    toJSON() {
        return JSON.stringify(this.metadata)
    }

    async getMetadata(): Promise<AxieMetadata> {
        if (!this.metadata) {
            await this.fetch()
        }

        if (!this.metadata) {
            throw new Error("Axie not found")
        }

        return this.metadata
    }
}
