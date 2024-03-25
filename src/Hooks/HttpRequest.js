import { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosGet(url){
    const [request, setRequest] = useState({
      loading: false,
      data: null,
    });

    useEffect(() => {
        setRequest({
          loading: true,
          data: null,
        })
        const fetchData = async () => {
          try {
            const response = await axios.get(url);
            setRequest({
              loading: false,
              data: response.data
            });
            
          } catch (error) {
            console.log("Error fetching product:", error);
          }
        };
    
        fetchData();
      }, [url]);

      return request
}
