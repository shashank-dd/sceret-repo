import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

let Login = () =>{
    const navigate=useNavigate()
    let [details,setdetails] = useState({email:"",password:""})
    let Changehandler = (e)=>{
        setdetails({
            ...details,
            [e.target.name]:e.target.value
        })
      }
     function submitHandler (){
        console.log(details)
      axios.post("https://backendreal.onrender.com/login/login",details).then(response =>{
        console.log(response)
        console.log(response.data)
        if(response.status==400){
            alert(response.data.message)
        }
        if(response.data.Status === "ok"){
            alert('login successfull')
            window.localStorage.setItem("token",response.data.token)
            navigate("/homepage")
            // window.location.href="/homepage"
          }
    }).catch(error =>{console.log(error)})
   }
     return(
        <div className="Login-containerz">
           <div className="Loginz">
                <div>
                   <h1 className="orangez">Logo</h1>
                   </div>
                <div className="createz">Enter your credentials to your account</div>
                <div>
                    <input type="text" placeholder="MaildID" name="email" onChange={Changehandler} />
                </div>
                <div>
                    <input type="text" placeholder="Password" name='password' onChange={Changehandler} />
                </div>
                <button className="buttonz" onClick={submitHandler}>SignIn</button>
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