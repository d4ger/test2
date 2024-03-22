// ProductCard.js
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProductCard({ movie }) {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4">
        <Link to={`/products/${movie.id}`}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} 
        className="mb-4 rounded-lg overflow-hidden"/>
        </Link>
      <h1 className="text-center text-lg font-bold">{movie.title}</h1>
      <p className="pb-3 text-gray-600">{movie.overview}</p>
      <Link
        to={`/products/${movie.id}`}
        className="bg-blue-500 text-white p-2 justify-center w-full mt-4 rounded-md block text-center">
            
            View
      </Link>
    </div>
  );
}

export default ProductCard;
