import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [isPending,setIsPending]= useState(false);
  // #30
  const history = useNavigate();

  // 28
  const handleSubmit = (e) => {
    e.preventDefault();
    // create object
    const blog = { title, body, author };
    setIsPending(true);

    // 29
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog add");
      setIsPending(false);
      //30
      history("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(evn) => {
            setTitle(evn.target.value);
          }}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(evn) => {
            setBody(evn.target.value);
          }}
        ></textarea>

        <label>Blog author:</label>
        <select
          value={author}
          onChange={(evn) => {
            setAuthor(evn.target.value);
          }}
        >
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
       {!isPending && <button>Add blog</button>}
       {isPending &&<button disabled>Adding blog...</button>}
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
