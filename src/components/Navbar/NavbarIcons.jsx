// src/components/Navbar/NavbarIcons.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faClipboardList, faMap, faChartLine, faEdit, faUser } from '@fortawesome/free-solid-svg-icons'; // Importing new icons
import { useNavigate } from 'react-router-dom';

const NavbarIcons = () => {
  const navigate = useNavigate();

  const buttonClasses =
    "text-white p-1.5 sm:p-2.5 lg:p-2 mb-5 sm:mb-6 lg:mb-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out";

  return (
    <div className="flex flex-col items-center">
      <button className={buttonClasses} onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faGlobe} className="text-sm sm:text-sm lg:text-base" />
      </button>
      <button className={buttonClasses} onClick={() => navigate('/equipment-entry')}>
        <FontAwesomeIcon icon={faClipboardList} className="text-sm sm:text-sm lg:text-base" />
      </button>
      {/* Update the third icon to navigate to /table */}

      <button className={buttonClasses}>
        <FontAwesomeIcon icon={faChartLine} className="text-sm sm:text-sm lg:text-base" />
      </button>

      {/* Divider Line */}
      <div className="border-t border-white w-8 my-4" /> {/* Added divider line with margin */}

      {/* Editing Icon Button */}
      <button className={buttonClasses} onClick={() => navigate('/table')}>
        <FontAwesomeIcon icon={faEdit} className="text-sm sm:text-sm lg:text-base" />
      </button>
      {/* User Name Icon Button */}
      <button className={buttonClasses} >
        <FontAwesomeIcon icon={faUser} className="text-sm sm:text-sm lg:text-base" />
      </button>
    </div>
  );
};

export default NavbarIcons;
