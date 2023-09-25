import type { NextPage } from "next";

const Placeholder: NextPage = () => {
  return (
    <div className="rounded-[10px] bg-whitesmoke flex flex-row items-center justify-start p-3.5 box-border text-left text-sm text-darkgray font-inter">
      <div className="relative leading-[100%]">Input</div>
      <input type="text" className="" />
    </div>
  );
};

export default Placeholder;
