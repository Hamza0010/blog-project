import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setData(data)
      });
  }, [url]);

  return {data:data,isLoading:isLoading};
};

export default useFetch;