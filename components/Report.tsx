import React, { useState } from 'react';

export default function Report() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReportModal = (e: any) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="fixed right-0 bottom-0 w-auto h-8 bg-white">
        <button
          className="text-xs p-2 font-medium border-1 border-gray-300"
          onClick={handleReportModal}
        >
          Report Website Bug
        </button>
      </div>
      <div
        className={`fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 ${
          isModalOpen && 'modal-open'
        }`}
      >
        <div className="relative top-1/4 mx-auto p-5 border w-11/12 md:w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Raise a bug
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                Please provide your feedback below:
              </p>
            </div>
            <textarea className="border rounded-md w-full h-32"></textarea>
            <div className="flex gap-2 items-center px-4 py-3">
              <button
                onClick={handleReportModal}
                id="ok-btn"
                className="px-4 py-2 border-2 border-blue-500 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2"
              >
                Submit
              </button>
              <button
                onClick={handleReportModal}
                id="ok-btn"
                className="px-4 py-2 border-2 border-blue-400 text-blue-400 text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
