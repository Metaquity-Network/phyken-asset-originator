"use client";

import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { walletLogin } from "../../reducers/features/wallet.reducers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../reducers/store";
import PolkadotRPC from "../../context/wallet/polkadotRPC";
import { Button } from "@mui/material";

export const Connect = () => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId: process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENTID!,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.OTHER,
          },
          web3AuthNetwork: "cyan",
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

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    if (web3authProvider) {
      const rpc = new PolkadotRPC(web3authProvider);
      const userAccount = await rpc.getAccounts();
      console.log("Address", userAccount);
      dispatch(walletLogin(userAccount));
    }
  };

  return (
    <>
      <div>
        <Button
          className="self-stretch w-[100%] rounded-21xl bg-blue-600 h-10 flex flex-row items-center justify-center p-0.5 box-border text-white hover:bg-blue-500"
          onClick={login}
        >
          Login With Web3Auth
        </Button>
      </div>
    </>
  );
};
