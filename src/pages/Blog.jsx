import React, { useEffect } from 'react';
import './blog.css';
const Blog = () => {

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h3 className="text-2xl uppercase font-semibold text-teal-600">Blog</h3>
        <h2 className="text-4xl font-bold text-gray-900">Recent FB Posts</h2>
      </div>

      {/* Embed Facebook Feed */}
      <div className="mb-8">
        <div className="w-full bg-white p-0 rounded-lg shadow-lg overflow-hidden">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Follow Us on Facebook</h3>

          {/* Facebook Page Plugin Embed using iframe */}
          <div
            className="fb-page text-center flex justify-center"
            style={{
              width: '100%',
              height: 'auto',
              overflow: 'auto',
              display: 'block',
              border: 'none',
              margin: '0 auto',
            }}
          >
    <iframe
  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDr.ShahidaBegumMinu&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
  width="100%"
  height="500"
  style={{ border: 'none', overflow: 'hidden' }}

  allow="encrypted-media"
  title="Facebook Page"
></iframe>

          </div>

          <p className="text-gray-600 mt-4">
            Stay updated with the latest posts, news, and updates from our Facebook page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
