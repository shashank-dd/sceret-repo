import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Register.css'
let Register = () => {
    let [user, setusers] = useState({ email: "", password: "", confirmpassword: "" })
    let [formerrors, setformerrors] = useState(0)

     function submithandler(e) {
        console.log("1")
        setformerrors(validate(user))
    
    
            console.log(user)
         
            axios.post("http://localhost:8080/register/register",user).then(response =>{
                console.log(response.data.status)
                if(response.data.status==="ok"){
                            window.location.href="/"
                }
        
        
        }).catch(error =>{console.log(error)})
            
            //  fetch("http://localhost:8080/register/register", { method: 'post', body: user }).then((res) => res.json()).then((data) => { console.log(data); }).catch((e) => console.log(e))
        

    }

    let validate = (values) => {

        if (!values.email) {
            alert('email is required')
            return 1
        }
        if (!values.password) {
            alert('password is required')
            return 1
        } else if (values.password.length < 4) {
            alert("Password must be more than 4 characters");
            return 1
        } else if (values.password.length > 10) {
            alert("Password cannot exceed more than 10 characters");
            return 1
        }
        if (!values.confirmpassword) {
            alert('confirmpassword is required')
            return 1
        }
        else if (values.password !== values.confirmpassword) {
            alert('password are not matching')
            return 1
        }
    }
    return (
        <div className="card-containers">



            <div className="registers">
                <div>
                    <h1 className="logos">Logo</h1>

                </div>
                <div className="creates">Create New Account </div>
                <div>
                    <input type="email" placeholder="MaildID" onChange={(e) => { setusers({ ...user, email: e.target.value }) }} />
                </div>
                <div>
                    <input type="password" placeholder="Password" onChange={(e) => { setusers({ ...user, password: e.target.value }) }} />
                </div>
                <div>
                    <input type="password" placeholder="ConformPassword" onChange={(e) => { setusers({ ...user, confirmpassword: e.target.value }) }} />
                </div>
                <button className="buttons" onClick={submithandler} >Signup</button>
            </div>

            <div className="child-div">
                <Link to="/"><p>signIn</p></Link>
            </div>


        </div>
    )

}
export default Register



/* import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css'
let Register = () =>{
    let [email,setemail] = useState(" ")
    let [password,setpassword] = useState(" ");
    let [confirmpassword,setconfirm] = useState(" ");
    let Handlesubmit = async (event) =>{
        event.preventDefault();
        let registerdetails = new FormData();
        registerdetails.append('email',email)
        registerdetails.append('password',password)
        registerdetails.append('confirmpassword',confirmpassword);
        
        await fetch("http://localhost:5000/users",{method: 'post', body: registerdetails}).then((res) => res.json()).then((data) => { console.log(data); }).catch((e) => console.log(e))
        console.log(email,password,confirmpassword)
    }

   return(
        <div className="card-containers">
            <pre>{JSON.stringify({email,password,confirmpassword})}</pre>
           
                <form onSubmit={Handlesubmit}>
                <div className="registers">
                <div>
                   <h1 className="logos">Logo</h1>

                </div>
                <div className="creates">Create New Account </div>
                <div>
                    <input type="text" placeholder="MaildID"  onChange={(e)=>{setemail(e.target.value)}}/>
                </div>
                <div>
                    <input type="text" placeholder="Password"  onChange={(e)=>{setpassword(e.target.value)}}/>
                </div>
                <div>
                    <input type="text" placeholder="ConformPassword" onChange={(e)=>{setconfirm(e.target.value)}}/>
                </div>
              <button className="buttons" >Signup</button>   
                </div>
                </form>
                <div className="child-div">
                    <Link   to="/"><p>signIn</p></Link>
                </div>
              
          
        </div>
    )

}
export default Register */