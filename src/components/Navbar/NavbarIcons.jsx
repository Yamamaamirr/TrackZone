// src/components/NavbarIcons.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faMap, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavbarIcons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <FontAwesomeIcon
        icon={faHome}
        className="text-white text-base mb-8 cursor-pointer hover:text-gray-300"
        onClick={() => navigate('/')} // Navigate to home (Map page)
      />
      <FontAwesomeIcon
        icon={faClipboardList}
        className="text-white text-base mb-8 cursor-pointer hover:text-gray-300"
        onClick={() => navigate('/equipment-entry')} // Navigate to Equipment Entry
      />
      <FontAwesomeIcon
        icon={faMap}
        className="text-white text-base mb-8 cursor-pointer hover:text-gray-300"
        onClick={() => navigate('/')} // Navigate to home (Map page)
      />
      <FontAwesomeIcon
        icon={faChartLine}
        className="text-white text-base cursor-pointer hover:text-gray-300"
        onClick={() => navigate('/')} // Adjust route if another page is needed
      />
    </div>
  );
};

export default NavbarIcons;
