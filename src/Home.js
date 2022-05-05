import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {


 const[blogs,setBlogs] = useState([
        {title:"nightwalker", Author:"Abshir", id:1},
        {title: "what", Author:"unknow",id:2}
      ]);

      const handleDelete = (id) => {
          const newBlogs = blogs.filter((blog) => blog.id !== id)
          setBlogs(newBlogs);

      }

// const[name,setName] = useState("Ahmed");
// const handleClick = (ah) => {
//     console.log("Hello " + ah);
//     setName("Ali")
// }


    return (  
        <div className="home">
            <BlogList  blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
            <BlogList  blogs={blogs.filter((blogs) => blogs.Author === "Abshir")} title="Abshir Blog"/>
        </div>
            );

            }
 
export default Home;