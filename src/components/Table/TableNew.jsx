// src/TableNew.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Sample data
const sampleData = [
  { id: 1, name: 'Alice', age: 25, occupation: 'Engineer', location: 'New York', email: 'alice@example.com', phone: '123-456-7890', company: 'Tech Corp', joined: '2023-01-15' },
  { id: 2, name: 'Bob', age: 30, occupation: 'Designer', location: 'San Francisco', email: 'bob@example.com', phone: '234-567-8901', company: 'Creative LLC', joined: '2022-05-10' },
  { id: 3, name: 'Charlie', age: 35, occupation: 'Teacher', location: 'Los Angeles', email: 'charlie@example.com', phone: '345-678-9012', company: 'Education Inc', joined: '2021-08-20' },
  { id: 4, name: 'David', age: 28, occupation: 'Developer', location: 'Seattle', email: 'david@example.com', phone: '456-789-0123', company: 'Dev Solutions', joined: '2020-11-30' },
  { id: 5, name: 'Eva', age: 22, occupation: 'Artist', location: 'Chicago', email: 'eva@example.com', phone: '567-890-1234', company: 'Art Studio', joined: '2019-07-25' },
];

const TableNew = () => {
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    age: '',
    occupation: '',
    location: '',
    email: '',
    phone: '',
    company: '',
    joined: ''
  });

  const filteredData = sampleData.filter((item) => {
    return (
      (filters.id === '' || item.id.toString().includes(filters.id)) &&
      (filters.name === '' || item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.age === '' || item.age.toString().includes(filters.age)) &&
      (filters.occupation === '' || item.occupation.toLowerCase().includes(filters.occupation.toLowerCase())) &&
      (filters.location === '' || item.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.email === '' || item.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.phone === '' || item.phone.includes(filters.phone)) &&
      (filters.company === '' || item.company.toLowerCase().includes(filters.company.toLowerCase())) &&
      (filters.joined === '' || item.joined.includes(filters.joined))
    );
  });

  const handleFilterChange = (e, key) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Filtering Table</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {Object.keys(filters).map((key) => (
              <th key={key} className="py-3 px-4 text-left">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Filter Row */}
          <tr className="bg-gray-100">
            {Object.keys(filters).map((key) => (
              <td key={key} className="py-3 px-4">
                <div className="flex items-center">
                  <button
                    onClick={() => {}}
                    className="text-gray-600 hover:text-blue-500 focus:outline-none"
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />
                  </button>
                  <input
                    type="text"
                    placeholder={`Filter`}
                    value={filters[key]}
                    onChange={(e) => handleFilterChange(e, key)}
                    className="ml-2 p-1 text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ width: '120px' }} // Limit the width of input fields
                  />
                </div>
              </td>
            ))}
          </tr>

          {/* Data Rows */}
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-4">{item.id}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.age}</td>
                <td className="py-3 px-4">{item.occupation}</td>
                <td className="py-3 px-4">{item.location}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4">{item.phone}</td>
                <td className="py-3 px-4">{item.company}</td>
                <td className="py-3 px-4">{item.joined}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="py-3 px-4 text-center">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableNew;
