import { useState } from "react";

const Home = () => {

const[name,setName] = useState("Ahmed");
const handleClick = (ah) => {
    console.log("Hello " + ah);
    setName("Ali")
}


    return (  
        <div className="home">
            <h2>Home Page </h2>
            <button onClick={()=>  handleClick("Ahmed")}>Click</button>
            <p>{ name} </p>
        </div>
    );
}
 
export default Home;