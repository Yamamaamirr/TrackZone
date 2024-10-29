// src/components/CheckboxComponent.jsx

import React from 'react';

const CheckboxComponent = ({ header, options, selectedValues, onChange }) => {
  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value)); // Uncheck
    } else {
      onChange([...selectedValues, value]); // Check
    }
  };

  return (
    <div className="w-full mb-1 shadow-md p-0.5 bg-white rounded-md">
      <label 
        className="text-xs text-gray-600 mb-1 block ml-2 font-light" 
        style={{ fontSize: '0.625rem' }}
      >
        {header}
      </label>

      <div className="h-0.5 bg-gray-300 mx-2 mb-1" />

      <div className="flex flex-col space-y-1 px-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxComponent;
