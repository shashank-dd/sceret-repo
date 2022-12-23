
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Login.css'
let Login = () =>{
    let [details,setdetails] = useState({email:"",password:""})
    let Changehandler = (e)=>{
        setdetails({
            ...details,
            [e.target.name]:e.target.value

const express=require("express")
const Login =require("../models/login.js")
const bcrypt = require('bcrypt');
route=express.Router();
route.use(express.json())
const cors = require("cors")
route.use(cors({
    origin: "*",
}))

// const secret="ghg"


const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

/* route.post('/login',async (req,res)=>{
    try{
       console.log(req.body)
        
    let user = await login.findOne({email:req.body.email})
    console.log(user,1)
    if(!user){
       return  res.status(409).json({
            status:'failure',
            message:'user dont exist plss singup'

        })
    }
    console.log("ppppp")

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: user.email
      }, secret);


     res.json({
        status: "Success",
        message: "Login Succesful",
        token:token
    })
    
   
 } catch(e){
     res.status(401).json({
        status: "Failed",
        message: e.message
    })
    }

     function submitHandler (){
       
        console.log(details)
    //   const logindata =  await fetch("http://localhost:8080/login/login", { method: 'post', body: details }).then((res) => res.json()).then((data) => { console.log(data);
      axios.post("http://localhost:8080/login/login",details).then(response =>{
        console.log(response)
        console.log(response.data)
        if(response.data.Status === "ok"){
            alert('login successfull')
            window.localStorage.setItem("token",response.data.token)
            window.location.href="/homepage"
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


 }) */
 route.get("/",(req,res)=>{
    res.send("ok")
 })
 route.post("/login", async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    const userData = await Login.findOne({email:email});
    
    console.log(userData)
    if (userData) {
        // is await requred for bcrypt???
        let result = await bcrypt.compare(password, userData.password);
        if (result) {
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
                data: userData.email,
            },
                process.env.SECRET
            );
            res.status(200).json({
                Status: "ok",
                token: token,
            });
        } else {
            res.status(400).json({
                status: "failed",
                message: "Wrong Password",
            });
        }
    }
    else {
        res.status(400).json({
            status: "failed",
            message: "No user Found",
        });
    }
});




module.exports = route;
