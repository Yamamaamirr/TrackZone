// CardsComponent.jsx
import React, { useState } from 'react';
import DescriptionComponent from './DescriptionComponent'; // Import the DescriptionComponent
import { FaPlayCircle, FaPauseCircle, FaLocationArrow } from 'react-icons/fa'; // Import icons for operational, stopped, and GPS request

const CardsComponent = ({ title, description, vehicleType, status }) => {
  // State to manage the button's active/inactive status
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the active state
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  // Function to return the appropriate icon based on vehicle type
  const renderIcon = () => {
    let iconPath = '';

    switch (vehicleType) {
      case 'Bulldozer':
        iconPath = '/bulldozer.svg'; // Path to bulldozer SVG in public folder
        break;
      case 'Excavator':
        iconPath = '/excavator.svg'; // Path to excavator SVG in public folder
        break;
      case 'Loader':
        iconPath = '/loader.svg'; // Path to loader SVG in public folder
        break;
      default:
        return null; // Fallback if no match is found
    }

    return (
      <div className="border border-dark-gray rounded-md p-0.5 ml-1"> {/* Square border around the icon */}
        <img src={iconPath} alt={`${vehicleType} Icon`} className="w-5 h-5" /> {/* Icon size */}
      </div>
    );
  };

  // Function to render status icon based on equipment status
  const renderStatusIcon = () => {
    if (status === 'Active') {
      return <FaPlayCircle className="text-green-500 w-5 h-5" title="Active" />; // Active icon size
    } else if (status === 'Stopped') {
      return <FaPauseCircle className="text-red-500 w-5 h-5" title="Stopped" />; // Stopped icon size increased to match
    }
    return null; // Return null if status does not match
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-2 w-full h-36 relative">
      {/* Flex container for button, icon, title, and status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Circular button with reduced left margin */}
          <button 
            onClick={handleToggle} 
            className={`w-5 h-5 rounded-full flex items-center justify-center transition duration-300 ${isActive ? 'bg-gray-300' : 'bg-gray-300'}`}
          >
            <span className={`w-3 h-3 rounded-full transition duration-300 ${isActive ? 'bg-blue-400' : 'bg-gray-300'}`}></span>
          </button>

          {/* Vehicle type icon next to the toggle button */}
          {renderIcon()}

          {/* Equipment name next to the icon with reduced left margin */}
          <span className="ml-1 text-gray-800 text-[10px] font-semibold">
            {title}
          </span>
        </div>

        {/* Render the GPS request icon and status icon on the right side */}
        <div className="flex items-center ml-2">
          <FaLocationArrow className="text-blue-500 w-4 h-4 mr-2" title="GPS Request" /> {/* Add right margin for spacing */}
          {renderStatusIcon()}
        </div>
      </div>

      {/* Render the DescriptionComponent below the title */}
      <DescriptionComponent description={description} />
    </div>
  );
};

export default CardsComponent;
