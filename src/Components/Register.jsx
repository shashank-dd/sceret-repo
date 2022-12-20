import React from "react";
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
                <button>Signup</button>
                </div>
                <div className="child-div">
                    <p>signIn</p>
                </div>
              
          
        </div>
    )

}
export default Register