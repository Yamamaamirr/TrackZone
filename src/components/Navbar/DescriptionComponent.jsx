// DescriptionComponent.jsx
import React from 'react';

const DescriptionComponent = ({ description }) => {
  return (
    <div className="mt-2 border border-gray-300 rounded p-2 text-gray-600 text-[10px] h-20"> {/* Set fixed height */}
      {description}
    </div>
  );
};

export default DescriptionComponent;
