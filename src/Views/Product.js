import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

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
      <div key={index} className="">
        <ProductCard 
          movie={movie}/>
        
      </div>
    ));
  }

  return <div>{content}</div>;
}

export default Product;
