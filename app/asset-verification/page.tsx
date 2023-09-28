'use client';

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const AssetVerification: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center">
        <div className="relative w-full max-w-[55%] rounded-l py-12 px-8 text-center md:py-15 md:px-17.5">
          <span className="mx-auto inline-block text-5xl text-primary">
            <FaCheckCircle />
          </span>
          <h3 className="mt-5.5 pb-2 text-xl font-bold sm:text-4xl">Asset Verification Complete!</h3>
          <p className="pt-5">Your asset has been verified successfully, and an NFT has been created. </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center w-[50%] h-70 py-7 rounded-sm border border-stroke bg-bodydark1 shadow-default dark:border-strokedark dark:bg-boxdark">
          <Image width={450} height={250} src={'/assets/asset-verified.png'} alt="Cards" />
          <div className="px-8">
            <button className="flex flex-row w-full h-10 py-2 justify-center rounded-full bg-primary hover:bg-opacity-90 p-3 font-medium text-gray gap-3">
              <div>View NFT</div>
            </button>
            <div className="pt-3 pl-2">
              <p>Created on xyz</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetVerification;
