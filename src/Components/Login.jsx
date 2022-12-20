import React from "react";
import './Login.css'
let Login = () =>{
    return(
        <div className="Login-container">
           
                <div className="Login">
                <div>
                   <h1 className="logo">Logo</h1>

                </div>
                <div className="create">Enter your credentials to your account</div>
                <div>
                    <input type="text" placeholder="MaildID" />
                </div>
                <div>
                    <input type="text" placeholder="Password" />
                </div>
                
                <button>SignIn</button>
                <div >
                    <p>signUp</p>
                </div>
                </div>
                
                <div className="child-div">
                    Dont have account?Signup
                </div>
              
          
        </div>
    )

}
export default Login