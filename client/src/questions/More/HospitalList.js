import React, { useState, useEffect } from "react";
import hospitalData from "./nearbyHospitalsMumbai.json";

function HospitalList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if (Array.isArray(hospitalData)) {
      // If hospitalData is an array, set it directly
      setHospitals(hospitalData);
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
      hospital["Ward Name"].toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === "" ||
        hospital["Type of Hospital/Health facility"].toLowerCase() ===
          filterType.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hospital List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by ward name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border rounded-md mr-2"
        />
        <select
          onChange={handleFilterChange}
          value={filterType}
          className="px-4 py-2 border rounded-md"
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
          {filteredData.map((hospital) => {
            // Check if all required fields are present and not null/undefined
            if (
              hospital["_id"] &&
              hospital["Ward Name"] &&
              hospital["Type of Hospital/Health facility"] &&
              hospital["Hospital Name"] &&
              hospital["Address"] &&
              hospital["No. of Beds"] &&
              hospital["Contact"]
            ) {
              return (
                <tr key={hospital._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {hospital["Ward Name"]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {hospital["Type of Hospital/Health facility"]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {hospital["Hospital Name"]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {hospital["Address"]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {hospital["No. of Beds"]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {hospital["Contact"]}
                  </td>
                </tr>
              );
            } else {
              // If any required field is missing or null, skip rendering this row
              return null;
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HospitalList;
