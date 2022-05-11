import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {


 const[blogs,setBlogs] = useState([
        {title:"nightwalker", Author:"Abshir", id:1},
        {title: "what", author:"unknow",id:2}
      ]);

      const [name,setName] = useState("Mario")

      

      useEffect(() => {
          fetch('http://localhost:8000/blogs').then((res)=>{
              return res.json();
          }).then((data)=>{
              setBlogs(data)
          })
      },[])

// const[name,setName] = useState("Ahmed");
// const handleClick = (ah) => {
//     console.log("Hello " + ah);
//     setName("Ali")
// }


    return (  
        <div className="home">
            {blogs && <BlogList  blogs={blogs} title="All blogs" />}
            {/* <button onClick={() => setName("Abshir")}>Change name </button>
            <p>{name}</p> */}
            {/* <BlogList  blogs={blogs.filter((blogs) => blogs.Author === "Abshir")} title="Abshir Blog"/> */}
        </div>
            );

            }
 
export default Home;