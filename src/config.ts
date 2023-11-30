import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

type ApplicationConfig = {
    SKY_MAVIS_API_KEY: string
    RPC_URL: string
}

export const config: ApplicationConfig = {
    SKY_MAVIS_API_KEY: process.env.SKY_MAVIS_API_KEY || '',
    RPC_URL: process.env.RPC_URL || '',
}
