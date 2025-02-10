import {http,createConfig} from "wagmi";
import {mainnet,sepolia,base} from "wagmi/chains";
import {injected,safe,metaMask} from 'wagmi/connectors';

if(!import.meta.env.VITE_API_KEY)
        throw new Error('Alchemy api key not found');
export const config = createConfig({
    chains : [mainnet,sepolia,base],
    connectors : [
        injected(),
        metaMask(),
        safe(),
    ],
    transports : {
        [mainnet.id] : http(),
        [sepolia.id] : http(`https://eth-sepolia.g.alchemy.com/v2/${import.meta.env.VITE_API_KEY}`),
        [base.id] : http(),
    },
})