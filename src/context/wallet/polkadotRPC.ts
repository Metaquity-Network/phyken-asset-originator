import { SafeEventEmitterProvider } from '@web3auth/base';
import { Keyring } from '@polkadot/api';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import { ApiPromise, WsProvider } from '@polkadot/api';

export default class PolkadotRPC {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  makeClient = async (): Promise<any> => {
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
    console.log('privateKey', privateKey);
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
    const data = await api.query.system.account(keyPair.address);
    console.log(data);
    return data.toHuman();
  };
}
