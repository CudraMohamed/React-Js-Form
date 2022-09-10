import React, { useState } from "react";
import {FaFacebook} from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Props from "./Props";
import Render from "./Render";

const logoImg=new URL('./logoo.png',import.meta.url)
const bikerImg=new URL('./biker.png',import.meta.url)

const EddieForm=()=>{

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleSubmit=()=>{
        const data={
            email:email,
            password:password
        }
        alert(JSON.stringify(data))
    }
    return(
        <div className="form">
            <div className="fillingForm">
                <form onSubmit={handleSubmit}>
                    <img src={logoImg} className="EddieForm-logo" alt="logo" width={200}/>
                    <h1>Welcome Back</h1><br/>
                    <h4>Your email <br/><input className="input" placeholder="name@domain.com" onChange={(e)=>{setEmail(e.target.value)}} /></h4><br/>
                    <h4>Password <br/><input className="input" placeholder="at least 8 characters" onChange={(e)=>{setPassword(e.target.value)}}/></h4><br/>
                    <div className="keep"><h4 wi><input type="checkbox" name="checkbox" id="checkbox"/> Keep me logged in</h4><br/>
                    <p>Forgot password?</p></div><br/>
                    <button type="submit">Login</button><br/><br/>
                    <h3>____________or____________</h3><br/>
                    <div className="social-media">
                    <FaFacebook className="facebook"/>
                    <FaGooglePlus className="google"/>
                    <FaInstagram className="instagram"/>
                    </div>

                    <Props email={email? email:"loading..."}/>

                </form>

            </div>
            <div className="biker">
                <h4 className="signUp">Don't have an account? <a href="#">Sign Up</a></h4>
                <img src={bikerImg} alt="biker" className="bikerImage"/>
            </div>
            
            {/* {email? <Props email={email}/>:<Render/>} */}
            {/* <Props email={"ncudramohamed@gmail.com"}/> */}
           
        </div>
    )
}
export default EddieForm;