"use client";

import React, { useState } from 'react';

const EditMemberForm = ({ member, goBack, onSave }) => {
  const [formData, setFormData] = useState(member);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="p-6 bg-gray-100 max-w-2xl mx-auto rounded-lg shadow-md">
      <header className="flex justify-between items-center mb-6 text-gray-800">
        <h2 className="text-xl font-semibold">Edit Member</h2>
        <button
          onClick={goBack}
          className="px-3 py-1 text-sm bg-gray-200 border border-gray-300 rounded hover:bg-gray-300"
        >
          Back
        </button>
      </header>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-700">Picture:</label>
          <input
            type="file"
            name="image"
            onChange={(e) => console.log(e.target.files[0])}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-700">Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-700">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-700">Plan Detail:</label>
          <input
            type="text"
            name="planDetail"
            value={formData.planDetail}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-700">Duration:</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-700">Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-700">End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-700">Gender:</label>
          <div className="flex items-center gap-4 text-gray-700">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            /> Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            /> Female
          </div>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="self-center px-6 py-3 mt-6 text-white bg-gray-800 rounded hover:bg-gray-700 transition"
        >
          Save & Next
        </button>
      </form>
    </div>
  );
};

export default EditMemberForm;
