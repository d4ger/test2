import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Home() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=3dfa95edb071446bb776f76ab1aa7610&language=es-MX";
  let product = useAxiosGet(url)

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 m-10">
      {product &&
        product.results.map((movie, index) => (
          <div key={index} className="flex">
            <ProductCard movie={movie} />
          </div>
        ))}
    </div>
  );
}

export default Home;
