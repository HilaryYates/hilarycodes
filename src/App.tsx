import { useEffect, useState } from "react";
import { Wrapper } from "./Wrapper";

const App = () => {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (loading === false) {
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }
  }, [loading]);
  return (
    <div className={dark ? "dark" : ""}>
      <div className='bg-beige dark:bg-black h-screen w-screen'>
        {showContent ? (
          <Wrapper showContent={showContent} setDark={setDark} />
        ) : (
          <div
            className={`h-screen w-screen bg-beige flex items-center justify-center dark:bg-black dark:text-white ${
              loading ? "" : "opacity-0"
            } ease-in-out duration-500 transition-all`}
          >
            <p className='text-2xl font-thin'>
              Hilary Yates
              <span className='font-thin text-gray-400'> Portfolio</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
