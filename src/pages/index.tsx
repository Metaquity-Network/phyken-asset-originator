import RootLayout from './layout';

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
                  <img className="relative w-5 h-5" alt="" src="/vuesaxbrokenadd.svg" />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-61xl">
                <div className="relative bg-lavender w-[359px] h-[205px] text-base">
                  <div className="absolute top-[25px] left-[23px] leading-[22px] font-semibold inline-block w-[159px]">
                    Trending Today
                  </div>
                  <div className="absolute top-[25px] left-[19px] w-[315px] h-[175px] text-center text-7xs text-slategray">
                    <div className="absolute top-[23.77px] left-[-6.22px] rounded-xl bg-white shadow-[0px_2px_6px_rgba(13,_10,_44,_0.08)] w-[274.64px] h-[141.27px] hidden" />
                    <div className="absolute top-[155px] left-[0px] w-[302px] h-5">
                      <div className="absolute top-[0px] left-[0px] tracking-[0.06em] leading-[16px] uppercase inline-block w-4 h-5">
                        JAN
                      </div>
                      <div className="absolute top-[0px] left-[25px] tracking-[0.06em] leading-[16px] uppercase inline-block w-[15px] h-5">
                        FEB
                      </div>
                      <div className="absolute top-[0px] left-[50px] tracking-[0.06em] leading-[16px] uppercase inline-block w-[18px] h-5">
                        MAR
                      </div>
                      <div className="absolute top-[0px] left-[77px] tracking-[0.06em] leading-[16px] uppercase inline-block w-4 h-5">
                        APR
                      </div>
                      <div className="absolute top-[0px] left-[103px] tracking-[0.06em] leading-[16px] uppercase inline-block w-[17px] h-5">
                        MAY
                      </div>
                      <div className="absolute top-[0px] left-[129px] tracking-[0.06em] leading-[16px] uppercase inline-block w-4 h-5">
                        JUN
                      </div>
                      <div className="absolute top-[0px] left-[155px] tracking-[0.06em] leading-[16px] uppercase inline-block w-[15px] h-5">
                        JUL
                      </div>
                      <div className="absolute top-[0px] left-[181px] tracking-[0.06em] leading-[16px] uppercase inline-block w-[17px] h-5">
                        AUG
                      </div>
                      <div className="absolute top-[0px] left-[207px] tracking-[0.06em] leading-[16px] uppercase inline-block w-[15px] h-5">
                        SEP
                      </div>
                      <div className="absolute top-[0px] left-[232px] tracking-[0.06em] leading-[16px] uppercase inline-block w-[18px] h-5">
                        OCT
                      </div>
                      <div className="absolute top-[0px] left-[259px] tracking-[0.06em] leading-[16px] uppercase inline-block w-[17px] h-5">
                        NOV
                      </div>
                      <div className="absolute top-[0px] left-[286px] tracking-[0.06em] leading-[16px] uppercase inline-block w-4 h-5">
                        DEC
                      </div>
                    </div>
                    <div className="absolute top-[45.26px] left-[305.17px] w-[9.83px] h-[119.07px] text-right">
                      <div className="absolute top-[96.95px] left-[2.82px] leading-[18px] inline-block w-[4.91px] h-[22.11px]">
                        0
                      </div>
                      <div className="absolute top-[77.56px] left-[1.23px] leading-[18px] inline-block w-[8.6px] h-[22.11px]">
                        1k
                      </div>
                      <div className="absolute top-[58.17px] left-[1.23px] leading-[18px] inline-block w-[8.6px] h-[22.11px]">
                        2k
                      </div>
                      <div className="absolute top-[38.78px] left-[0px] leading-[18px] inline-block w-[9.83px] h-[22.11px]">
                        3k
                      </div>
                      <div className="absolute top-[19.39px] left-[0px] leading-[18px] inline-block w-[9.83px] h-[22.11px]">
                        4k
                      </div>
                      <div className="absolute top-[0px] left-[1.23px] leading-[18px] inline-block w-[8.6px] h-[22.11px]">
                        5k
                      </div>
                    </div>
                    <img
                      className="absolute top-[58.69px] left-[2.2px] w-[241.85px] h-[81.62px]"
                      alt=""
                      src="/chart-lines.svg"
                    />
                    <img
                      className="absolute top-[65.77px] left-[2.54px] w-[297.81px] h-[81.45px]"
                      alt=""
                      src="/chart-flow.svg"
                    />
                    <div className="absolute top-[46px] left-[188px] w-[43.98px] h-[28.58px] text-3xs text-slateblue-200">
                      <div className="absolute top-[0px] left-[0px] leading-[18px] font-medium">$3,348</div>
                      <div className="absolute top-[12.58px] left-[0.98px] text-5xs leading-[16px] text-black1">
                        1,348 sales
                      </div>
                    </div>
                    <div className="absolute top-[0px] left-[255px] rounded-21xl box-border h-6 overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-[6px] text-left text-xs text-slateblue-100 border-[1px] border-solid border-slateblue-100">
                      <img
                        className="relative w-3.5 h-3.5 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon-left.svg"
                      />
                      <div className="relative leading-[16px]">Daily</div>
                      <img className="relative w-2.5 h-2.5" alt="" src="/vuesaxbrokenarrowdown.svg" />
                    </div>
                    <div className="absolute top-[32.18px] left-[2.2px] w-[102.81px] h-[38.75px] text-left text-lightslategray">
                      <div className="absolute top-[22.75px] left-[34.59px] w-[68.22px] h-4">
                        <div className="absolute top-[0px] left-[25.22px] leading-[16px] uppercase">VS LAST YEAR</div>
                        <b className="absolute top-[0px] left-[3.67px] text-5xs leading-[16px] text-limegreen">1.3%</b>
                        <img
                          className="absolute top-[0.63px] left-[0px] w-[2.88px] h-[2.88px]"
                          alt=""
                          src="/growth-indicator.svg"
                        />
                      </div>
                      <b className="absolute top-[4.47px] left-[0px] text-base leading-[48px] inline-block text-gray-200 w-[33.55px] h-[30.97px]">
                        $12.7k
                      </b>
                      <div className="absolute top-[0px] left-[0px] text-3xs leading-[20px]">Sales 2022</div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-ghostwhite-100 w-[359px] h-[205px] overflow-hidden shrink-0">
                  <div className="absolute top-[107px] left-[25px] leading-[100%]">15</div>
                  <div className="absolute top-[20px] left-[296px] rounded-xl bg-white w-10 h-10 flex flex-row items-center justify-center py-2 px-4 box-border">
                    <img className="relative w-[28.28px] h-[28.28px]" alt="" src="/vuesaxbrokenarrowright.svg" />
                  </div>
                  <div className="absolute top-[25px] left-[23px] text-base leading-[22px] font-semibold inline-block w-[159px]">
                    Number of assets uploaded
                  </div>
                  <img
                    className="absolute h-[94.23%] w-[41.63%] top-[33.41%] right-[5.76%] bottom-[-27.64%] left-[52.61%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group.svg"
                  />
                </div>
                <div className="relative bg-ghostwhite-200 w-[359px] h-[205px] overflow-hidden shrink-0">
                  <div className="absolute top-[107px] left-[25px] tracking-[-0.05em] leading-[100%]">09</div>
                  <div className="absolute top-[20px] left-[296px] rounded-xl bg-white w-10 h-10 flex flex-row items-center justify-center py-2 px-4 box-border">
                    <img className="relative w-[28.28px] h-[28.28px]" alt="" src="/vuesaxbrokenarrowright1.svg" />
                  </div>
                  <div className="absolute top-[25px] left-[23px] text-base leading-[22px] font-semibold inline-block w-[159px]">
                    Asset pending verification
                  </div>
                  <img
                    className="absolute h-[131.63%] w-[78.85%] top-[40.69%] right-[-19.52%] bottom-[-72.33%] left-[40.67%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-13.svg"
                  />
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
                    <img className="relative w-5 h-5" alt="" src="/vuesaxbrokensearchnormal1.svg" />
                  </div>
                  <div className="rounded-21xl bg-whitesmoke-100 w-10 h-10 flex flex-row items-center justify-center py-2 px-4 box-border">
                    <img className="relative w-5 h-5" alt="" src="/vuesaxbrokenfilter.svg" />
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
