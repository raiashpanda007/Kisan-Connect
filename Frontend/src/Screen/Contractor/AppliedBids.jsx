import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, RefreshCw, X, Bell, CheckCircle } from 'lucide-react';

// AcceptancePopup Component
const AcceptancePopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4 animate-fade-in-up">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Bid Accepted!</h2>
          <p className="text-gray-600 mb-4">New contract has been added.</p>
          <button
            onClick={onClose}
            className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const AppliedBids = () => {
  const [bids, setBids] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBid, setSelectedBid] = useState(null);
  const [sortType, setSortType] = useState('rating');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newBidNotification, setNewBidNotification] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [isAcceptancePopupVisible, setIsAcceptancePopupVisible] = useState(false);
  const observer = useRef();

  useEffect(() => {
    fetchBids();

    // Simulate new bid notification trigger every 10 seconds
    // const interval = setInterval(() => {
    //   triggerNotification();
    // }, 10000);

    return () => clearInterval(interval);
  }, []);

  const fetchBids = () => {
    setIsLoading(true);
    setTimeout(() => {
      setBids([
        { id: 1, farmerName: 'John Doe', rating: 4.5, quantityApplied: 500, location: 'California', details: 'John has been farming for 10 years and specializes in organic crops.' },
        { id: 2, farmerName: 'Jane Smith', rating: 4.2, quantityApplied: 750, location: 'Texas', details: 'Jane runs a large farm in Texas, focusing on grain production.' },
        { id: 3, farmerName: 'Bob Johnson', rating: 4.8, quantityApplied: 600, location: 'Iowa', details: 'Bob has won awards for his sustainable farming practices.' },
        { id: 4, farmerName: 'Alice Brown', rating: 4.0, quantityApplied: 450, location: 'Oregon', details: 'Alice is known for her high-quality fruit and vegetable production.' },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  const triggerNotification = () => {
    setNewBidNotification(true);
    setTimeout(() => setNewBidNotification(false), 3000);
  };

  const sortBids = (bids, sortType) => {
    switch (sortType) {
      case 'farmerName':
        return [...bids].sort((a, b) => a.farmerName.localeCompare(b.farmerName));
      case 'rating':
        return [...bids].sort((a, b) => b.rating - a.rating);
      case 'quantityApplied':
        return [...bids].sort((a, b) => b.quantityApplied - a.quantityApplied);
      default:
        return bids;
    }
  };

  const filterBids = (bids, searchTerm) => {
    if (!searchTerm) return bids;
    return bids.filter(bid =>
      bid.farmerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bid.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const handleSortChange = (type) => {
    setSortType(type);
    setShowSortOptions(false);
  };

  const openModal = (bid) => {
    setSelectedBid(bid);
  };

  const closeModal = () => {
    setSelectedBid(null);
  };

  const handleAccept = () => {
    setIsAcceptancePopupVisible(true);
    closeModal();
  };

  const sortedBids = sortBids(bids, sortType);
  const filteredBids = filterBids(sortedBids, searchTerm);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">Applied Bids</h1>

      <div className="bg-white shadow-lg rounded-lg p-4 mb-6 sticky top-0 z-10 border-b border-indigo-100">
        <div className="flex justify-between items-center pb-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg px-4 py-3">
          <span className="font-semibold text-lg">Contract ID: 2427</span>

          <input
            type="text"
            placeholder="Search by farmer name or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-full text-indigo-600 border border-indigo-400"
          />

          <div className="relative">
            <button 
              onClick={toggleSortOptions} 
              className="flex items-center bg-white text-indigo-600 px-4 py-2 rounded-full shadow-md hover:bg-indigo-50 hover:text-indigo-800 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Sort By
              <ChevronDown className="ml-2 h-5 w-5" />
            </button>

            {showSortOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg z-10 border">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-indigo-100 cursor-pointer transition-all duration-200"
                    onClick={() => handleSortChange('farmerName')}
                  >
                    Farmer Name
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-indigo-100 cursor-pointer transition-all duration-200"
                    onClick={() => handleSortChange('rating')}
                  >
                    Rating
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-indigo-100 cursor-pointer transition-all duration-200"
                    onClick={() => handleSortChange('quantityApplied')}
                  >
                    Quantity
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="max-h-[calc(100vh-250px)] overflow-y-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <RefreshCw className="text-indigo-600 h-12 w-12 animate-spin" />
            </div>
          ) : (
            filteredBids.map((bid, idx) => (
              <div 
                key={bid.id} 
                id={idx === filteredBids.length - 1 ? 'lastBid' : ''}
                onClick={() => openModal(bid)}
                className="p-4 border-b cursor-pointer hover:bg-indigo-50 transition duration-300"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-indigo-700 hover:text-indigo-900 transition-colors duration-300">{bid.farmerName}</span>
                  <span className="text-yellow-500 font-medium flex items-center">
                    Rating: {bid.rating} 
                    <span className="ml-1">★</span>
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Quantity: {bid.quantityApplied}</span>
                  <span>{bid.location}</span>
                </div>
              </div>
            ))
          )}

          {isFetchingMore && (
            <div className="flex justify-center items-center mt-4">
              <RefreshCw className="text-indigo-600 h-8 w-8 animate-spin" />
            </div>
          )}
        </div>
      </div>

      {newBidNotification && (
        <div className="fixed bottom-4 right-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-bounce">
          <Bell className="h-6 w-6" />
          <span>New bids have arrived!</span>
        </div>
      )}

      {selectedBid && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{selectedBid.farmerName}</h2>
            <p className="mb-2 text-gray-700"><strong>Location:</strong> {selectedBid.location}</p>
            <p className="mb-2 text-gray-700"><strong>Quantity:</strong> {selectedBid.quantityApplied} units</p>
            <p className="mb-2 text-gray-700"><strong>Rating:</strong> {selectedBid.rating}</p>
            <p className="text-gray-700"><strong>Details:</strong> {selectedBid.details}</p>
            <div className="flex justify-between mt-6">
              <button onClick={handleAccept} className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">Accept</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">Reject</button>
            </div>
          </div>
        </div>
      )}

      <AcceptancePopup
        isVisible={isAcceptancePopupVisible}
        onClose={() => setIsAcceptancePopupVisible(false)}
      />
    </div>
  );
};

export default AppliedBids;