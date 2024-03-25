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
      <p className="pb-3 text-gray-600 mb-10 w-1/2">{movie.overview}</p>
      <Link
        to={`/`}
        className="bg-blue-500 text-white p-3 justify-center w-1/4 rounded-md block text-center mt-auto m-4">
            
            Return
      </Link>
    </div>
  );
}

export default MovieInfo;
