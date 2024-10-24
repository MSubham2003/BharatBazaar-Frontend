import React from 'react'

const BackToTop = () => {
  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' //  for smoothly scrolling
    });
  };

  return (
        <div onClick={scrollToTop} className="text-white text-center p-4 bg-slate-800 cursor-pointer hover:bg-slate-700">
          Back To Top
        </div>
  );
};

export default BackToTop;