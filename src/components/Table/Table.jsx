import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Table = ({ data }) => {
  const headerColor = 'rgb(120, 156, 156)';

  const [filters, setFilters] = useState({
    immatriculation: '',
    name: '',
    status: '',
    type: '',
    brand: '',
    model: '',
    serialNumber: '',
    imei: '',
  });

  const handleInputChange = (e, column) => {
    setFilters({
      ...filters,
      [column]: e.target.value,
    });
  };

  const filteredData = data.filter((item) =>
    Object.keys(filters).every(
      (key) =>
        !filters[key] || item[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
    )
  );

  // Dropdown options (customize as needed)
  const dropdownOptions = ['INEHA', 'Option 2', 'Option 3'];

  return (
    <div className="shadow-lg rounded-lg overflow-hidden w-full">
      <div className="max-h-[87vh] overflow-y-auto">
        <table className="min-w-full bg-white text-xs table-fixed">
          <thead>
            {/* Search Row - above the headers */}
            <tr className="sticky top-0 z-20" style={{ backgroundColor: 'white' }}>
              <th></th>
              <th>
                <div className="relative">
                  <img src="/search.svg" alt="search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3" />
                  <input
                    type="text"
                    className="w-full pl-8 px-2 py-1 text-xs border rounded"
                    placeholder="Search Immatriculation"
                    onChange={(e) => handleInputChange(e, 'immatriculation')}
                  />
                </div>
              </th>
              <th>
                <div className="relative">
                  <img src="/search.svg" alt="search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3" />
                  <input
                    type="text"
                    className="w-full pl-8 px-2 py-1 text-xs border rounded"
                    placeholder="Search Name"
                    onChange={(e) => handleInputChange(e, 'name')}
                  />
                </div>
              </th>
              <th>
                <div className="relative">
                  <img src="/search.svg" alt="search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3" />
                  <input
                    type="text"
                    className="w-full pl-8 px-2 py-1 text-xs border rounded"
                    placeholder="Search Status"
                    onChange={(e) => handleInputChange(e, 'status')}
                  />
                </div>
              </th>
              <th className="hidden md:table-cell">
                <div className="relative">
                  <img src="/search.svg" alt="search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3" />
                  <input
                    type="text"
                    className="w-full pl-8 px-2 py-1 text-xs border rounded"
                    placeholder="Search Type"
                    onChange={(e) => handleInputChange(e, 'type')}
                  />
                </div>
              </th>
              <th className="hidden lg:table-cell">
                <div className="relative">
                  <img src="/search.svg" alt="search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3" />
                  <input
                    type="text"
                    className="w-full pl-8 px-2 py-1 text-xs border rounded"
                    placeholder="Search Brand"
                    onChange={(e) => handleInputChange(e, 'brand')}
                  />
                </div>
              </th>
              <th className="hidden lg:table-cell">
                <div className="relative">
                  <img src="/search.svg" alt="search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3" />
                  <input
                    type="text"
                    className="w-full pl-8 px-2 py-1 text-xs border rounded"
                    placeholder="Search Model"
                    onChange={(e) => handleInputChange(e, 'model')}
                  />
                </div>
              </th>
              <th className="hidden xl:table-cell">
                <div className="relative">
                  <img src="/search.svg" alt="search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3" />
                  <input
                    type="text"
                    className="w-full pl-8 px-2 py-1 text-xs border rounded"
                    placeholder="Search S/N"
                    onChange={(e) => handleInputChange(e, 'serialNumber')}
                  />
                </div>
              </th>
              <th className="hidden xl:table-cell">
                <div className="relative">
                  <img src="/search.svg" alt="search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3" />
                  <input
                    type="text"
                    className="w-full pl-8 px-2 py-1 text-xs border rounded"
                    placeholder="Search IMEI"
                    onChange={(e) => handleInputChange(e, 'imei')}
                  />
                </div>
              </th>
              <th></th>
            </tr>

            {/* Header Row */}
            <tr
              style={{ backgroundColor: headerColor }}
              className="text-white text-xs uppercase font-semibold tracking-wider sticky top-[31px] z-10"
            >
              <th className="py-2 px-2 sm:py-4 sm:px-4 text-left">ID</th>
              <th className="py-2 px-2 sm:py-4 sm:px-4 text-left">Immatriculation</th>
              <th className="py-2 px-2 sm:py-4 sm:px-4 text-left">Name</th>
              <th className="py-2 px-2 sm:py-4 sm:px-4 text-left">Status</th>
              <th className="py-2 px-2 sm:py-4 sm:px-4 text-left hidden md:table-cell">Type</th>
              <th className="py-2 px-2 sm:py-4 sm:px-4 text-left hidden lg:table-cell">Brand</th>
              <th className="py-2 px-2 sm:py-4 sm:px-4 text-left hidden lg:table-cell">Model</th>
              <th className="py-2 px-2 sm:py-4 sm:px-4 text-left hidden xl:table-cell">S/N</th>
              <th className="py-2 px-2 sm:py-4 sm:px-4 text-left hidden xl:table-cell">IMEI</th>
              <th className="py-2 px-2 sm:py-4 sm:px-4 text-center">Modifier</th>
            </tr>

            <tr className="sticky top-[66px] z-10 bg-white border-b border-gray-300"> {/* Added bottom border */}
              <td colSpan={10} className="py-1 px-2 sm:py-2 sm:px-4"> {/* Reduced padding for height */}
                <div className="relative">
                  <select className="w-2/5 text-sm font-bold border rounded p-1 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"> {/* Updated to smaller text size */}
                    {dropdownOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id} className={`transition-colors duration-200 ease-in-out ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-[rgba(120,156,156,0.2)]`}>
                <td className="py-2 px-2 sm:py-4 sm:px-4 text-gray-700 text-xs text-left">{item.id}</td>
                <td className="py-2 px-2 sm:py-4 sm:px-4 text-gray-700 text-xs text-left">{item.immatriculation}</td>
                <td className="py-2 px-2 sm:py-4 sm:px-4 text-gray-800 font-medium text-xs text-left">{item.name}</td>
                <td className="py-2 px-2 sm:py-4 sm:px-4 text-left">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.status === 'Active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-2 px-2 sm:py-4 sm:px-4 text-gray-700 text-xs text-left hidden md:table-cell">{item.type}</td>
                <td className="py-2 px-2 sm:py-4 sm:px-4 text-gray-700 text-xs text-left hidden lg:table-cell">{item.brand}</td>
                <td className="py-2 px-2 sm:py-4 sm:px-4 text-gray-700 text-xs text-left hidden lg:table-cell">{item.model}</td>
                <td className="py-2 px-2 sm:py-4 sm:px-4 text-gray-700 text-xs text-left hidden xl:table-cell">{item.serialNumber}</td>
                <td className="py-2 px-2 sm:py-4 sm:px-4 text-gray-700 text-xs text-left hidden xl:table-cell">{item.imei}</td>
                <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                  <button className="text-[rgb(120,156,156)] hover:text-green-600 transition duration-300 mr-2">
                    <FontAwesomeIcon icon={faEdit} size="lg" />
                  </button>
                  <button className="text-red-600 hover:text-red-800 transition duration-300 ml-2 text-xs">
                    <FontAwesomeIcon icon={faTrash} size="md" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Displaying the results count at the bottom of the table */}
      <div className="sticky bottom-0 bg-white py-2 text-center border-t border-gray-300">
        <p className="text-gray-500 text-sm font-light">
          {filteredData.length} results found
        </p>
      </div>
    </div>
  );
};

export default Table;
