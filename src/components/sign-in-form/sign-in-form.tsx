import type { NextPage } from 'next';
import { Connect } from '@/components/wallet-connect/connect';

const SignInForm: NextPage = () => {
  return (
    <div className="">
      <form className="absolute top-[calc(50%_-_179px)] left-[calc(50%_-_205px)] flex flex-col items-center justify-start gap-[12px] p-5">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-6">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative text-base font-semibold font-inter text-gray-coolgray800 text-center">
              Sign in with Web3auth
            </div>
            <div className="relative text-sm leading-[24px] font-inter text-gray-coolgray500 text-center">
              Login by Your Secure Account
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <div className="flex-1 ">
            <Connect />
          </div>
        </div>

        <div className="relative text-sm leading-[26px] font-inter text-left">
          <span className="text-gray-coolgray500">{`Questions? Email us at `}</span>
          <span className="text-primery100">support@metaquity.com</span>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
