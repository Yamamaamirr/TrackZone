// src/components/EquipmentEntry.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'; // Import the desired Font Awesome icon

const InputField = ({ label }) => {
  return (
    <div className="flex items-center mb-4 w-full"> {/* Updated margin for consistent spacing */}
      <label className="text-gray-700 text-sm w-1/3"> {/* Label font size */}
        {label}
      </label>
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2 w-2/3 text-sm" // Increased padding for input field
      />
    </div>
  );
};

// Dropdown Field Component
const DropdownField = ({ label, options }) => {
  return (
    <div className="flex items-center mb-4 w-full"> {/* Flex container for label and dropdown */}
      <label className="text-gray-700 text-sm w-1/3"> {/* Label font size */}
        {label}
      </label>
      <select className="border border-gray-300 rounded-md p-2 w-2/3 text-sm"> {/* Increased padding for dropdown */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const EntryDetails = () => {
  // Example options for dropdowns
  const vehicleTypes = ["Car", "Truck", "Van", "Motorcycle"];
  const fuelTypes = ["Gasoline", "Diesel", "Electric", "Hybrid"];
  const transmissionTypes = ["Automatic", "Manual", "CVT", "Semi-Automatic"];

  return (
    <div className="bg-white w-[85vw] max-w-4xl h-[80vh] flex flex-col justify-start rounded-md shadow-lg mb-8 border border-gray-300"> {/* Increased width and added max-width */}
      <div className="flex items-center p-4"> {/* Flex container for heading and logo */}
        <FontAwesomeIcon icon={faClipboardList} className="h-4 w-4 text-gray-700 mr-2" /> {/* Reduced icon size */}
        <h2 className="text-base font-medium text-gray-800 font-sans">Characteristics</h2> {/* Reduced font size and weight */}
        <img 
          src="src/assets/images/TrackZone_Logo.webp"
          alt="TrackZone Logo" 
          className="h-7 ml-auto" // Ensure the logo is on the right side
        />
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-300 my-0" /> {/* Divider line remains the same */}

      {/* Flex container for input fields on the left and right */}
      <div className="flex flex-row justify-between p-4 space-x-4"> {/* Added space between columns */}
        {/* Left Column */}
        <div className="flex flex-col w-1/2 space-y-4"> {/* Space between input fields */}
          <InputField label="Immatriculation" />
          <InputField label="Vehicle Name" />
          <DropdownField label="Vehicle Type" options={vehicleTypes} />
          <DropdownField label="Tracking Model" options={transmissionTypes} />
          <DropdownField label="Fuel" options={fuelTypes} />
          <InputField label="Consumption (L/100 km)" />
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-1/2 space-y-4"> {/* Space between input fields */}
          <InputField label="N° VIN" />
          <InputField label="Group" />
          <DropdownField label="Billing Zone" options={vehicleTypes} />
          <DropdownField label="Fuel Tank Capacity" options={transmissionTypes} />
          <DropdownField label="CO₂ Emissions (g/100 km)" options={fuelTypes} />
        </div>
      </div>

      {/* You can add more content here later */}
    </div>
  );
};

const EquipmentEntry = () => {
  return (
    <div className="p-4 flex items-center justify-center h-full">
      <EntryDetails />
    </div>
  );
};

export default EquipmentEntry;
