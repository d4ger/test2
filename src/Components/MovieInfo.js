import React from "react";
import { Link } from "react-router-dom";


function MovieInfo({ movie }) {
  return (
    <div className="flex flex-col items-center">
        <Link to={`/products/${movie.id}`}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} 
        className="mb-4 rounded-lg overflow-hidden"/>
        </Link>
      <h1 className="text-center text-lg font-bold">{movie.title}</h1>
      <p className="pb-3 text-gray-600">{movie.overview}</p>
      <Link
        to={`/`}
        className="bg-blue-500 text-white p-2 justify-center w-full rounded-md block text-center mt-auto">
            
            Return
      </Link>
    </div>
  );
}

export default MovieInfo;
