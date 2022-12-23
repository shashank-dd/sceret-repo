
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

const express=require("express")

let bodyParser = require('body-parser')
const Login =require("../models/login.js")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
route=express.Router();
const cors = require("cors")
route.use(cors({
    origin: "*",
}))

route.use(express.json())
route.use(bodyParser.json())
route.use(bodyParser.urlencoded())
/* route.post('/register',async (req, res) =>{
    try{
        const {email,password,confirmpassword} = req.body;
        let exist = await Login.findOne({email})
        if(exist){
            return res.status(400).send('User Already Exist')
        }
        if(password !== confirmpassword){
            return res.status(400).send('Passwords are not matching');
        }
        let newUser =  await Login.create({
           
            email,
            password,
            confirmpassword
        })
        await newUser.save();
        res.status(200).send('Registered Successfully')
        

    }
    catch(err){
        console.log(err)
        return res.status(500).send('Internel Server Error')
    }
})
 */
route.post('/register', async (req, res) => {
    try {
        console.log("its coming")
        console.log(req.body)
        const { email, password, confirmpassword } = req.body;
        
        let userData = await Login.findOne({ email :email });
        if (userData) {
            return res.status(409).json({
                status: "Failed",
                message: "User already exists with the given email"
            })
        }
        console.log(password,confirmpassword)
        if (password !== confirmpassword) {
            return res.status(400).send('Passwords are not matching');
        }

        bcrypt.hash(password, 10, async function (err, hash) {
            // Store hash in your password DB.
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: err.message
                })
            }
            userData = await Login.create({
                email: email,
                password: hash
            });
            res.json({
                status: "ok",
               
                
            })
        })
    }
    catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
});
module.exports= route;


 /* route.post('/register',async (req,res)=>{
    try{
       console.log(req.body)
        
    let user = await login.findOne({email:req.body.email})
    console.log(user,1)
    if(user){
       return  res.status(409).json({
            status:'failure',
            message:'user already exists with the given email'
        })
    }
    console.log("ppppp")
    // bcrypt.hash(password,10,async function(err,hash){
    //     if(err){
    //         return res.status(500).json({
            
    //             status:'failed',
    //             message:err.message
    //         })
    //     }
    console.log("going")
    const use = await login.create({
        
        email:req.body.email,
        password:req.body.password
    });
    
    res.json({
        status:'sucesss',
        message:use})
    
    }
    catch(e){
        res.json({
            status:'failure',
            message:e.message
        })
    }

 })
 */
