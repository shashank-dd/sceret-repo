import React from "react";
import { Link } from "react-router-dom";
import './Register.css'
let Register = () =>{
    return(
        <div className="card-containers">
           
                <div className="registers">
                <div>
                   <h1 className="logos">Logo</h1>

                </div>
                <div className="creates">Create New Account </div>
                <div>
                    <input type="text" placeholder="MaildID" />
                </div>
                <div>
                    <input type="text" placeholder="Password" />
                </div>
                <div>
                    <input type="text" placeholder="ConformPassword" />
                </div>
               <Link  to="/"><button className="buttons">Signup</button></Link>    
                </div>
                <div className="child-div">
                    <Link   to="/homepage"><p>signIn</p></Link>
                </div>
              
          
        </div>
    )

}
export default Register