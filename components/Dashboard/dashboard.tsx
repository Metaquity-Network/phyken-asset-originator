'use client';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import DashboardCardTwo from '@/components/cards/dashboardCardTwo';
import DataTableOne from '../DataTables/DataTableOne';
import { useRouter } from 'next/navigation';
const Dashboard: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="grid grid-cols-1 w-full gap-2 md:gap-6 pb-8">
        <div className="flex items-center">
          <div className="flex-grow">
            <div className="text-zinc-900 2xsm:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">
              Welcome Back, Saloni
            </div>
          </div>
          <div>
            <button
              className="flex flex-row w-full h-10 py-2 justify-center rounded-full bg-primary hover:bg-opacity-90 p-3 font-medium text-gray gap-3"
              onClick={() => router.push('upload')}
            >
              <div>Upload Asset</div>
              <div className="w-5 h-5 pt-1 justify-center items-center flex">
                <FaPlus />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {/* <DashboardCardOne imageSrc="" name="Abhishek" count="10" url="" /> */}
        <DashboardCardTwo imageSrc="" name="Number of assets uploaded" count="15" url="" />
        <DashboardCardTwo imageSrc="" name="Asset pending verification" count="09" url="" />
      </div>
      <div className="pt-10">
        <DataTableOne />
      </div>
    </>
  );
};

export default Dashboard;
