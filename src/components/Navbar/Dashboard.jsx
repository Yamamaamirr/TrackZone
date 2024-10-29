import React, { useState } from 'react';
import StatusComponent from './StatusComponent'; // Import StatusComponent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; // Import the icon for opening

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage visibility

  const toggleStatusComponent = () => {
    setIsOpen(prev => !prev); // Toggle the open/close state
  };

  return (
    <div className="relative">
      {/* Navbar component */}
      <Navbar />
      
      {/* Render StatusComponent based on the isOpen state */}
      {isOpen && <StatusComponent onClose={toggleStatusComponent} />}

      {/* Button to open/close the StatusComponent */}
      {!isOpen && (
        <button 
          onClick={toggleStatusComponent} 
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-md shadow-md"
          title="Open Status"
        >
          <FontAwesomeIcon icon={faAngleRight} className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default Dashboard;
