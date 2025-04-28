import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-xl rounded-lg max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="text-teal-600 hover:text-teal-800 font-medium">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
