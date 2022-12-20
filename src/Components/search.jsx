import React from "react";
import search from './images/search.png'
import plus from './images/plus.png'
function Search(){
    return(
        <div className='div3'>
                <div className='searchbar'>
                    <input type="text" placeholder="search PPD ID"/>
                    <div className='vline'></div>
                    <img src={search} alt="8"/>
                </div>
                <div className='property'>
                    <img src={plus} alt=""/>
                    <span>Add Property</span>
                </div>
            </div>
    )
}
export default Search;