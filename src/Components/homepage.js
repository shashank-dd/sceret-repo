import React from 'react';
import home from './images/home.png'
import bell from './images/bell.png'
import download from './images/download.png'
import upload from './images/upload.png'
import eye from './images/open-eye.png'
import tag from './images/tag.png'
import user from './images/avatar.png'
import "./homepage.css"
function HomePage(){
    return(
        <div className='homepage'>
            <div className='div1'>
                <div className='logo'>Logo</div>
                <div className='left-navbar'>
                <p className='blue'><img className='home' src={home} alt="1"/> Property</p>
                <p className='grey'><img className='home' src={bell} alt="2"/> Assistance</p>
                <p className='grey'><img className='home' src={download} alt="3"/> Recieved Intrest</p>
                <p className='grey'><img className='home' src={upload} alt="4"/> Sent Intrest</p>
                <p className='grey'><img className='home' src={eye} alt="5"/> Property Views</p>
                <p className='grey'><img className='home' src={tag} alt="6"/> Tarrif Plan</p>
                </div>
            </div>
            <div className='div2'>
                <div className='header'>
                    <div className='userid'><p>USER ID : 06PPD2357</p></div>
                    <div className='user'>
                    <img src={user} alt="7"/>
                  <select>
                        <option selected>User Name</option>
                        <option>Log out</option>
                    </select>
                  </div>
                </div>
                <div className='line'></div>
                <div className='div3'></div>
            </div>
        </div>
    )
}
export default HomePage;