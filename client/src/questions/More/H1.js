import React, { useState, useEffect } from 'react';
import hospitalData from './nearbyHospitalsMumbai.json';

function H1() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Check if hospitalData contains records
    if (hospitalData && hospitalData.records && Array.isArray(hospitalData.records)) {
      setHospitals(hospitalData.records);
    } else {
      console.error("Hospital data is not in the expected format.");
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filteredData = hospitals.filter((hospital) => {
    return (
        (hospital[1].toLowerCase().includes(searchTerm.toLowerCase()) || // Search by ward name
        hospital[3].toLowerCase().includes(searchTerm.toLowerCase())) && // Search by hospital name
        (filterType === '' || hospital[2].toLowerCase() === filterType.toLowerCase())
      );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold bg-green-700 text-white p-7 rounded-lg mb-8">List of Nearby Hospitals</h1>
      <div className="flex mb-4">
       
        <input
          type="text"
          placeholder="Search by ward name or hospital name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-xl mb-5"
        />
        <select
          onChange={handleFilterChange}
          value={filterType}
          className="ml-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-xl mb-5"
        >
          <option value="">All Types</option>
          <option value="govt">Govt</option>
          <option value="bmc">BMC</option>
          <option value="defence">Defence</option>
          <option value="private">Private</option>
        </select>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Ward Name</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Hospital Name</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">No. of Beds</th>
            <th className="border border-gray-300 px-4 py-2">Contact</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((hospital, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{hospital[1]}</td>
              <td className="border border-gray-300 px-4 py-2">{hospital[2]}</td>
              <td className="border border-gray-300 px-4 py-2">{hospital[3]}</td>
              <td className="border border-gray-300 px-4 py-2">{hospital[4]}</td>
              <td className="border border-gray-300 px-4 py-2">{hospital[5]}</td>
              <td className="border border-gray-300 px-4 py-2">{hospital[6]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default H1;
