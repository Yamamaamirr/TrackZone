// src/components/EquipmentEntry.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

// Dropdown Field Component
const DropdownField = ({ label, options }) => {
    return (
      <div className="mb-3 w-2/5 sm:w-[40%] mt-2 ml-4">
        <label className="text-gray-700 text-[10px] sm:text-xs block mb-2 ml-1">
          {label}
        </label>
        <select className="border border-gray-300 rounded-md p-2 w-full text-[10px] sm:text-xs ml-1">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
};

// Input Field Component
const InputField = ({ label }) => {
    return (
      <div className="mb-3 w-2/5 sm:w-[40%] mt-2 ml-4">
        <label className="block text-gray-700 text-[10px] sm:text-xs mb-2 ml-1">
          {label}
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full text-[10px] sm:text-xs ml-1"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      </div>
    );
};

// Entry Details Component for the Characteristics Tab
const EntryDetails = () => {
    const vehicleTypes = ["Car", "Truck", "Van", "Motorcycle"];
    const fuelTypes = ["Gasoline", "Diesel", "Electric", "Hybrid"];
    const transmissionTypes = ["Automatic", "Manual", "CVT", "Semi-Automatic"];

    return (
        <div className="relative bg-white w-full max-w-6xl h-[100vh] flex flex-col justify-start rounded-md shadow-lg mb-8 md:w-[70%]">
            <div className="flex items-center p-4">
                <h2 className="text-xs sm:text-sm font-medium text-gray-800 font-sans mr-auto">
                    Characteristics
                </h2>
                <img
                    src="src/assets/images/TrackZone_Logo.webp"
                    alt="TrackZone Logo"
                    className="h-5 sm:h-7"
                />
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-300 my-1" />

            {/* Input and Dropdown Fields Below Divider */}
            <div className="flex gap-2 md:gap-20">
                <InputField label="Equipment Name" />
                <InputField label="N° VIN" />
            </div>

            <div className="flex gap-2 md:gap-20">
                <InputField label="Vehicle Name" />
                <DropdownField label="Model" options={vehicleTypes} />
            </div>

            <div className="flex gap-2 md:gap-20">
                <DropdownField label="Vehicle Type" options={vehicleTypes} />
                <DropdownField label="Billing Zone" options={vehicleTypes} />
            </div>

            <div className="flex gap-2 md:gap-20">
                <DropdownField label="Tracking Model" options={transmissionTypes} />
                <InputField label="Fuel Tank Capacity" />
            </div>

            <div className="flex gap-2 md:gap-20">
                <DropdownField label="Fuel" options={fuelTypes} />
                <InputField label="Fuel Tank Capacity" />
            </div>

            <div className="flex gap-2 md:gap-20">
                <InputField label="Consumption (L/100km)" />
                <InputField label="CO₂ Emissions (g/100km)" />
            </div>

            {/* Submit Button at Bottom Right */}
            <div className="absolute bottom-4 right-4">
                <div className="w-24 mt-2"> {/* Fixed width container */}
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
const CountDetails = () => {
    const [debutDate, setDebutDate] = useState(""); // State for the debut date
    const [status, setStatus] = useState("Active"); // State for the dropdown
    const [isInputVisible, setInputVisible] = useState(false); // State to manage input visibility
    const [isMobile, setIsMobile] = useState(false); // State to manage screen size

    const handleDateChange = (event) => {
        setDebutDate(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const toggleInputVisibility = () => {
        setInputVisible(!isInputVisible);
    };

    // Effect to set default visibility based on window size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // Example breakpoint for desktop
                setInputVisible(true); // Show inputs by default on desktop
                setIsMobile(false);
            } else {
                setInputVisible(false); // Hide inputs on mobile
                setIsMobile(true);
            }
        };

        handleResize(); // Check size on mount
        window.addEventListener('resize', handleResize); // Update on resize

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up listener on unmount
        };
    }, []);

    return (
        <div className="bg-white w-full max-w-6xl h-[100vh] flex flex-col justify-start rounded-md shadow-lg mb-8 md:w-[70%]">
            <div className="flex items-center p-4">
                <h2 className="text-xs sm:text-sm font-medium text-gray-800 font-sans mr-auto">
                    Count Details
                </h2>
                <img
                    src="src/assets/images/TrackZone_Logo.webp"
                    alt="TrackZone Logo"
                    className="h-5 sm:h-7"
                />
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-300 my-1" />

            {/* Smaller Label Below Divider Line */}
            <div className="pl-4 pt-2">
                <h3 className="text-[10px] sm:text-xs font-medium text-gray-700">
                    History of Watch Cases
                </h3>
            </div>

            {/* Table for Count Details */}
            <div className="overflow-x-auto mt-4 mx-4">
                <table className="min-w-full border border-gray-300 table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-1 text-left text-[9px] sm:text-xs font-medium text-gray-700 min-h-[30px] sm:min-h-[40px]">Phone Number</th>
                            <th className="border border-gray-300 p-1 text-left text-[9px] sm:text-xs font-medium text-gray-700 min-h-[30px] sm:min-h-[40px]">IMEI</th>
                            <th className="border border-gray-300 p-1 text-left text-[9px] sm:text-xs font-medium text-gray-700 min-h-[30px] sm:min-h-[40px]">Debut Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-1 min-h-[30px] sm:min-h-[40px]">
                                <input
                                    type="text"
                                    className="rounded-md p-1 text-[9px] sm:text-xs w-full border-none"
                                    placeholder="Enter Phone Number"
                                />
                            </td>
                            <td className="border border-gray-300 p-1 min-h-[30px] sm:min-h-[40px]">
                                <input
                                    type="text"
                                    className="rounded-md p-1 text-[9px] sm:text-xs w-full border-none"
                                    placeholder="Enter IMEI"
                                />
                            </td>
                            <td className="border border-gray-300 p-1 min-h-[30px] sm:min-h-[40px]">
                                <input
                                    type="date"
                                    value={debutDate}
                                    onChange={handleDateChange}
                                    className="rounded-md p-1 text-[9px] sm:text-xs w-full border-none"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Existing Status Heading */}
            <div className="pl-4 pt-4">
                <h3 className="text-[10px] sm:text-xs font-medium text-gray-700 mb-1">
                    Status
                </h3>
            </div>

            {/* Dropdown for Status Selection */}
            <div className="mb-3 w-2/5 sm:w-[40%] mt-2 ml-4">
                <select
                    className="border border-gray-300 rounded-md p-2 w-full text-[10px] sm:text-xs"
                    value={status}
                    onChange={handleStatusChange}
                >
                    <option value="Active">Active</option>
                    <option value="Stopped">Stopped</option>
                </select>
            </div>

            {/* Collapsible Section for Additional Inputs */}
            <div className="pl-4 pt-2 flex items-center">
                <h3 className="text-[10px] sm:text-xs font-medium text-gray-700 mb-1">
                    Meter
                </h3>
                {/* Show the toggle icon only on mobile */}
                {isMobile && (
                    <button onClick={toggleInputVisibility} className="focus:outline-none ml-2">
                        <FontAwesomeIcon 
                            icon={isInputVisible ? faAngleUp : faAngleDown} 
                            className="text-[10px] sm:text-[12px] transform -translate-y-1" // Reduced size and slightly moved up
                        />
                    </button>
                )}
            </div>

            {/* Display inputs based on isMobile state */}
            {(isMobile ? isInputVisible : true) && (
                <div className="flex flex-wrap justify-between mt-2 mx-4">
                    <div className="flex flex-col items-start mx-2 mb-2 w-full sm:w-[48%] md:w-[23%]">
                        <label className="text-[9px] sm:text-xs font-medium text-gray-700 mb-1" htmlFor="input-1">
                            Input 1
                        </label>
                        <input
                            type="text"
                            id="input-1"
                            className="border border-gray-300 rounded-md p-1 text-[9px] sm:text-xs w-full"
                            placeholder="Enter Input 1"
                        />
                    </div>
                    <div className="flex flex-col items-start mx-2 mb-2 w-full sm:w-[48%] md:w-[23%]">
                        <label className="text-[9px] sm:text-xs font-medium text-gray-700 mb-1" htmlFor="input-2">
                            Date and Time
                        </label>
                        <input
                            type="datetime-local"
                            id="input-2"
                            className="border border-gray-300 rounded-md p-1 text-[9px] sm:text-xs w-full"
                        />
                    </div>
                    <div className="flex flex-col items-start mx-2 mb-2 w-full sm:w-[48%] md:w-[23%]">
                        <label className="text-[9px] sm:text-xs font-medium text-gray-700 mb-1" htmlFor="input-3">
                            Input 3
                        </label>
                        <input
                            type="text"
                            id="input-3"
                            className="border border-gray-300 rounded-md p-1 text-[9px] sm:text-xs w-full"
                            placeholder="Enter Input 3"
                        />
                    </div>
                    <div className="flex flex-col items-start mx-2 mb-2 w-full sm:w-[48%] md:w-[23%]">
                        <label className="text-[9px] sm:text-xs font-medium text-gray-700 mb-1" htmlFor="input-4">
                            Input 4
                        </label>
                        <input
                            type="datetime-local"
                            id="input-4"
                            className="border border-gray-300 rounded-md p-1 text-[9px] sm:text-xs w-full"
                        />
                    </div>
                </div>
            )}

            

            {/* Container for the button to keep it within the component */}
            <div className="flex justify-end p-4 mt-auto">
                <div className="w-24">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

const EquipmentEntry = () => {
    const [activeTab, setActiveTab] = useState('characteristics');

    return (
        <div className="p-4 flex flex-col items-center justify-center h-full ml-8 sm:ml-0">
            {/* Tab Navigation */}
            <div className="flex mb-4 flex-wrap justify-center">
                <button
                    className={`p-0.5 sm:p-1 text-[10px] sm:text-xs font-medium ${activeTab === 'characteristics' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-700'} mx-0.5 sm:mx-1`}
                    onClick={() => setActiveTab('characteristics')}
                >
                    Characteristics
                </button>
                <button
                    className={`p-0.5 sm:p-1 text-[10px] sm:text-xs font-medium ${activeTab === 'count' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-700'} mx-0.5 sm:mx-1`}
                    onClick={() => setActiveTab('count')}
                >
                    Count
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'characteristics' ? <EntryDetails /> : <CountDetails />}
        </div>
    );
};

export default EquipmentEntry;