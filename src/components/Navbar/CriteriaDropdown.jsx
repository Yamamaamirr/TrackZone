import React, { useState } from 'react';

const CriteriaDropdown = ({ label, options }) => {
  const [selected, setSelected] = useState('');

  return (
    <div className="mt-4 mb-4"> {/* Margin-top and margin-bottom for spacing */}
      <label className="block text-gray-700 text-xs font-medium mb-2">{label}</label> {/* Increased margin-bottom for more spacing */}
      <input
        list="criteria-options"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="border border-gray-300 p-1 rounded w-full text-xs" // Input styles
        placeholder="Type to search..."
      />
      <datalist id="criteria-options">
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
    </div>
  );
};

export default CriteriaDropdown;
