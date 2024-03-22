import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=3dfa95edb071446bb776f76ab1aa7610&language=es-MX";
  const [product, setProduct] = useState(null);

  let content = null;

  const fetchData = () => {
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log("Error fetching product:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  if (product) {
    content = product.results.map((movie, index) => (
      <div key={index}>
        <h1 className="text-2xl font-bold mb-3">{movie.title}</h1>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div></div>
        <div></div>
      </div>
    ));
  }

  return <div>{content}</div>;
}

export default Product;
