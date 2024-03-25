import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosGet(url){
    const [request, setRequest] = useState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(url);
            setRequest(response.data);
          } catch (error) {
            console.log("Error fetching product:", error);
          }
        };
    
        fetchData();
      }, [url]);

      return request
}