import React from "react";
import { Link } from "react-router-dom";
import './Register.css'
let Register = () =>{
    return(
        <div className="card-container">
           
                <div className="register">
                <div>
                   <h1 className="logo">Logo</h1>

                </div>
                <div className="create">Create New Account </div>
                <div>
                    <input type="text" placeholder="MaildID" />
                </div>
                <div>
                    <input type="text" placeholder="Password" />
                </div>
                <div>
                    <input type="text" placeholder="ConformPassword" />
                </div>
               <Link  to="/"><button>Signup</button></Link>    
                </div>
                <div className="child-div">
                    <Link   to="/homepage"><p>signIn</p></Link>
                </div>
              
          
        </div>
    )

}
export default Register