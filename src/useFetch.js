// # 20
import { useState,useEffect } from "react";



const useFetch  = (url) => {

    const[data,setData] = useState(null)
    // #18
      const [isPending,setIsPending] = useState(true);
      //#19
      const [error,setEror] = useState(null);

      useEffect(() => {
        setTimeout(() => {
          fetch(url).then((res)=>{
              if(!res.ok){
                  throw Error("we could not fetch data ")
              }
              console.log(res)
              return res.json();
          }).then((data)=>{
              setData(data);
              setIsPending(false);
              setEror(null)
          }).catch((err)=> {
              setEror(err.message)
              setIsPending(false);
          })

        },1000);
        
    },[url]);

    return { data, isPending,error };
}
 
export default useFetch;