import React from 'react';

const BottomSection: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-50 text-gray-400 p-2 flex justify-start items-center z-50 backdrop-blur-xl">
      <img src="/imgs/delivery.png" alt="shipping logo" className="w-8 h-8 mr-2" />
      <span className="text-sm">FloodSight: Delivered by the CEDDI Lab @ CSUF</span>
    </div>
  );
};

export default BottomSection;
