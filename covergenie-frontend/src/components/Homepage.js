import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
 
   const navigate = useNavigate();
 
    return (
    <div>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl transition-transform duration-500 hover:scale-105">
              <span className="block xl:inline">Create Your Perfect</span>{' '}
              <span className="block text-indigo-600 xl:inline">Cover Letter</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Upload your resume and job description to get a personalized cover letter instantly.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a onClick={() => navigate("/coverletter")}className="w-full flex items-center justify-center px-8 py-3 border hover:cursor-pointer border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:scale-105">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img className="w-full max-w-xs mx-auto" src="/images/Cover.png" alt="Cover Letter Illustration" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Create a professional cover letter in just a few steps.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-500 ease-in-out transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 bg-indigo-500 rounded-full text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l6 6-6 6M21 7l-6 6 6 6"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Upload Resume</h3>
                <p className="mt-2 text-base text-gray-500">
                  Simply upload your resume to get started.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-500 ease-in-out transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 bg-indigo-500 rounded-full text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Add Job Description</h3>
                <p className="mt-2 text-base text-gray-500">
                  Provide the job description to tailor your cover letter.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-500 ease-in-out transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 bg-indigo-500 rounded-full text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Generate Cover Letter</h3>
                <p className="mt-2 text-base text-gray-500">
                  Get a professionally written cover letter instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
