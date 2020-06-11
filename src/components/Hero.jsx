import React, { useState } from "react";
import {AiOutlineUser} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"
import {AiOutlineEye} from "react-icons/ai"

function Hero (){

    const [isRegister, setRegister] = useState(true)
    const [name, setName] = useState("");
    const [submit, setSubmit] = useState("");
    const [isPasswordHide, setPasswordHide] = useState(true)

    function register(e){
        setRegister(!isRegister);
        console.log(isRegister)
        e.preventDefault();
    }

    function handleChange(event){
        const newName = event.target.value;
        setName(newName);
    }
    function handleClick(event){
        console.log("I got clicked");
        setSubmit(event)
    }
    function showPassword(){
        setPasswordHide(!isPasswordHide);
        console.log("I got Clicked")
    }

    return (
        <div className="container">
           <div className="user">

             <div className="user-info">
               <h1>{isRegister ? "Login Here" : "Register Here"}</h1>
               <hr/>
               <form action="/">
                  <h2>{isRegister ? `Welcome back ${name}`: "Welcome"} </h2>
                  <p>{submit ?"please wait a minute": ""}</p>
                  <div className="username-input">  
                    <div className="user-icon">
                       <AiOutlineUser />
                    </div>             
                     <input onChange={handleChange} placeholder={isRegister ? "Username" : "Email"}></input>   
                  </div>
                  <div className="password-input">
                    <div className="lock-icon">
                       <RiLockPasswordLine />
                    </div>
                    <input type={isPasswordHide ? "password" : "text"} placeholder="Password"></input>
                    <div className="show-password-icon">
                       <AiOutlineEye onClick={showPassword}/>
                    </div>
                    
                  </div>
                  {isRegister ? "" :<div className="password-input">
                    <div className="lock-icon">
                       <RiLockPasswordLine />
                    </div>
                    <input type="password" placeholder="Confirm Password"></input>
                  </div>}
                  <button onClick={handleClick}>{isRegister ? "Login" : "Register"}</button> 
                  
                  {isRegister ? <div className="login-options">
                  <a href="#" className="new-account">Forgot your password?</a>
                  <a href="#" onClick={register} className="new-account">New? Create a new account</a>
                  </div>
                   :
                   <div className="login-options">
                  <a href="#" onClick={register} className="new-account">Already have an account? Login</a>
                  </div>}
                  
               </form>
             </div>
           </div>
          <div className="logo">
               <div className="logo-detail">
                  <img src="./images/Logo.png" width="128" height="64" alt="logo"/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Cursus sit amet dictum sit amet justo donec enim</p>
               </div>
           </div>                    
        </div>
    )
}

export default Hero;