// src/components/Navbar.jsx

import React from 'react';
import NavbarIcons from './NavbarIcons'; // Import the NavbarIcons component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'; // Import the power icon

const Navbar = () => {
  return (
    <div className="bg-[rgb(120,156,156)] h-[98.5vh] w-8 md:w-10 lg:w-12 flex flex-col justify-start items-center mt-1 ml-0.5 mb-1 rounded-l-md shadow-md z-30 absolute top-0 left-0"> {/* Increased z-index to z-30 */}
      {/* Power icon at the top of the navbar */}
      <div className="mt-4 mb-2">
        <FontAwesomeIcon icon={faPowerOff} className="text-white h-4 w-4" /> {/* Icon changed to white */}
      </div>

      {/* Divider line */}
      <div className="w-full flex justify-center mb-0">
        <div className="border-t border-white w-8 mx-2 mt-4" /> {/* Divider changed to white */}
      </div>

      {/* Navbar icons */}
      <div className="mt-8">
        <NavbarIcons /> {/* NavbarIcons component */}
      </div>
    </div>
  );
};

export default Navbar;
