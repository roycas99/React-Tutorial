import { useParams,useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  //#25
  const { id } = useParams();
  const history = useNavigate();

  //#26
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  // 31 
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history("/")
    })
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
