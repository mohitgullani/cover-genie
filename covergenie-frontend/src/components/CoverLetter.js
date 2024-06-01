import React, { useState } from 'react'

const CoverLetter = () => {
    const [resume, setResume] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
  
    const handleGenerateCoverLetter = () => {
      // Logic to generate cover letter goes here
      console.log("Generating cover letter...");
      // For demonstration, setting a dummy cover letter
      setCoverLetter("This is a sample cover letter generated from the resume and job description.");
    };
  
    return (
      <div className="h-screen flex justify-center items-center bg-blue-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Partition 1: Resume Upload or Paste */}
            <div className="space-y-8 col-span-1">
              {/* Option 1: Paste or upload resume */}
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg transform">
                <h2 className="text-xl font-bold mb-4 text-blue-600">Resume Upload or Paste</h2>
                {/* Resume input field */}
                <textarea
                  className="w-full h-60 border-2 border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none px-4 py-2"
                  placeholder="Paste your resume here..."
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                ></textarea>
              </div>
              
              {/* Option 2: Paste job description */}
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg transform">
                <h2 className="text-xl font-bold mb-4 text-blue-600">Paste Job Description</h2>
                {/* Job description input field */}
                <textarea
                  className="w-full h-60 border-2 border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none px-4 py-2"
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
  
            {/* Partition 2: Generated Cover Letter */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg transform col-span-2">
              <h2 className="text-xl font-bold mb-4 text-blue-600">Generated Cover Letter</h2>
              {/* Display generated cover letter */}
              <div className="flex justify-center items-center h-5/6 border-2 border-blue-300 rounded-md px-4 py-2">
                <p className="text-gray-800">{coverLetter}</p>
              </div>
              {/* Button to copy cover letter */}
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-400" onClick={handleGenerateCoverLetter}>Generate</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CoverLetter
