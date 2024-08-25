// components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="w-full mt-2">
      <div className="relative w-full h-1 bg-gray-200 rounded-full">
        <div
          className="absolute bottom-[-2rem] text-sm text-[#96BB7C]"
          style={{ left: `${percentage}%`, transform: 'translateX(-50%)' }}
        >
          {percentage}%
        </div>
        <div
          className="h-1 rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
        <div
          className="absolute top-[-0.5rem] h-4 w-4 rounded-full"
          style={{
            left: `${percentage}%`,
            transform: 'translateX(-50%)',
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
