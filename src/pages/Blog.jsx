import React, { useContext, useEffect } from 'react';
import './blog.css';
import { LanguageContext } from '../context/LanguageContext';
import translations from "../components/Translation"

const Blog = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h3 className="text-2xl uppercase font-semibold text-teal-600 text-center">          {translations[language].blog_title}
        </h3>
        <h2 className="text-4xl font-bold text-gray-900 text-center">          
          {translations[language].blog_tagline}
        </h2>
      </div>

      {/* Embed Facebook Feed */}
      <div className="mb-8 flex justify-center">
        <div className="w-full bg-white p-0 rounded-lg shadow-lg overflow-hidden">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">  {translations[language].footer_follow} </h3>

          {/* Facebook Page Plugin Embed using iframe */}
          <div
            className="fb-page "
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

          <p className="text-gray-600 mt-4 text-center">
          {translations[language].blog_footer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
