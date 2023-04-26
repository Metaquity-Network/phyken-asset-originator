import { useEffect, useState } from "react";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";

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

export const Connect = () => {
  const [state, setState] = useState(initialExtensionState);

  const walletConnect = async () => {
    setState({ ...initialExtensionState, loading: true });
    const defaultAccount = await web3Enable("polkadot-extension-example").then(
      async () => {
        return await web3Accounts();
      }
    );
    if (defaultAccount.length > 0) {
      setState({
        ...state,
        data: { accounts: defaultAccount, defaultAccount: defaultAccount[0] },
      });
    } else {
      setState({
        ...initialExtensionState,
        loading: false,
        error: new Error("PolkaConnect not found"),
      });
    }
  };

  if (state.error) {
    return (
      <span className="text-white font-bold tracking-tight">
        Error with connect: {state.error.message}
      </span>
    );
  }

  return state.data ? (
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
};
