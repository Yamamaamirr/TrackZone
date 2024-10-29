import React, { useState } from 'react';
import CardsComponent from './CardsComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const StatusComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const equipmentData = [
    { equipmentName: '1504 ECR50', address: '123 Con', vehicleType: 'Excavator', timestamp: '2024-10-23T12:00:00Z', status: 'Active' },
    { equipmentName: 'BD150 Bul', address: '456 Heavy Equipment Rd, Townsville', vehicleType: 'Bulldozer', timestamp: '2024-10-23T12:05:00Z', status: 'Active' },
    { equipmentName: 'L90H Loader', address: '789 Dumping Ave, Villagetown', vehicleType: 'Loader', timestamp: '2024-10-23T12:10:00Z', status: 'Stopped' },
  ];

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 250);
  };

  if (!isOpen) {
    return (
      <div className="flex items-center fixed top-0 left-8 md:left-12 z-10 h-[98.5vh] justify-center">
        <button 
          onClick={() => setIsOpen(true)} 
          className="p-2.5 rounded-r-md bg-white text-[rgb(120,156,156)] border border-[rgb(120,156,156)] shadow-md flex items-center"
        >
          <FontAwesomeIcon icon={faAngleRight} className="text-lg md:text-xl ml-1" />
        </button>
      </div>
    );
  }

  return (
    <div 
      className={`bg-white bg-opacity-90 h-[98.5vh] w-[55vw] sm:w-52 md:w-64 lg:w-72 xl:w-80 flex flex-col justify-start items-center mt-1 ml-0 mb-1 rounded-r-md z-40 md:z-10 absolute top-0 left-8 md:left-10 lg:left-12 shadow-[3px_0_5px_-1px_rgba(0,0,0,0.2)] 
      ${isAnimating ? 'transition-opacity duration-300 opacity-0' : 'transition-opacity duration-300 opacity-100'}`}
    >
      <img 
        src="src/assets/images/TrackZone_Logo.webp"
        alt="TrackZone Logo" 
        className="w-20 h-auto mt-4 mb-2 -ml-4 sm:w-24 md:w-28 lg:w-28" 
      />
      <div className="w-20 sm:w-24 md:w-28 h-0.5 bg-[rgb(120,156,156)] mt-1 mb-2 -ml-2" />
      
      <div 
        onClick={handleClose} 
        className="absolute top-4 right-4 w-5 h-5 bg-[rgb(120,156,156)] flex items-center justify-center rounded cursor-pointer"
        title="Close Status"
      >
        <FontAwesomeIcon icon={faTimes} className="text-white text-xs" />
      </div>

      <div className="flex flex-col w-full px-2 overflow-y-auto h-full">
        <div className="flex-1 overflow-y-auto">
          {equipmentData.map((equipment, index) => (
            <CardsComponent 
              key={index} 
              title={equipment.equipmentName} 
              description={`${equipment.address}\nLast Update: ${new Date(equipment.timestamp).toLocaleString()}\nStatus: ${equipment.status}`} 
              vehicleType={equipment.vehicleType}
              status={equipment.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusComponent;
