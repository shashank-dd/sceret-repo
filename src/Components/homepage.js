import React from 'react';
import home from '../components/images/home.png'
import bell from '../components/images/bell.png'
import download from '../components/images/download.png'
import upload from '../components/images/upload.png'
import eye from '../components/images/open-eye.png'
import tag from '../components/images/tag.png'
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
            <div className='div2'></div>
        </div>
    )
}
export default HomePage;