import { useEffect, useState } from "react";

 

export const useFetch = (apiPath) => {

 const [data, setData] = useState([]);

 const url = `https://fakestoreapi.com/${apiPath}`
 console.log(url)
 

 useEffect(() => {
    async function fetchMovie() {
      let response = await fetch(url);
      let listdata = await response.json();
      setData(listdata);
    }
    fetchMovie();
  }, [url]);
  return {data}
}
