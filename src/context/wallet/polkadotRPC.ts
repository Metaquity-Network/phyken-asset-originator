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
    console.log([prefix, postfix]);
    return { prefix, postfix, symbol: format[1] };
  };

  getUserTransactionHistory = async (): Promise<any> => {
    const api = await this.makeClient();
    const keyPair = await this.getPolkadotKeyPair();
    const chainInfo = await api.registry.getChainProperties();

    const unsub = await api.query.system.account.multi([keyPair.address], (balances: any) => {
      const [{ data: balance1 }] = balances;

      console.log(`The balances are ${balance1.free} `);
    });
  };

  transferBalance = async (accountID: string, value: any): Promise<any> => {
    const keyPair = await this.getPolkadotKeyPair();
    const api = await this.makeClient();
    await api.tx.balances.transfer(keyPair.address, 121212121211212).signAndSend(keyPair);
    this.getFormat(api.registry, 0);
    const info = await api.tx.balances.transfer(keyPair.address, 121212121211212).paymentInfo(keyPair.address);
    console.log(`
    class=${info.class.toString()},
    weight=${info.weight.toString()},
    partialFee=${info.partialFee.toHuman()}
  `);
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
    const keyPair = await this.getPolkadotKeyPair();
    const api = await this.makeClient();
    const nonce: any = await api.query.system.account(keyPair.address);
    console.log('nonce', nonce.nonce.toNumber());
    const currentNonce = nonce.nonce.toNumber() as number;
    const call = await api.tx.nfts.create(keyPair.address, {}).signAndSend(keyPair);
    const callMint = await api.tx.nfts.mint(4, 1, keyPair.address, {}).signAndSend(keyPair);
    console.log('call NFT >>> ', call);
    console.log('call mint <<<', callMint);
    await api.rpc.chain.subscribeNewHeads((header) => {
      console.log(`New block added at block number ${header.number.toNumber()}`);
      // Your code to handle the new block here
    });
    this.fractionalizeNFT();
    return call;
  }

  async fractionalizeNFT() {
    const keyPair = await this.getPolkadotKeyPair();
    const api = await this.makeClient();
    const call = await api.tx.nftFractionalization.fractionalize(3, 1, 100, keyPair.address, 100).signAndSend(keyPair);
    console.log('call NFT', call);
    return call;
  }
}
