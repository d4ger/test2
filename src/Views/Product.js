import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieInfo from "../Components/MovieInfo";

function Product() {
  const { id } = useParams();
  const url =
    `https://api.themoviedb.org/3/movie/${id}?api_key=3dfa95edb071446bb776f76ab1aa7610&language=es-MX`;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProduct(response.data); // Tomar solo la primera película de la lista
        console.log(response.data.results);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

    fetchData();
  }, [url]);

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
