import React, { useState } from 'react';
import axios from 'axios';

const CoverLetter = () => {
  const [coverLetter, setCoverLetter] = useState('');
  const [content, setContent] = useState({
      resume: "",
      jd: ""
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [missingContent, setMissingContent] = useState(null); // State variable for missing content

  const handleOnChange = (e) => {
      const value = e.target.value;
      setContent({
          ...content,
          [e.target.name]: value
      });
  };

  const generateCoverLetter = async (e) => {
      e.preventDefault();
      if (!content.resume || !content.jd) {
          setMissingContent('Please provide both resume and job description.'); // Set missing content message
          return;
      }
      setLoading(true);
      try {
          const response = await axios.post('http://localhost:8080/api/v1/coverletter', {
              resume: content.resume,
              jd: content.jd
          }, {
              headers: {
                  'Content-Type': 'application/json'
              }
          }).catch((error) => {
              console.log(error);
          });
          setCoverLetter(response.data);
      } catch (error) {
          console.error('Error generating cover letter:', error.response ? error.response.data : error.message);
          throw error;
      } finally {
          setLoading(false);
      }
  };

  const clearCoverLetter = () => {
      setCoverLetter('');
  };

  const copyToClipboard = () => {
      navigator.clipboard.writeText(coverLetter)
          .then(() => {
              setCopied(true);
              setTimeout(() => {
                  setCopied(false);
              }, 2000); // Revert to "Copy" after 2 seconds
          })
          .catch((error) => console.error('Error copying to clipboard:', error));
  };

    return (
        <div className="relative h-screen flex justify-center items-center bg-blue-50">
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 flex justify-center items-center">
                    <img src="images/Loading.GIF" alt="Loading" className="w-20 h-20" />
                </div>
            )}
            {missingContent && (
                <div>
                    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
                        <p className="text-red-600 mb-4">{missingContent}</p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-400" onClick={() => setMissingContent(null)}>Okay</button>
                    </div>
                </div>
            )}

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-8 col-span-1">
                      <div className="bg-blue-100 p-6 rounded-lg shadow-lg transform">
                          <h2 className="text-xl font-bold mb-4 text-blue-600">Resume Upload or Paste</h2>
                          {/* Resume input field */}
                          <div className="flex flex-col items-start space-y-2">
                              
                              {/* Or paste textarea */}
                              <textarea
                                  className="w-full h-60 border-2 border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none px-4 py-2"
                                  placeholder="Paste your resume here..."
                                  name="resume"
                                  value={content.resume}
                                  onChange={(e) => handleOnChange(e)}
                              ></textarea>
                          </div>
                      </div>

                        <div className="bg-blue-100 p-6 rounded-lg shadow-lg transform">
                            <h2 className="text-xl font-bold mb-4 text-blue-600">Paste Job Description</h2>
                            <textarea
                                className="w-full h-60 border-2 border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none px-4 py-2"
                                placeholder="Paste the job description here..."
                                value={content.jd}
                                name="jd"
                                onChange={(e) => handleOnChange(e)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="bg-blue-100 p-6 rounded-lg shadow-lg transform col-span-2">
                        <h2 className="text-xl font-bold mb-4 text-blue-600">Generated Cover Letter</h2>
                        <textarea
                            className="w-full h-5/6 border-2 border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none px-4 py-2 resize-none"
                            value={coverLetter}
                            readOnly={true}
                        ></textarea>
                        <div className="flex justify-end items-center mt-4 space-x-3">
                            <button 
                                className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-400 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={(e) => generateCoverLetter(e)}
                                disabled={loading}
                            >
                                {coverLetter ? 'Regenerate' : 'Generate'}
                            </button>
                            {coverLetter && (
                                <button 
                                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-red-400"
                                    onClick={clearCoverLetter}
                                >
                                    Clear
                                </button>
                            )}
                            {
                              coverLetter && (
                            <button 
                                className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-green-400 ${copied ? 'bg-green-700' : ''}`}
                                onClick={copyToClipboard}
                            >
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoverLetter;
