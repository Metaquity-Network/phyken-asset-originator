'use client';

import { useEffect, useState } from 'react';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { walletLogin } from '@/src/reducers/features/wallet.reducers';
import { AppDispatch } from '@/src/reducers/store';
import PolkadotRPC from '@/src/context/wallet/polkadotRPC';
import { deleteCookie, getCookie } from 'cookies-next';
import axios from 'axios';

export const Connect = () => {
  const router = useRouter();
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId: process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENTID!,
          web3AuthNetwork: 'sapphire_mainnet', // Web3Auth Network
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.OTHER,
            chainId: '0x1',
            rpcTarget: 'rpcUrl',
          },
        });
        setWeb3auth(web3auth);

        await web3auth.initModal();

        if (web3auth.provider) {
          setProvider(web3auth.provider);
        }
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  const getRedirect = () => {
    const redirect = getCookie('redirect');
    if (redirect) {
      deleteCookie('redirect');
      return redirect.toString();
    }
    return '/';
  };

  async function loginAPI(loginRequest: any) {
    const response = await axios.post(`/api/auth/login`, loginRequest);
    if (response.status === 200) {
      router.push(getRedirect());
    }
    router.push('/');
  }

  const login = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    if (web3authProvider) {
      const rpc = new PolkadotRPC(web3authProvider);
      const userAccount = await rpc.getAccounts();
      console.log('Address', userAccount);
      const user = await web3auth.getUserInfo();
      dispatch(walletLogin(userAccount));
      loginAPI({ authType: user.typeOfLogin, email: user.email, tokenID: user.idToken });
    }
  };

  return (
    <>
      <button
        type="button"
        className="w-full h-10 py-2 rounded-full bg-primary hover:bg-opacity-90 p-3 font-medium text-gray gap-3"
        onClick={login}
      >
        Login With Web3Auth
      </button>
    </>
  );
};
