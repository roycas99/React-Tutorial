// # 20
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  // #18
  const [isPending, setIsPending] = useState(true);
  //#19
  const [error, setEror] = useState(null);

  useEffect(() => {
    //24
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("we could not fetch data ");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setEror(null);
        })
        .catch((err) => {
          // when fetch throw error. if err is abort,display fetch aborted#24
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setEror(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    // #24
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
