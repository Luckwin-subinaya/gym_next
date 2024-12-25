"use client";

import React from 'react';

const GenerateInvoiceForm = ({ memberData }) => {
  // Function to trigger the print dialog
  const printInvoice = () => {
    window.print();
  };

  // Function to send the invoice via email
  const sendInvoice = () => {
    const emailSubject = 'Your Invoice';
    const emailBody = `
      Dear ${memberData?.name},

      Please find below your invoice details:

      Name: ${memberData?.name}
      Email: ${memberData?.email}
      Mobile: ${memberData?.mobile}
      Address: ${memberData?.address}
      Plan Detail: ${memberData?.planDetail}
      Duration: ${memberData?.duration}
      Start Date: ${memberData?.startDate}
      End Date: ${memberData?.endDate}
      Gender: ${memberData?.gender}

      Thank you!
    `;
    window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Generate Invoice</h1>
        <div className="bg-gray-100 py-2 px-4 rounded-full text-sm text-gray-600">
          admin@gmail.com
        </div>
      </header>
      <main>
        <form className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
              {memberData?.image ? (
                <img src={memberData.image} alt="Preview" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <span>No image selected</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Name:</label>
              <input
                type="text"
                value={memberData?.name || ''}
                readOnly
                className="p-3 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Email:</label>
              <input
                type="text"
                value={memberData?.email || ''}
                readOnly
                className="p-3 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Mobile No.:</label>
              <input
                type="text"
                value={memberData?.mobile || ''}
                readOnly
                className="p-3 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Address:</label>
              <input
                type="text"
                value={memberData?.address || ''}
                readOnly
                className="p-3 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Plan Detail:</label>
              <input
                type="text"
                value={memberData?.planDetail || ''}
                readOnly
                className="p-3 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Duration:</label>
              <input
                type="text"
                value={memberData?.duration || ''}
                readOnly
                className="p-3 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Start Date:</label>
              <input
                type="text"
                value={memberData?.startDate || ''}
                readOnly
                className="p-3 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">End Date:</label>
              <input
                type="text"
                value={memberData?.endDate || ''}
                readOnly
                className="p-3 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Gender:</label>
              <span className="text-gray-800">{memberData?.gender}</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <button
              type="button"
              className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
              onClick={printInvoice}
            >
              Print Invoice
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
              onClick={sendInvoice}
            >
              Send Invoice via Email
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default GenerateInvoiceForm;
