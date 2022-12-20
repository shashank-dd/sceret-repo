import React from "react";
import './homepage.css';
import user from './images/avatar.png'
function Header(){
    return(
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
    )
}
export default Header;