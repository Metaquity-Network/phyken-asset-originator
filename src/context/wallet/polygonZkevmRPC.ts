import { erc20Abi } from '@/src/config/abi';
import { SafeEventEmitterProvider } from '@web3auth/base';
import axios from 'axios';
import Web3 from 'web3';

const tokenAddress = '0x96917458d14847e5C365B6c07e92aFbCA9629c02';

export default class PolygonZkevmRPC {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  getAccount = async () => {
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

  getTokenBalance = async () => {
    try {
      const web3 = new Web3(this.provider);
      const accounts = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(erc20Abi, tokenAddress);
      const balanceWei = await contract.methods.balanceOf(accounts[0]).call();
      console.log('Token balance Token balance', balanceWei);
      const balanceTokens = web3.utils.fromWei(balanceWei, 'ether');
      const balanceWithDecimals = parseFloat(balanceTokens).toFixed(2);
      console.log('Token balance:', balanceWithDecimals);
      return balanceWithDecimals;
    } catch (error) {
      console.error('Error', error);
      console.log('error', error);
    }
  };

  fetchTransactionHistory = async (address: string) => {
    try {
      const url = `https://sn2-stavanger-blockscout.eu-north-2.gateway.fm/api/v2/addresses/${address}/transactions`;

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
