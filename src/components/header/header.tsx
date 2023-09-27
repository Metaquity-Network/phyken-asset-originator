import type { NextPage } from 'next';
import { Input } from '@nextui-org/react';
import { SearchIcon } from '@/components/icons/searchIcon';

const Header: NextPage = () => {
  return (
    <div className="absolute top-[0px] right-[0px] bg-white box-border w-[80%] h-[76px] overflow-hidden border-b-[1px] border-solid border-whitesmoke-200">
      <div className="absolute top-[6px] flex flex-row items-center w-[100%] justify-between">
        <div className="items-start">
          <div className="rounded-xl bg-white box-border w-[537px]  h-10 overflow-hidden shrink-0 flex flex-row items-center justify-start p-3 border-[1px] border-solid border-gainsboro">
            <div className="group flex flex-col w-full mx-[-11px]">
              <Input
                isClearable
                radius="lg"
                classNames={{
                  label: 'text-black/50 dark:text-white/90',
                  input: [
                    'bg-transparent',
                    'text-black/90 dark:text-white/90',
                    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                  ],
                  innerWrapper: 'bg-transparent',
                  inputWrapper: [
                    'shadow-xl',
                    'bg-default-200/50',
                    'dark:bg-default/60',
                    'backdrop-blur-xl',
                    'backdrop-saturate-200',
                    'hover:bg-default-200/70',
                    'dark:hover:bg-default/70',
                    'group-data-[focused=true]:bg-default-200/50',
                    'dark:group-data-[focused=true]:bg-default-60',
                    '!cursor-text',
                  ],
                }}
                placeholder="Type to search..."
                startContent={
                  <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
          </div>
        </div>
        <div className=" gap-[23px] items-end">
          <div className="w-[248px] flex flex-row items-center justify-center p-3 box-border gap-[8px]">
            <div className="relative w-10 h-10 overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6981xl bg-white box-border overflow-hidden border-[1px] border-solid border-whitesmoke-200"></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch relative leading-[16px] text-gray-900">Michael Smith</div>
              <div className="relative leading-[14px] text-gray-400">michaelsmith12@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
