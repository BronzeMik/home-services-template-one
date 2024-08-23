import React from 'react';

const PostCard = ({ imageUrl, altText, date, title, description, link }) => {
  return (
    <div className="w-[85%] col-lg-4 col-md-6 mb-8">
      <div className="elementskit-post-image-card rounded-lg shadow-lg overflow-hidden">
        {/* Image and Date */}
        <div className="elementskit-entry-header relative">
          <a href={link} className="elementskit-entry-thumb block">
            <img src={imageUrl} alt={altText} className="w-full h-64 object-cover" />
          </a>
          <div className="elementskit-meta-lists elementskit-style-tag absolute top-4 left-4 bg-white py-1 px-2 rounded">
            <div className="elementskit-single-meta text-center">
              <span className="elementskit-meta-wrapper block text-xs font-bold text-gray-700">
                <strong>{date.split(' ')[0]}</strong> {date.split(' ')[1]}
              </span>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="elementskit-post-body p-6">
          <h2 className="entry-title text-xl font-bold mb-4">
            <a href={link} className="text-gray-800 hover:text-blue-500">{title}</a>
          </h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="btn-wrapper">
            <a href={link} className="elementskit-btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
