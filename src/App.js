
import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react';
function App() {
 // variable dynamic value 
 //const title = "Welcome to the Abshir Blog"


  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home/>
         </div>
       
      
    </div>
  );
}

export default App;
