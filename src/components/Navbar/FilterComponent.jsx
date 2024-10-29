// src/components/FilterComponent.jsx

import React, { useState } from 'react';
import CriteriaComponent from './CriteriaComponent'; 
import CheckboxComponent from './CheckboxComponent'; // Import the new CheckboxComponent

const FilterComponent = () => {
  const [category, setCategory] = useState('');
  const [statuses, setStatuses] = useState([]); // State for checkbox values

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleStatusChange = (values) => {
    setStatuses(values);
  };

  return (
    <div className="flex flex-col items-start w-full px-4 py-2">
      <CriteriaComponent 
        header="EQUIPEMENT" 
        value={category} 
        onChange={handleCategoryChange} 
        options={[
          { value: '', label: 'Select Category' },
          { value: 'category1', label: 'Category 1' },
          { value: 'category2', label: 'Category 2' },
          { value: 'category3', label: 'Category 3' },
        ]}
      />

      <CheckboxComponent 
        header="STATUS" 
        options={[
          { value: 'active', label: 'Active' },
          { value: 'operational', label: 'Operational' },
          { value: 'stopped', label: 'Stopped' },
        ]}
        selectedValues={statuses}
        onChange={handleStatusChange}
      />
    </div>
  );
};

export default FilterComponent;
