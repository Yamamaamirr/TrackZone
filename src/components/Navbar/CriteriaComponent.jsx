import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import CriteriaDropdown from './CriteriaDropdown';
import RangeSlider from './RangeSlider';
import SearchPlaces from './SearchPlaces';

const CriteriaComponent = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const label = "Select Criteria";

  const [isActive, setIsActive] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [rangeValues, setRangeValues] = useState([10, 50]);

  return (
    <div
      className="bg-white relative w-full sm:w-72 h-auto p-3 sm:p-4 border border-gray-300 shadow-md rounded-md mx-auto z-10 sm:z-30"
      style={{ opacity: 0.9 }}
    >
      <div className="flex justify-between items-center">
        <div className="absolute top-2 left-4">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-gray-500"
            style={{ fontSize: '14px', fontWeight: '300', transform: 'scaleX(1.2)' }}
          />
        </div>
        <div className="absolute top-3 right-4 flex space-x-2">
          <span style={{ color: 'rgb(60,100,100)' }} className="text-xs font-semibold">Clear</span>
          <span style={{ color: 'rgb(60,100,100)' }} className="text-xs font-semibold">Done</span>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-4 sm:my-5" />

      <SearchPlaces />

      <CriteriaDropdown label={"Search Equipment"} options={options} />
      <CriteriaDropdown label={"Search by IMEI"} options={options} />

      <div className="mt-3">
        <label className="block text-gray-700 text-xs font-medium mb-2">Status</label>
        <div className="flex space-x-1 sm:space-x-3">
          <button
            onClick={() => setIsActive(!isActive)}
            className={`flex items-center justify-center w-20 sm:w-24 h-7 sm:h-8 rounded-md text-xs transition duration-300 
                        ${isActive ? 'text-white' : 'text-gray-700'}`}
            style={{
              backgroundColor: isActive ? 'rgb(120,156,156)' : 'rgb(229,231,235)',
            }}
          >
            <FaPlayCircle className="mr-1 text-xs" /> Active
          </button>

          <button
            onClick={() => setIsStopped(!isStopped)}
            className={`flex items-center justify-center w-20 sm:w-24 h-7 sm:h-8 rounded-md text-xs transition duration-300 
                        ${isStopped ? 'text-white' : 'text-gray-700'}`}
            style={{
              backgroundColor: isStopped ? 'rgb(120,156,156)' : 'rgb(229,231,235)',
            }}
          >
            <FaPauseCircle className="mr-1 text-xs" /> Stopped
          </button>
        </div>
      </div>

      <div className="mt-4 sm:mt-5">
        <label className="block text-gray-700 text-xs font-medium mb-1">Distance</label>
        <RangeSlider
          min={0}
          max={100}
          value={rangeValues}
          onRangeChange={setRangeValues}
        />
      </div>
    </div>
  );
};

export default CriteriaComponent;
