"use client";

import { useState } from "react";
import LandingPage from "../components/LandingPage";
import AdminDashboard from "../components/AdminDashBoard";
import NewMemberForm from "../components/NewMemberForm";  // Import the NewMemberForm component

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isNewMemberForm, setIsNewMemberForm] = useState(false); // State to toggle NewMemberForm

  // Toggle between LandingPage and AdminDashboard
  const toggleAdminDashboard = () => {
    setIsAdmin(prev => !prev);
  };

  // Toggle NewMemberForm visibility
  const toggleNewMemberForm = () => {
    setIsNewMemberForm(prev => !prev);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {isNewMemberForm ? (
        <NewMemberForm />
      ) : isAdmin ? (
        <AdminDashboard navigateToLanding={() => setIsAdmin(false)} />
      ) : (
        <LandingPage />
      )}

      {/* Buttons to toggle between the views */}
      <div className="mt-6 space-x-4">
        <button
          onClick={toggleAdminDashboard}
          className="py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
        >
          {isAdmin ? "Back to Landing Page" : "Go to Admin Dashboard"}
        </button>

        {/* Button to toggle NewMemberForm */}
        <button
          onClick={toggleNewMemberForm}
          className="py-2 px-6 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
        >
          {isNewMemberForm ? "Back to Dashboard" : "Add New Member"}
        </button>
      </div>
    </main>
  );
}
