import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import './Register.css'
let Register = () =>{
    let [user,setusers] = useState({email:"",password:"",confirmpassword:""})
    let [formerrors,setformerrors] = useState({}) 
    let Changehandler = (e) =>{
        setusers({
            ...user,
            [e.target.name]:e.target.value
        });

    }
    async function submithandler  (e){
       e.preventDefault()
        setformerrors(validate(user))
        console.log(user)
       /*  const config ={
            headers: {
                'Content-Type': 'application/json'
            }
          }
       const   data=await  axios.post("http://localhost:5000/register/register", user, config)
            console.log(data) */
            axios.post("http://localhost:5000/register/register",user).then(response =>{console.log(response)}).catch(error =>{console.log(error)})
        //await fetch("http://localhost:8080/register/register", { method: 'post', body: user }).then((res) => res.json()).then((data) => { console.log(data); }).catch((e) => console.log(e))
    }
    
    let validate = (values) =>{
       
        if(!values.email){
            alert('email is required')
        }
        if (!values.password) {
            alert('password is required')
          } else if (values.password.length < 4) {
           alert("Password must be more than 4 characters");
          } else if (values.password.length > 10) {
            alert("Password cannot exceed more than 10 characters");
          }
          if(!values.confirmpassword){
            alert('confirmpassword is required')
          }
          else if(values.password!==values.confirmpassword){
            alert('password are not matching')
          }
    }
   return(
        <div className="card-containers">
           
           
               <form action=""  onSubmit={submithandler}>
                <div className="registers">
                <div>
                   <h1 className="logos">Logo</h1>

                </div>
                <div className="creates">Create New Account </div>
                <div>
                    <input type="email" placeholder="MaildID" name="email" onChange={Changehandler} />
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" onChange={Changehandler} />
                </div>
                <div>
                    <input type="password" placeholder="ConformPassword" name="confirmpassword" onChange={Changehandler} />
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