'use client';
import { NextPage } from 'next';
import { AdminLayout } from '../layout';
import { AssetList } from '../types/asset';
import { useRouter } from 'next/router';
import { FaPlus } from 'react-icons/fa';
import DashboardCardTwo from '../components/cards/dashboardCardTwo';
import { useEffect } from 'react';
import { useToast } from '../hooks/useToast';
import axios from 'axios';
const Home: NextPage = () => {
  const router = useRouter();
  const { showToast } = useToast();

  const assetList: AssetList[] = [];

  useEffect(() => {
    const getAssetList = async () => {
      const res = await axios.post('/api/assets/getAllAssets');
      if (res.status === 200) {
      } else {
      }
    };
    showToast('error', { type: 'success' });
    getAssetList();
  }, []);

  return (
    <AdminLayout>
      <div>
        <div className="grid grid-cols-1 w-full gap-2 md:gap-6 pb-8">
          <div className="2xsm:flex-row sm:flex items-center ">
            <div className="flex-grow pt-3">
              <div className="text-zinc-900 2xsm:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">
                Welcome Back, Saloni
              </div>
            </div>
            <div className="pt-3">
              <button
                className="flex flex-row w-full h-10 py-2 justify-center rounded-full bg-primary hover:bg-opacity-90 p-3 font-medium text-gray gap-3"
                onClick={() => router.push('upload-assets')}
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
          <div className="rounded-sm p-4 dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5 w-[95%]">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">Assets</h3>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="grid md:grid-cols-10 grid-cols-6 py-2 text-start md:text-left">
                <div className="col-span-2">
                  <p className="text-l px-4 font-bold">AssetID</p>
                </div>
                <div className="col-span-2">
                  <p className="text-l font-bold">Name</p>
                </div>
                <div className="col-span-2">
                  <p className="text-l  font-bold">Category</p>
                </div>
                <div className="md:col-span-2 hidden md:block">
                  <p className="text-l font-bold">Price</p>
                </div>
                <div className="md:col-span-2 hidden md:block">
                  <p className="text-l font-bold">NFT</p>
                </div>
              </div>
              {assetList.map((asset: AssetList, index: number) => {
                return (
                  <div key={index} className="grid md:grid-cols-10 grid-cols-6 py-2 text-start md:text-left">
                    <div className="col-span-2">
                      <p className="text-sm px-4">{asset.assetId}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm">{asset.name}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm">{asset.category}</p>
                    </div>
                    <div className="md:col-span-2 hidden md:block">
                      <p className="text-sm ">{asset.price}</p>
                    </div>
                    <div className="md:col-span-2 hidden md:block">
                      <p className="text-sm">{asset.nft}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default Home;
