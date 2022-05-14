import { useParams } from "react-router-dom";

const BlogDetails = () => {
    //#25
const {id } = useParams()

    return (  <div className="blog-details">
        <h2>Blog Details - {id}</h2>
    </div> );
}
 
export default BlogDetails;