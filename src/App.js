
import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react';
function App() {
 // variable dynamic value 
 //const title = "Welcome to the Abshir Blog"
const[blogs,setBlogs] = useState([
  {title:"nightwalker", Author:"Abshir", id:1},
  {title: "what", Author:"unknow",id:2}
])

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
       {blogs.map((blog) => (
         <div className="blog-preview" key={blog.id}>
           <h2>{blog.title}</h2>
           <p>written by {blog.Author}</p>
         </div>
       ))}
      </div>
    </div>
  );
}

export default App;
