'use client';
import { NextPage } from 'next';
import { AdminLayout } from '../layout';
import { AssetList } from '../types/asset';
import { useRouter } from 'next/router';
import { FaPlus, FaQuestionCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../reducers/store';
import DashboardCardTwo from '../components/cards/dashboardCardTwo';
import axios from 'axios';
import { useWeb3Auth } from '@/src/hooks/useWeb3Auth';
import PolkadotRPC from '@/src/context/wallet/polkadotRPC';
import { ToastContainer } from 'react-toastify';
import { useToast } from '../hooks/useToast';

const Home: NextPage = () => {
  const router = useRouter();
  const [assetUploadedList, setAssetUploadedList] = useState<AssetList[]>([]);
  const [assetPendingList, setAssetPendingList] = useState<AssetList[]>([]);
  const userDetails = useAppSelector((state) => state.userDetails.value);

  useEffect(() => {
    getAssetList();
  }, []);

  const getAssetList = async () => {
    const res = await axios.get('/api/assets/getAssets');
    if (res.status === 200) {
      const assetList = res.data;
      const assetUploadedList = assetList.filter((asset: { assetStatus: string }) =>
        ['ACTIVE'].includes(asset.assetStatus),
      );
      setAssetUploadedList(assetUploadedList);
      const assetPendingList = assetList.filter((asset: { assetStatus: string }) =>
        ['PENDING'].includes(asset.assetStatus),
      );
      setAssetPendingList(assetPendingList);
    } else {
      setAssetUploadedList([]);
    }
  };

  const User = () => {
    if (userDetails) {
      return <p>Welcome Back, {userDetails.username.split(' ')[0]}</p>;
      // return <p>Welcome Back, Tom</p>;
    }
    return null;
  };

  return (
    <AdminLayout>
      <div className="h-[700px]">
        <div className="grid grid-cols-1 w-full gap-2 md:gap-6 pb-8">
          <div className="2xsm:flex-row sm:flex items-center ">
            <div className="flex-grow pt-3">
              <div className="text-zinc-900 2xsm:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">
                <User />
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
          <DashboardCardTwo imageSrc="" name="Number of assets uploaded" count={assetUploadedList.length} url="" />
          <DashboardCardTwo imageSrc="" name="Asset pending verification" count={assetPendingList.length} url="" />
        </div>
      </div>
    </AdminLayout>
  );
};
export default Home;
