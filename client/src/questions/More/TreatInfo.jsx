import React from 'react';

const TreatInfo = () => {
  return (
    <div className="relative">
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center">
            <span className="text-lg">Step 1</span>
          </div>
          <div className="h-1 w-16 bg-blue-500"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center">
            <span className="text-lg">Step 2</span>
          </div>
          <div className="h-1 w-16 bg-blue-500"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center">
            <span className="text-lg">Step 3</span>
          </div>
        </div>
      </div>
      {/* Connecting lines */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="h-full w-1 bg-blue-500 absolute top-12"></div>
        <div className="h-full w-1 bg-blue-500 absolute top-12"></div>
      </div>
    </div>
  );
};

export default TreatInfo;
