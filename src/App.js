import Navbar from "./Navbar";
import Home from "./Home";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
function App() {
  // variable dynamic value
  //const title = "Welcome to the Abshir Blog"

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
          <Route  exact path="/" element={<Home/>}></Route>
          <Route   exact path="/create" element={<Create/>}> </Route>
          <Route   exact path="/blogs/:id" element={<BlogDetails/>}> </Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
