const App = () => {
  return (
    <div className='h-screen w-screen bg-beige flex flex-col dark:bg-black '>
      <div className='border-black border-[1px] m-5 flex flex-col'>
        <div className='m-2'>
          <h1 className='body-font font-roboto text-[50px]'>Hilary Yates</h1>
          <h2 className='font-thin text-[16px]'>Web Developer</h2>
        </div>
        <div className='flex items-start flex-col m-[7px]'>
          <div className='bg-black w-[5px] h-[5px] rounded mb-2'></div>
          <button className='pb-2 font-semibold text-[14px] hover:text-stone-500'>Home</button>
          <button className='pb-2 font-semibold text-[14px] hover:text-stone-500'>Projects</button>
          <button className='pb-2 font-semibold text-[14px] hover:text-stone-500'>About</button>
          <button className='pb-2 font-semibold text-[14px] hover:text-stone-500'>Contact</button>
        </div>
      </div>
      <div className='bg-black w-[7px] h-[7px]'></div>
      <button className="font-roboto font-bold">Light</button>
      <button className="font-roboto font-bold">Dark</button>
    </div>
  );
};

export default App;
