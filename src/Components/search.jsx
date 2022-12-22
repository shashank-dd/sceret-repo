import React from "react";
import search from './images/search.png'
import plus from './images/plus.png'
import './search.css'
import { Link } from "react-router-dom";
function Search(){
    // userdata[0].name
    return(
        <div className='div3'>
                <div className='searchbar'>
                    <input type="text" placeholder="search PPD ID"/>
                    <div className='vline'></div>
                    <img src={search} alt="8"/>
                </div>
                <div className='property'>
                    <img src={plus} alt=""/>
                  <Link to="/basicinfo" state={{name:"hjhvjhv"}}><span>Add Property</span></Link>  
                </div>
            </div>
    )
}
export default Search;