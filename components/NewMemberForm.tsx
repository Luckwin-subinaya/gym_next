"use client";

import React, { useState } from 'react';
import GenerateInvoiceForm from './GenerateInvoiceForm';

const NewMemberForm = ({ goBack }) => {
  const [memberData, setMemberData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    planDetail: '',
    duration: '',
    startDate: '',
    endDate: '',
    gender: '',
    image: null,
  });

  const [isInvoicePage, setIsInvoicePage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberData({ ...memberData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMemberData({ ...memberData, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsInvoicePage(true);
  };

  return (
    <div>
      {isInvoicePage ? (
        <GenerateInvoiceForm memberData={memberData} />
      ) : (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-center mb-8">New Member Form</h1>
          
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Image:</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
            {memberData.image && (
              <div className="mt-4 flex justify-center">
                <img src={memberData.image} alt="Preview" className="max-w-xs h-auto border border-gray-300 rounded-md" />
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={memberData.name}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={memberData.email}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">Mobile:</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile number"
              value={memberData.mobile}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">Address:</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              value={memberData.address}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">Plan Detail:</label>
            <input
              type="text"
              name="planDetail"
              placeholder="Enter plan detail"
              value={memberData.planDetail}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">Duration:</label>
            <input
              type="text"
              name="duration"
              placeholder="Enter duration (e.g., 6 months)"
              value={memberData.duration}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={memberData.startDate}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">End Date:</label>
            <input
              type="date"
              name="endDate"
              value={memberData.endDate}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">Gender:</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={memberData.gender === 'Male'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={memberData.gender === 'Female'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          <button type="submit" className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200">
            Save & Next
          </button>
        </form>
      )}
    </div>
  );
};

export default NewMemberForm;
