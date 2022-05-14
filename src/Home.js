import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

const {data: blogs, isPending,error} =useFetch("http://localhost:8000/blogs");
 

      


    return (  
        <div className="home">
            {error && <div> <h3>{error} </h3></div>}
            {isPending && <div> <h3>Loading...</h3></div>}
            {blogs && <BlogList  blogs={blogs} title="All blogs" />}
            {/* <button onClick={() => setName("Abshir")}>Change name </button>
            <p>{name}</p> */}
            {/* <BlogList  blogs={blogs.filter((blogs) => blogs.Author === "Abshir")} title="Abshir Blog"/> */}
        </div>
            );

            }
 
export default Home;