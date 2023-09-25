"use client";

import type { NextPage } from "next";
import SignInForm from "../components/sign-in-form/sign-in-form";

const LoginFirstPage: NextPage = () => {
  return (
    <div className="bg-colorswhite w-full text-left text-[48px] text-colorswhite font-sora grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div className="absolute h-full w-[50%] top-[0%] right-[50%] bottom-[0%] left-[0%] bg-slateblue flex flex-row items-center justify-center p-3 box-border">
        <div className="self-stretch flex-1 relative bg-slateblue">
          <div className="absolute h-[34.58%] top-[6.09%] bottom-[59.32%] left-[calc(50%_-_318.79px)] w-[600px] flex flex-col items-start justify-start p-9 box-border gap-[24px]">
            <div className="flex flex-row items-center justify-start p-2 gap-[12px]">
              <img
                className="relative w-[78.95px] h-[90px] object-cover"
                alt=""
                src="login/metaquity-logo.png"
              />
              <h1 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit">
                MetaQuity
              </h1>
            </div>
            <h3 className="m-0 relative text-[20px] leading-[34px] font-normal font-inter flex items-center w-[422px]">
              Lorem ipsum dolor sit amet consectetur. Sed leo mauris elit enim
              semper diam tortor mi. Congue congue eget amet nulla et.
            </h3>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-[0px] left-[0px] w-[605px] h-[381px] overflow-hidden"
        alt=""
        src="login/login-bottom.png"
      />
      <div className="absolute left-[62%] w-[650px] h-[110%] overflow-hidden content-center">
        <SignInForm />
      </div>
    </div>
  );
};

export default LoginFirstPage;
