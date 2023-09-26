import type { NextPage } from 'next';
import { FaCoins, FaWallet, FaShieldVirus, FaExchangeAlt, FaChartBar } from 'react-icons/fa';

const Sidebar: NextPage = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-slateblue-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.1)] w-72 h-[903px] flex flex-col items-start justify-between p-5 box-border text-5xl text-white font-sora">
      <div className="self-stretch flex flex-col items-start justify-start gap-[73px]">
        <div className="self-stretch flex flex-row items-center justify-start p-2 gap-[12px]">
          <img className="relative w-[28.16px] h-8 object-cover" alt="" src="assets/login/metaquity-logo.png" />
          <h2 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit">Metaquity</h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base font-inter">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch rounded flex flex-row items-center justify-center p-3 gap-[16px]">
              <FaCoins />
              <div className="flex-1 relative leading-[20px] font-medium">My assets</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch rounded flex flex-row items-center justify-center p-3 gap-[16px]">
              <FaWallet />
              <div className="flex-1 relative leading-[20px] font-medium">Wallet</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch rounded flex flex-row items-center justify-center p-3 gap-[16px]">
              <FaShieldVirus />
              <div className="flex-1 relative leading-[20px] font-medium">Licenses</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch rounded flex flex-row items-center justify-center p-3 gap-[16px]">
              <FaExchangeAlt />
              <div className="flex-1 relative leading-[20px] font-medium">Transaction</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch rounded flex flex-row items-center justify-center p-3 gap-[16px]">
              <FaChartBar />
              <div className="flex-1 relative leading-[20px] font-medium">Chat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
