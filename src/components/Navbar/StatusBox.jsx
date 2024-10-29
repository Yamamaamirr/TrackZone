// src/components/StatusBox/StatusBox.js
import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa'; // Importing the filter icon

const StatusBox = () => {
  const [isActive, setIsActive] = useState(false); // State to manage the active state

  const handleClick = () => {
    setIsActive(!isActive); // Toggle active state on click
  };

  return (
    <div
      className={`flex items-center justify-center cursor-pointer w-20 z-10
        ${isActive ? 'bg-[rgb(120,156,156)] shadow-lg' : 'bg-white bg-opacity-90 shadow-md'} // Shadow effect
      `}
      onClick={handleClick} // Handle click event
      style={{ height: '33px', borderRadius: '0.25rem', padding: '0 0.5rem' }} // Set height in pixels
    >
      <FaFilter
        className={`text-[0.7rem] ${isActive ? 'text-white' : 'text-black'}`} // Decreased icon size
      />
      <span className={`text-xs ml-1 ${isActive ? 'text-white' : 'text-black'}`}>
        Filter
      </span>
    </div>
  );
};

export default StatusBox;
