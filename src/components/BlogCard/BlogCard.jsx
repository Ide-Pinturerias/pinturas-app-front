import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogCard = ({ id, image, title, date, description }) => {
  return (
    <NavLink to={`/blog/${id}`} className="m-4">
      <div className="w-80 h-96 flex flex-col items-center bg-gray-500 rounded-3xl overflow-hidden transition-transform transform hover:scale-105 shadow-2xl">
        <img
          src={image}
          alt="Blog"
          className="w-full h-48 object-cover rounded-t-3xl"
        />
        <div className="flex flex-col justify-between items-center p-3 flex-grow">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-quaternary text-center">
            {title}
          </h3>
          <h4 className="mt-1 text-xs text-center">
            {date}
          </h4>
          <p className="mt-2 text-sm italic text-center overflow-ellipsis overflow-hidden h-16 p">
            {description}
          </p>
        </div>
      </div>
    </NavLink>
  );
}

export default BlogCard;
