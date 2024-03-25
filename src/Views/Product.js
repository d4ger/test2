import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieInfo from "../Components/MovieInfo";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Product() {
  const { id } = useParams();
  const url =
    `https://api.themoviedb.org/3/movie/${id}?api_key=3dfa95edb071446bb776f76ab1aa7610&language=es-MX`;
  let product = useAxiosGet(url);

  return (
    <div>
      {product && (
        <div className="">
          <MovieInfo movie={product} />
        </div>
      )}
    </div>
  );
}

export default Product;
