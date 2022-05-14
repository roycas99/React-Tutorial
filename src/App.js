import Navbar from "./Navbar";
import Home from "./Home";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Create from "./Create";
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
          <Route   exact path="/create" element={<Create/>}> 
          </Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
