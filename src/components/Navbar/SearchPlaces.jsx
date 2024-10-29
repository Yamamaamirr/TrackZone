// src/components/SearchPlaces/SearchPlaces.js
import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

const SearchPlaces = () => {
  return (
    <div
      className="relative flex items-center w-full mb-8" // Full width and bottom margin
      style={{ height: '35px' }} // Set the height in pixels
    >
      <FaSearch className="absolute left-2 text-gray-400 text-xs" /> {/* Reduced icon size */}
      <input
        type="text"
        placeholder="Search Places..."
        className="pl-8 pr-3 py-2 w-full h-full rounded-md border border-gray-300 shadow-md focus:outline-none focus:ring-0 focus:border-gray-300 text-xs leading-5" // Full width input
      />
    </div>
  );
};

export default SearchPlaces;
