import { useEffect, useState } from "react";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";

type TExtensionState = {
  data?: {
    accounts: InjectedAccountWithMeta[];
    defaultAccount: InjectedAccountWithMeta;
  };
  loading: boolean;
  error: null | Error;
};

const initialExtensionState: TExtensionState = {
  data: undefined,
  loading: false,
  error: null,
};

const clientId =
  "BEglQSgt4cUWcj6SKRdu5QkOXTsePmMcusG5EAoyjyOYKlVRjIF1iCNnMOTfpzCiunHRrMui8TIwQPXdkQ8Yxuk"; // get from https://dashboard.web3auth.io

export const Connect = () => {
  const [connectBrowserWallet, isConnectBrowserWallet] = useState(true);
  const [state, setState] = useState(initialExtensionState);
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
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

  function uiConsole(...args: any[]): void {
    console.log(args);
    const el = document.querySelector("#console>p");
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2);
    }
  }

  const login = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };

  const walletConnect = async () => {
    setState({ ...initialExtensionState, loading: true });
    // const defaultAccount = await web3Enable("polkadot-extension-example").then(
    //   async () => {
    //     return await web3Accounts();
    //   }
    // );
    // if (defaultAccount.length > 0) {
    //   setState({
    //     ...state,
    //     data: { accounts: defaultAccount, defaultAccount: defaultAccount[0] },
    //   });
    // } else {
    //   setState({
    //     ...initialExtensionState,
    //     loading: false,
    //     error: new Error("PolkaConnect not found"),
    //   });
    // }
  };

  // if (state.error) {
  //   return (
  //     <span className="text-white font-bold tracking-tight">
  //       Error with connect: {state.error.message}
  //     </span>
  //   );
  // }

  const browserWallet = state.data ? (
    <div className="text-white">Hello, {state.data.defaultAccount.address}</div>
  ) : (
    <button
      className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
      disabled={state.loading}
      onClick={walletConnect}
    >
      {state.loading ? "Connecting..." : "Connect Wallet"}
    </button>
  );

  const web3authWallet = (
    <button onClick={login} className="card">
      Login
    </button>
  );

  return connectBrowserWallet ? browserWallet : web3authWallet;
};
