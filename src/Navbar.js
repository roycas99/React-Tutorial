import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1> Kirchoff Memories</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New BLOG</Link>

            </div>
        </nav>
    );
}
 
export default Navbar;