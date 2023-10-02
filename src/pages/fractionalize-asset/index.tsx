'use client';

import React from 'react';
import Breadcrumb from '@/src/components/breadcrumbs/breadcrumb';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const FractionalizeAsset: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Breadcrumb pageName={['Fractionalize Asset']} />

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2  md:col-span-1 px-10 pt-10 bg-bodydark1 dark:bg-boxdark">
          <div className="w-1/2 2xsm:w-full ">
            <div className="text-xl font-semibold ">Asset Detail/Name</div>
            <div className="pt-5">
              <p>Lorem ipsum dolor sit amet consectetur. In vehicula imperdiet velit in.</p>
            </div>
            <div className="text-m bold font-medium 2xsm:pt-10 md:pt-15">Category - Lorem ipsum</div>
            <div className="font-bold text-1xl">$00000</div>
          </div>
          <div className="w-1/2 2xsm:w-full h-64 2xsm:pt-4 md:pt-0">
            <Image className="h-[85%]" width={350} height={350} src={'/assets/asset-verified.png'} alt="Cards" />
          </div>
        </div>
        <div className="grid-flow-col p-10 md:pt-45 "></div>
        <div className="md:col-span-1 md:pt-10">
          <div className="grid grid-flow-col justify-stretch 2xsm:grid-flow-row md:grid-flow-col">
            <div className="font-bold pt-2">Enter the Number of fractions</div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Number of fractions"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              <p className="pt-5 text-sm">Price per fraction: calculated automatically.</p>
              <p className="text-sm text-danger">Warning that the user will not be able to change it later.</p>
            </div>
          </div>
          <div className="pt-15 flex justify-center ">
            <button
              className="flex flex-row 2xsm:w-full md:w-1/2 h-10 pt-2 justify-center rounded-full bg-primary hover:bg-opacity-90 p-3 font-medium text-gray gap-3"
              onClick={() => router.push('token-created')}
            >
              <div>Confirm</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FractionalizeAsset;
