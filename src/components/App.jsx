import React, { useState } from "react";

function App() {

    const [isRegister, setRegister] = useState(false);
    const [name, setName] = useState("");
    const [submit, setSubmit] = useState("");

    function register(){
        setRegister(true);
    }

    function handleChange(event){
        const newName = event.target.value;
        setName(newName);
    }
    function handleClick(event){
        console.log("I got clicked");
        setSubmit(event)
    }

    return (

        
        <div className="container">
      
            <h1>{isRegister ? "Welcome back" : "Welcome"} {name} </h1>
            <p>{submit ?"please wait a minute": ""}</p>
            <input onChange={handleChange} placeholder="Username"></input>
            <input placeholder="Password"></input>
            {isRegister ? "" : <input placeholder="Confirm Password"></input>}
            <button onClick={handleClick}>{isRegister ? "Login" : "Register"}</button>
            
        </div>

  )
    

}
export default App;