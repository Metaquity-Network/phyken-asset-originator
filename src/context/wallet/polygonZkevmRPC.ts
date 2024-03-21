import { SafeEventEmitterProvider } from '@web3auth/base';
import axios from 'axios';
import Web3 from 'web3';

export default class PolygonZkevmRPC {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  getAccounts = async () => {
    try {
      const web3 = new Web3(this.provider);
      const accounts = await web3.eth.getAccounts();
      console.log('Eth accounts', accounts);
      return accounts[0];
    } catch (error) {
      console.error('Error', error);
      console.log('error', error);
      return '';
    }
  };

  getBalance = async () => {
    try {
      const web3 = new Web3(this.provider);
      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);
      console.log('Eth balance', balance);
    } catch (error) {
      console.error('Error', error);
      console.log('error', error);
    }
  };

  // getTokenBalance = async () => {
  //   try {
  //     const web3 = new Web3(this.provider);
  //     const accounts = await web3.eth.getAccounts();
  //     const contract = new web3.eth.Contract(erc20Abi, tokenAddress);
  //     const balance = await contract.methods.balanceOf(accounts[0]).call();
  //     console.log('Token balance', balance);
  //   } catch (error) {
  //     console.error('Error', error);
  //     console.log('error', error);
  //   }
  // };

  fetchTransactionHistory = async () => {
    try {
      const url =
        'https://sn2-stavanger-blockscout.eu-north-2.gateway.fm/api/v2/addresses/0x985675C272104A4608CE651bf6aA65F6B6d4e739/transactions';

      const response = await axios.get(url);
      const data = response.data;
      console.log('data', data.items);
      return data.items;
    } catch (error) {
      console.error('Error fetching transaction history:', error);
      return [];
    }
  };
}
