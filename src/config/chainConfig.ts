import { CustomChainConfig, CHAIN_NAMESPACES } from '@web3auth/base';

export const CHAIN_CONFIG = {
  'Stavanger Public Testnet': {
    displayName: 'Stavanger Public Testnet',
    chainId: '0x28EDBF08',
    rpcTarget: `https://sn2-stavanger-rpc.eu-north-2.gateway.fm`,
    blockExplorerUrl: 'https://sn2-stavanger-blockscout.eu-north-2.gateway.fm/',
    ticker: 'ST-ETH',
    tickerName: 'ST-Ethereum',
    logo: 'https://images.toruswallet.io/eth.svg',
    chainNamespace: CHAIN_NAMESPACES.EIP155,
  } as unknown as CustomChainConfig,
} as const;

export type CHAIN_CONFIG_TYPE = keyof typeof CHAIN_CONFIG;
