import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
