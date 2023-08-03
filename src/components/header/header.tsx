import { useEffect, useState } from "react";
import { useAppSelector } from "../../reducers/store";
import { Connect } from "../wallet-connect/connect";

export default function Header() {
  const { walletAddress } = useAppSelector(
    (state) => state.walletReducers.value
  );

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-gray-900">
      {/* add logo here */}
      <a href="#" className="text-white font-bold text-xl">
        Metaquity
      </a>
      <div className="flex">
        <div className="px-4">
          {walletAddress != "" ? (
            <div className="py-2 px-5 border border-primary text-purple-600 font-bold">{`${walletAddress?.slice(
              0,
              6
            )}...${walletAddress?.slice(-4)}`}</div>
          ) : null}
        </div>
        <div>
          <Connect />
        </div>
      </div>
    </header>
  );
}
