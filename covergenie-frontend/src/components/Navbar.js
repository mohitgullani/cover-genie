import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span onClick={() => navigate("/")} className="text-2xl font-extrabold text-white hover:cursor-pointer">CoverGenie</span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#" className="text-white hover:bg-purple-700 hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition duration-300">Cover Letter</a>
            </div>
            <div className="flex items-center sm:hidden">
              <button type="button" className="text-white hover:text-gray-300 focus:outline-none" onClick={handleMobileMenuToggle}>
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`sm:hidden ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700 hover:text-gray-300 transition duration-300">Cover Letter</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
