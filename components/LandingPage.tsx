
"use client";
import React, { useState } from "react";
import { CalendarClock, SquareUser, Salad } from 'lucide-react';
import Image from 'next/image';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToAdmin = () => {
    
    console.log("Navigating to Admin Dashboard");
    
  };

  const handleLogin = () => {
   
    if (email === 'admin@gmail.com' && password === 'adminpassword23') {
      onLogin(true); 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md border-b-4 border-gray-800">
        <div className="flex items-center">
          <Image src="/images/gymlogo.jpg" alt="Logo" width={50} height={100} />
          <span className="text-2xl font-bold flex items-center ml-2">V STRONG FITNESS</span>
        </div>
        <nav className="flex space-x-4">
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600">Why Join Us?</a>
          <a href="#plan" className="text-gray-700 hover:text-blue-600">Plan</a>
          <a href="#visit-gym" className="text-gray-700 hover:text-blue-600">Visit our Gym</a>
          <a href="#admin-login" className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500">Admin Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-gray-600 to-gray-800 text-white py-20">
        <h1 className="text-4xl font-bold mb-4">Start a Better Shape of You!</h1>
        <p className="text-lg mb-6">Come Join Us!</p>
        <a href="#about" className="bg-yellow-400 text-black px-5 py-2 rounded hover:bg-yellow-500">
          Learn More
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="text-center py-10 bg-white">
        <h2 className="text-3xl font-bold mb-4">About Gym For Men & Women</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Gym Fitness Center provides proper training and conditioning for members
          who want to improve and transform their body with programs based on
          body composition.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="flex flex-wrap justify-center space-x-8 space-y-4 md:space-y-0">
          <div className="text-center">
            <CalendarClock className="w-12 h-12 mb-2 icon-hover flex-1" aria-label="24/7 Chat Icon" />
            <p className="text-lg font-medium">24/7 Chat</p>
          </div>
          <div className="text-center">
            <SquareUser className="w-12 h-12 mb-2 icon-hover flex-1" aria-label="1-1 Coaching Icon" />
            <p className="text-lg font-medium">1-1 Coaching</p>
          </div>
          <div className="text-center">
            <Salad className="w-12 h-12 mb-2 icon-hover flex-1" aria-label="Nutrition Plan Icon" />
            <p className="text-lg font-medium">Nutrition Plan</p>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="plan" className="py-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Our Plans</h2>
        <div className="flex justify-center space-x-4">
          {["7 Days", "1 Month", "6 Months", "1 Year"].map((plan) => (
            <div
              key={plan}
              className="border-2 border-yellow-400 rounded-lg px-4 py-2 font-bold hover:bg-yellow-400 hover:text-white transition"
            >
              {plan}
            </div>
          ))}
        </div>
      </section>

      {/* Visit Gym Section */}
      <section id="visit-gym" className="flex flex-col items-center py-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Visit Our Gym</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=<YOUR_MAP_EMBED_CODE>"
            width="300"
            height="200"
            className="border-2 border-gray-800 rounded"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div>
            <p><strong>Address:</strong> 137/93, 1st floor and Madurai citi centre , Kamarajar Salai , opp Bharat petroleum , Madurai - 625009</p>
            <p><strong>Email:</strong> contact@gymcenter.com</p>
            <p><strong>Phone:</strong> 8760516511</p>
          </div>
        </div>
      </section>

      {/* Admin Login Section */}
      <section id="admin-login" className="py-10 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleLogin} className="max-w-md mx-auto bg-gray-700 p-6 rounded">
          <label className="block mb-2 font-bold">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 rounded border-gray-400 text-black"
            value={email}
             onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block mb-2 font-bold">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 rounded border-gray-400 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#" className="block mb-4 text-yellow-400">Forgot password?</a>
          <button
            type="submit" onClick={handleLogin}
            className="w-full bg-yellow-400 py-2 rounded text-black font-bold hover:bg-yellow-500"
          >
            Login
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-200 text-center">
        <p>&copy; 2024 Gym Fitness Center. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
