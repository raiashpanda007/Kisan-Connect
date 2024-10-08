import React, { useState } from 'react';

const Predictions = () => {
    const [formData, setFormData] = useState({
        nitrogen: '',
        phosphorus: '',
        potassium: '',
        temperature: '',
        humidity: '',
        pH: '',
        rainfall: '',
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Convert strings to numbers for processing
        const processedData = {
            nitrogen: parseFloat(formData.nitrogen),
            phosphorus: parseFloat(formData.phosphorus),
            potassium: parseFloat(formData.potassium),
            temperature: parseFloat(formData.temperature),
            humidity: parseFloat(formData.humidity),
            pH: parseFloat(formData.pH),
            rainfall: parseFloat(formData.rainfall),
        };

        // Perform your API call or crop recommendation logic here
        const recommendedCrop = 'Rice'; // Replace with your recommendation logic
        setResult(recommendedCrop);
    };

    return (
        <div className="overflow-auto flex justify-center items-center h-screen  first-letter:">
            <div className="bg-gradient-to-r from-green-100 via-blue-200 to-purple-300 shadow-lg rounded-lg p-8 w-full max-w-md relative top-32 overflow-auto">
                <h1 className="text-2xl font-semibold mb-6 text-green-700">Crop Recommendation System 🌱</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-left text-gray-700">Nitrogen:</label>
                        <input
                            type="text"
                            name="nitrogen"
                            value={formData.nitrogen}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-gray-700">Phosphorus:</label>
                        <input
                            type="text"
                            name="phosphorus"
                            value={formData.phosphorus}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-gray-700">Potassium:</label>
                        <input
                            type="text"
                            name="potassium"
                            value={formData.potassium}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-gray-700">Temperature:</label>
                        <input
                            type="text"
                            name="temperature"
                            value={formData.temperature}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-gray-700">Humidity:</label>
                        <input
                            type="text"
                            name="humidity"
                            value={formData.humidity}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-gray-700">pH:</label>
                        <input
                            type="text"
                            name="pH"
                            value={formData.pH}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-gray-700">Rainfall:</label>
                        <input
                            type="text"
                            name="rainfall"
                            value={formData.rainfall}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                    >
                        Get Recommendation
                    </button>
                </form>
                {result && (
                    <div className="mt-6 bg-green-500 text-white py-4 px-6 rounded-lg shadow">
                        <h3 className="text-lg">Recommended Crop for Cultivation: {result}</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Predictions;
