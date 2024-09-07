import React, { useState } from "react";
import { Button1, Button2 } from "../../Components/Button/Button.js";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Mock data with additional fields
  const contracts = [
    { id: 1, name: "Contract 1", crop: "Potato", appliedBids: 10, date: "2024-09-15", deadline: "2024-10-15" },
    { id: 2, name: "Contract 2", crop: "Tomato", appliedBids: 8, date: "2024-09-10", deadline: "2024-10-10" },
    { id: 3, name: "Contract 3", crop: "Wheat", appliedBids: 15, date: "2024-09-20", deadline: "2024-10-20" },
    { id: 4, name: "Contract 4", crop: "Rice", appliedBids: 12, date: "2024-09-05", deadline: "2024-10-05" },
  ];

  const filteredAndSortedContracts = contracts
    .filter((contract) =>
      contract.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let compareA = a[sortBy];
      let compareB = b[sortBy];

      if (sortBy === "appliedBids") {
        compareA = Number(compareA);
        compareB = Number(compareB);
      }

      if (compareA < compareB) return sortOrder === "asc" ? -1 : 1;
      if (compareA > compareB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-gradient-to-r from-green-600 to-green-700 p-6 shadow-lg">
        <h1 className="text-white text-3xl font-bold text-center">Krishi Connect</h1>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <aside className="md:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-green-700 mb-2 text-center">Create A New Bid</h2>
              <p className="text-gray-600 mb-4 text-center">Easily create new bids for your agricultural products.</p>
              <div className="flex justify-center">
                <Button1
                  label="Create Bid"
                  onclick={() => navigate("/contractor/create-new-bid")}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-md"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-blue-700 mb-2 text-center">Current Running Contracts</h2>
              <p className="text-gray-600 mb-4 text-center">View and manage your ongoing contracts.</p>
              <div className="flex justify-center">
                <Button2
                  label="Contracts"
                  onclick={() => navigate("/contractor/current-bids")}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
                />
              </div>
            </div>
          </aside>

          <main className="md:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-6 text-center">Open Contracts</h2>
              <div className="mb-6 relative">
                <input
                  type="text"
                  placeholder="Search contracts..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition shadow-sm"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <label htmlFor="sortBy" className="text-gray-700">Sort by:</label>
                  <select
                    id="sortBy"
                    value={sortBy}
                    onChange={handleSortChange}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="date">Date</option>
                    <option value="deadline">Deadline</option>
                    <option value="crop">Crop</option>
                    <option value="appliedBids">Applied Bids</option>
                  </select>
                </div>
                <button
                  onClick={toggleSortOrder}
                  className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {sortOrder === "asc" ? "↑" : "↓"}
                </button>
              </div>

              {filteredAndSortedContracts.length > 0 ? (
                <div className="space-y-4">
                  {filteredAndSortedContracts.map((contract) => (
                    <div key={contract.id} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-xl text-gray-800">{contract.name}</h3>
                          <p className="text-sm text-gray-600">Crop: {contract.crop}</p>
                          <p className="text-sm text-gray-600">Date: {contract.date}</p>
                          <p className="text-sm text-gray-600">Deadline: {contract.deadline}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-600">Applied Bids</p>
                          <p className="text-2xl font-bold text-green-600">{contract.appliedBids}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 text-lg">No contracts found.</p>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;