import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faMap, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavbarIcons = () => {
  const navigate = useNavigate();

  const buttonClasses =
    "text-white p-1.5 sm:p-2.5 lg:p-2 mb-5 sm:mb-6 lg:mb-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out";

  return (
    <div className="flex flex-col items-center">
      <button className={buttonClasses} onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faHome} className="text-sm sm:text-sm lg:text-base" />
      </button>
      <button className={buttonClasses} onClick={() => navigate('/equipment-entry')}>
        <FontAwesomeIcon icon={faClipboardList} className="text-sm sm:text-sm lg:text-base" />
      </button>
      <button className={buttonClasses} onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faMap} className="text-sm sm:text-sm lg:text-base" />
      </button>
      <button className={buttonClasses} onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faChartLine} className="text-sm sm:text-sm lg:text-base" />
      </button>
    </div>
  );
};

export default NavbarIcons;
