import { SafeEventEmitterProvider } from "@web3auth/base";
import { Keyring } from "@polkadot/api";
import { cryptoWaitReady } from "@polkadot/util-crypto";

import { ApiPromise, WsProvider } from "@polkadot/api";

export default class PolkadotRPC {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  makeClient = async (): Promise<any> => {
    console.log("Establishing connection to Polkadot RPC...");
    const provider = new WsProvider(process.env.NEXT_PUBLIC_WS_PROVIDER!); // localhost
    // const provider = new WsProvider("wss://westend-rpc.polkadot.io"); // testnet
    // const provider = new WsProvider("wss://rpc.polkadot.io"); // mainnet
    const api = await ApiPromise.create({ provider });
    const resp = await api.isReady;
    console.log("Polkadot RPC is ready", resp);
    return api;
  };

  getPolkadotKeyPair = async (): Promise<any> => {
    await cryptoWaitReady();
    const privateKey = (await this.provider.request({
      method: "private_key",
    })) as string;
    const keyring = new Keyring({
      ss58Format: process.env.NEXT_PUBLIC_SS58FORMAT as unknown as number,
      type: "sr25519",
    });

    const keyPair = keyring.addFromUri("0x" + privateKey);
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