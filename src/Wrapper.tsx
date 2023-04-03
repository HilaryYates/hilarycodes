import React, { PropsWithChildren } from "react";

export const Wrapper: React.FC<{
  dark: boolean;
  showContent: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ dark, setDark, showContent }) => {
  return (
    <div
      className={`h-screen w-screen p-5 flex transition-all duration-500 ease-in-out ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className='relative ml-1'>
        <div className='absolute self-end flex gap-2 bottom-0 -rotate-90 origin-bottom-left'>
          <button
            className='font-roboto font-bold flex gap-1 items-center'
            onClick={() => setDark(false)}
          >
            {!dark ? (
              <div className='bg-black w-[5px] h-[5px]'></div>
            ) : (
              <div className='border border-white w-[5px] h-[5px]'></div>
            )}
            Light
          </button>
          <button
            className='font-roboto font-bold flex gap-1 items-center'
            onClick={() => setDark(true)}
          >
            {dark ? (
              <div className='bg-black w-[5px] h-[5px]'></div>
            ) : (
              <div className='border border-white w-[5px] h-[5px]'></div>
            )}
            Dark
          </button>
        </div>
        <div className='border-black dark:border-white border-[.9px] flex-grow flex flex-col'>
          <div className='m-2'>
            <h1 className='body-font font-roboto text-[50px]'>Hilary Yates </h1>
            <h2 className='font-thin text-[16px]'>Web Developer</h2>
          </div>
          <div className='flex items-start flex-col m-[7px]'>
            <div className='bg-black w-[5px] h-[5px] rounded mb-2'></div>
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
      </div>
      {/* <div
        className={`flex dark:text-white ease-in-out duration-500 transition-all p-5 pl-0 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className='relative '>
          <div className='absolute self-end bottom-0 -rotate-90 origin-bottom-left'>
            <button
              className='font-roboto font-bold'
              onClick={() => setDark(false)}
            >
              Light
            </button>
            <button
              className='font-roboto font-bold'
              onClick={() => setDark(true)}
            >
              Dark
            </button>
          </div>
        </div>
        <div className='border-black dark:border-white border-[.9px]  flex flex-col flex-grow'>
          <div className='m-2'>
            <h1 className='body-font font-semibold font-roboto text-[50px]'>
              Hilary Yates
            </h1>
            <h2 className='font-thin text-[16px]'>Web Developer</h2>
          </div>
          <div className='flex items-start flex-col m-[7px]'>
            <div className='bg-black w-[5px] h-[5px] rounded mb-2'></div>

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
      </div> */}
    </div>
  );
};
