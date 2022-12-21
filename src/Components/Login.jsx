import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
let Login = () =>{
    return(
        <div className="Login-containerz">
           
                <div className="Loginz">
                <div>
                   <h1 className="orangez">Logo</h1>

                </div>
                <div className="createz">Enter your credentials to your account</div>
                <div>
                    <input type="text" placeholder="MaildID" />
                </div>
                <div>
                    <input type="text" placeholder="Password" />
                </div>
                
               <button className="buttonz">SignIn</button>
                <div >
                  <Link   to="/register">  <p>signUp</p></Link>
                </div>
                </div>
                
                <div className="child-div">
                    Dont have account?  <Link to="/register">  <p>Signup </p></Link>
                </div>
              
          
        </div>
    )

}
export default Login