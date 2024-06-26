import { SafeEventEmitterProvider } from '@web3auth/base';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';
import type { Registry } from '@polkadot/types/types';
import { formatBalance } from '@polkadot/util';

export default class PolkadotRPC {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  makeClient = async (): Promise<ApiPromise> => {
    console.log('Establishing connection to Polkadot RPC...');
    const rpcUrl = process.env.POLKADOT_RPC_URL || 'wss://rpc.testnet.metaquity.xyz';
    const provider = new WsProvider(rpcUrl);
    const api = await ApiPromise.create({ provider });
    const resp = await api.isReady;
    console.log('Polkadot RPC is ready', resp);
    return api;
  };

  getPolkadotKeyPair = async (): Promise<any> => {
    await cryptoWaitReady();
    const privateKey = (await this.provider.request({
      method: 'private_key',
    })) as string;
    const keyring = new Keyring({
      ss58Format: process.env.NEXT_PUBLIC_SS58FORMAT as unknown as number,
      type: 'sr25519',
    });
    const keyPair = keyring.addFromUri('0x' + privateKey);
    return keyPair;
  };

  getAccounts = async (): Promise<any> => {
    const keyPair = await this.getPolkadotKeyPair();
    return keyPair.address;
  };

  getBalance = async (): Promise<any> => {
    const keyPair = await this.getPolkadotKeyPair();
    const api = await this.makeClient();
    const format = this.getFormat(api.registry, 0);
    const json = await api.derive.balances?.all(keyPair.address);
    const [prefix, postfix] = formatBalance(json.freeBalance, {
      decimals: format[0],
      forceUnit: '-',
      withSi: false,
    }).split('.');
    return { prefix, postfix, symbol: format[1] };
  };

  getFormat(registry: Registry, formatIndex = 0): [number, string] {
    const decimals = registry.chainDecimals;
    const tokens = registry.chainTokens;

    return [
      formatIndex < decimals.length ? decimals[formatIndex] : decimals[0],
      formatIndex < tokens.length ? tokens[formatIndex] : tokens[1],
    ];
  }

  async createNFT() {
    try {
      const keyPair = await this.getPolkadotKeyPair();
      const api = await this.makeClient();

      return new Promise((resolve, reject) => {
        api.tx.nfts.create(keyPair.address, {}).signAndSend(keyPair, async (event: any) => {
          const result = event.toHuman();

          console.log('event', event);
          console.log('result', result);
          if (result.isError) {
            // Handle the error when the transaction fails
            console.error('Error creating NFT:', result.asError);
            reject('Error creating NFT');
            return;
          }

          if (result.status.InBlock) {
            // Check if the event contains the expected data
            if (result.events[3]?.event?.data?.collection) {
              api.tx.nfts
                .mint(result.events[3].event.data.collection, 1, keyPair.address, {})
                .signAndSend(keyPair, async (mintEvent: any) => {
                  const mintResult = mintEvent.toHuman();

                  if (mintResult.isError) {
                    // Handle the error when minting fails
                    console.error('Error minting NFT:', mintResult.asError);
                    reject('Error minting NFT');
                    return;
                  }

                  if (mintResult.status.InBlock) {
                    console.log('NFT successfully minted:', mintResult.status.InBlock);
                    resolve({
                      nftBlockMint: mintResult.status.InBlock,
                      nftCollectionID: result.events[3].event.data.collection,
                      nftItem: 1,
                      nftOwner: keyPair.address,
                    });
                  }
                });
            } else {
              // Handle the case when the expected data is not available
              console.error('Error creating NFT: Unexpected event structure');
              reject('Error creating NFT');
            }
          }
        });
      });
    } catch (error) {
      // Handle general errors
      console.error('Error creating NFT:', error);
      throw error; // Rethrow the error for the caller to handle if needed
    }
  }

  async fractionalizeNFT(collectionID: number, itemID: number, assetID: number, factional: number) {
    const keyPair = await this.getPolkadotKeyPair();
    const api = await this.makeClient();
    return new Promise((resolve, _) => {
      api.tx.nftFractionalization
        .fractionalize(collectionID, itemID, assetID, keyPair.address, 100)
        .signAndSend(keyPair, async (event: any) => {
          const result = event.toHuman();
          if (result.status.InBlock) {
            console.log('Fractionalized:', result.status.InBlock);
            resolve({
              nftCollectionID: collectionID,
              nftItem: itemID,
              fractionalizationAssetID: assetID,
              fractionalizationBlockMint: result.status.InBlock,
              fractionalization: factional,
            });
          }
        });
    });
  }
}
