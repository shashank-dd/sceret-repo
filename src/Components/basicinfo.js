import React from 'react';
import home from './images/home.png'
import bell from './images/bell.png'
import download from './images/download.png'
import upload from './images/upload.png'
import eye from './images/open-eye.png'
import tag from './images/tag.png'
import user from './images/avatar.png'
import "./basicinfo.css"
function Basicinfo() {
    return (
        <div className='o'>
             <div className='homepage'>
            <div className='div1'>
                <div className='logo'>Logo</div>
                <div className='left-navbar'>
                    <p className='blue'><img className='home' src={home} alt="1" /> Property</p>
                    <p className='grey'><img className='home' src={bell} alt="2" /> Assistance</p>
                    <p className='grey'><img className='home' src={download} alt="3" /> Recieved Intrest</p>
                    <p className='grey'><img className='home' src={upload} alt="4" /> Sent Intrest</p>
                    <p className='grey'><img className='home' src={eye} alt="5" /> Property Views</p>
                    <p className='grey'><img className='home' src={tag} alt="6" /> Tarrif Plan</p>
                </div>
            </div>
            <div className='div2'>
                <div className='header'>
                    <div className='userid'><p>USER ID : 06PPD2357</p></div>
                    <div className='user'>
                        <img src={user} alt="7" />
                        <select>
                            <option selected>User Name</option>
                            <option>Log out</option>
                        </select>
                    </div>
                </div>
                <div className='line'></div>
                <div className='aa'>Add new Property</div>
                <div className='bb'>
                    <div className='t1'>
                        <div className='t11'><p id='w'>1</p></div>
                        <div className='t12'>Basic Info</div>
                    </div>
                    <div className='t2'>
                        <div className='t21'><p id='w2'>2</p></div>
                        <div className='t22'>Property  Detail</div>
                    </div>
                    <div className='t3'>
                        <div className='t31'><p id='w3'>3</p></div>
                        <div className='t32'>General Info</div>
                    </div>
                    <div className='t4'>
                        <div className='t41'><p id='w4'>4</p></div>
                        <div className='t42'>Location Info</div>
                    </div>
                </div>
                <div className='kk'>
                    <div className='table'>


                        <label className='p1'>Property type</label>

                        <select className='g1'>
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>

                        <label className='p2'>Negotable</label>

                        <select className='g2' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>

                        <label className='p3'>Price</label>
                        <input className='g3' placeholder='Example: 10000'></input>
                        <label className='p4'> Ownership</label>

                        <select className='g4' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>
                        <label className='p5'>Property age</label>

                        <select className='g5' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>
                        <label className='p6'>Propert approved</label>

                        <select className='g6' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>
                        <label className='p7'>Property description</label>
                        <input className='g7' ></input>
                        <label className='p8'>Bank loan </label>

                        <select className='g8' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>





                    </div>
                </div>



            </div>
        </div>
        </div>
       
    )
}
export default Basicinfo;