import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'
let Login = () =>{
    let [details,setdetails] = useState({email:"",password:""})
    let Changehandler = (e)=>{
        setdetails({
            ...details,
            [e.target.name]:e.target.value
        })
       // console.log(details)

    }
    async function submitHandler (e){
       e.preventDefault()
        console.log(details)
      const logindata= await axios.post("http://localhost:5000/login/login",details)
      if(data.status === "ok"){
        alert('login successfull')
        window.localStorage.setItem("token",data.token)
        window.location.href="/homepage"
      }
     
     
    return(
        <div className="Login-containerz">
           
               <form action="" onSubmit={submitHandler} >
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
                
               <button className="buttonz" type="submit">SignIn</button>
                <div >
                  <Link   to="/register">  <p>signUp</p></Link>
                </div>
                </div>
              
                </form>
                <div className="child-div">
                    Dont have account?  <Link to="/register">  <p>Signup </p></Link>
                </div>
              
          
        </div>
    )

}
export default Login