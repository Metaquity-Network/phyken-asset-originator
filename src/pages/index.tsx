import RootLayout from './layout';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <RootLayout>
        <div>
          <section className="flex flex-col items-start justify-start text-left text-[64px] text-gray-300 font-inter">
            <div className="flex flex-col items-start justify-start gap-[51px]">
              <div className="flex flex-row items-center justify-start gap-[216px]">
                <h1 className="m-0 relative text-inherit leading-[76.5px] font-normal font-inherit">
                  Welcome Back, Saloni
                </h1>
                <div className="rounded-[52px] bg-slateblue-100 h-10 flex flex-row items-center justify-center py-2 px-6 box-border gap-[8px] text-base text-white">
                  <div className="relative tracking-[-0.05em] leading-[100%] font-medium">Upload Asset</div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative bg-white box-border w-[1122px] h-[420px] text-left text-5xl text-cornflowerblue font-gotham border-t-[1px] border-solid border-whitesmoke-200">
            <div className="absolute h-[8.57%] w-[10.96%] top-[51.9%] right-[86.99%] bottom-[39.52%] left-[2.05%] rounded-3xs shadow-[0px_-1px_0px_#c9cfda_inset] overflow-hidden flex flex-col items-start justify-start py-1.5 px-3 box-border gap-[4px]">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[24px]" />
                <img className="relative w-6 h-6 hidden" alt="" src="/counter.svg" />
              </div>
              <div className="hidden flex-row items-start justify-start gap-[8px] text-[15px]">
                <div className="relative tracking-[0.25px] leading-[20px] hidden">Search</div>
                <img className="relative w-6 h-6 overflow-hidden shrink-0 hidden" alt="" src="/cancel.svg" />
              </div>
            </div>
            <div className="absolute top-[36px] left-[22px] flex flex-col items-start justify-start gap-[20px] text-gray-300 font-inter">
              <div className="flex flex-row items-start justify-start gap-[864px]">
                <h2 className="m-0 relative text-inherit leading-[36px] font-semibold font-inherit">Assets</h2>
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <div className="rounded-21xl bg-whitesmoke-100 w-10 h-10 flex flex-row items-center justify-center py-2 px-4 box-border">
                    <FaAngleLeft />
                  </div>
                  <div className="rounded-21xl bg-whitesmoke-100 w-10 h-10 flex flex-row items-center justify-center py-2 px-4 box-border">
                    <FaAngleRight />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-base">
                <div className="rounded-[30px] w-[1056px] h-[58px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-1.5 px-0 box-border gap-[141px]">
                  <div className="rounded-3xs w-[131px] flex flex-row items-center justify-center">
                    <div className="relative leading-[24px] font-semibold">Asset ID</div>
                  </div>
                  <div className="w-[45px] flex flex-row items-center justify-start">
                    <div className="relative leading-[24px] font-semibold">Name</div>
                  </div>
                  <div className="w-20 flex flex-row items-center justify-start">
                    <div className="relative leading-[24px] font-semibold">Category</div>
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative leading-[24px] font-semibold">Price</div>
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative leading-[24px] font-semibold">NFT</div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-sm">
                  <div className="relative box-border w-[1056px] h-[58px] border-b-[1px] border-solid border-gainsboro">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs w-[237px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[39px] box-border">
                      <div className="relative leading-[24px]">#123456</div>
                    </div>
                    <div className="absolute top-[0px] left-[237px] rounded-3xs w-[190px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[38px] box-border">
                      <div className="relative leading-[24px]">Lorem</div>
                    </div>
                    <div className="absolute top-[0px] left-[427px] rounded-3xs w-[229px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[34px] box-border">
                      <div className="relative leading-[24px]">Crypto</div>
                    </div>
                    <div className="absolute top-[0px] left-[656px] rounded-3xs w-[182px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[25px] box-border">
                      <div className="relative leading-[24px]">$500</div>
                    </div>
                    <div className="absolute top-[0px] left-[838px] rounded-3xs w-[218px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[21px] box-border">
                      <div className="relative leading-[24px]">NFT</div>
                    </div>
                  </div>
                  <div className="relative box-border w-[1056px] h-[58px] mt-[-6px] border-b-[1px] border-solid border-gainsboro">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs w-[237px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[39px] box-border">
                      <div className="relative leading-[24px]">#123456</div>
                    </div>
                    <div className="absolute top-[0px] left-[237px] rounded-3xs w-[190px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[38px] box-border">
                      <div className="relative leading-[24px]">Lorem</div>
                    </div>
                    <div className="absolute top-[0px] left-[427px] rounded-3xs w-[229px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[34px] box-border">
                      <div className="relative leading-[24px]">Crypto</div>
                    </div>
                    <div className="absolute top-[0px] left-[656px] rounded-3xs w-[182px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[25px] box-border">
                      <div className="relative leading-[24px]">$500</div>
                    </div>
                    <div className="absolute top-[0px] left-[838px] rounded-3xs w-[218px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[21px] box-border">
                      <div className="relative leading-[24px]">NFT</div>
                    </div>
                  </div>
                  <div className="relative box-border w-[1056px] h-[58px] mt-[-6px] border-b-[1px] border-solid border-gainsboro">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs w-[237px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[39px] box-border">
                      <div className="relative leading-[24px]">#123456</div>
                    </div>
                    <div className="absolute top-[0px] left-[237px] rounded-3xs w-[190px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[38px] box-border">
                      <div className="relative leading-[24px]">Lorem</div>
                    </div>
                    <div className="absolute top-[0px] left-[427px] rounded-3xs w-[229px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[34px] box-border">
                      <div className="relative leading-[24px]">Crypto</div>
                    </div>
                    <div className="absolute top-[0px] left-[656px] rounded-3xs w-[182px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[25px] box-border">
                      <div className="relative leading-[24px]">$500</div>
                    </div>
                    <div className="absolute top-[0px] left-[838px] rounded-3xs w-[218px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[21px] box-border">
                      <div className="relative leading-[24px]">NFT</div>
                    </div>
                  </div>
                  <div className="relative box-border w-[1056px] h-[58px] mt-[-6px] border-b-[1px] border-solid border-gainsboro">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs w-[237px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[39px] box-border">
                      <div className="relative leading-[24px]">#123456</div>
                    </div>
                    <div className="absolute top-[0px] left-[237px] rounded-3xs w-[190px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[38px] box-border">
                      <div className="relative leading-[24px]">Lorem</div>
                    </div>
                    <div className="absolute top-[0px] left-[427px] rounded-3xs w-[229px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[34px] box-border">
                      <div className="relative leading-[24px]">Crypto</div>
                    </div>
                    <div className="absolute top-[0px] left-[656px] rounded-3xs w-[182px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[25px] box-border">
                      <div className="relative leading-[24px]">$500</div>
                    </div>
                    <div className="absolute top-[0px] left-[838px] rounded-3xs w-[218px] h-[58px] flex flex-row items-center justify-start py-0 pr-0 pl-[21px] box-border">
                      <div className="relative leading-[24px]">NFT</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </RootLayout>
    </>
  );
}
