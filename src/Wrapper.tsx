import React, { PropsWithChildren } from "react";

export const Wrapper: React.FC<{
  showContent: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setDark, showContent }) => {
  return (
    <div>
      <div
        className={`flex flex-col dark:text-white ease-in-out duration-500 transition-all ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className='border-black dark:border-white border-[.9px] m-5 flex flex-col'>
          <div className='m-2'>
            <h1 className='body-font font-semibold font-roboto text-[50px]'>
              Hilary Yates
            </h1>
            <h2 className='font-thin text-[16px]'>Web Developer</h2>
          </div>
          <div className='flex items-start flex-col m-[7px]'>
            <div className='bg-black w-[5px] h-[5px] rounded mb-2'></div>
            <button className='pb-2 font-semibold text-[14px] hover:text-stone-500'>
              Home
            </button>
            <button className='pb-2 font-semibold text-[14px] hover:text-stone-500'>
              Projects
            </button>
            <button className='pb-2 font-semibold text-[14px] hover:text-stone-500'>
              Info
            </button>
            <button className='pb-2 font-semibold text-[14px] hover:text-stone-500'>
              Contact
            </button>
          </div>
        </div>

        <div className='bg-black w-[7px] h-[7px]'></div>
        <button
          className='font-roboto font-bold'
          onClick={() => setDark(false)}
        >
          Light
        </button>
        <button className='font-roboto font-bold' onClick={() => setDark(true)}>
          Dark
        </button>
      </div>
    </div>
  );
};
