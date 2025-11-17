import React, { useState } from 'react'
import '../styles/Navsection.css';
import { FaChromecast, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import logo from "../assets/youtube-logo.webp"
import { IoMdContact, IoMdNotificationsOutline } from 'react-icons/io';
import SignButton from './SignButton';

function Navsection({ onDataChange, onflex }) {
    const [coll, setcoll] = useState(true);
    function all() {
        setcoll(!coll);
        onDataChange(coll);
    }

    return (
        <>
            <nav className='navbar'>
                <div className='startdiv'>
                    <buttton className='onclick' onClick={all}><GiHamburgerMenu /></buttton>
                    <img src={logo} alt='YouTube' className='ytlogo'></img>
                </div>
                <div className='searchdiv'>
                    <div className='searchbar'>
                        <input placeholder='Search'></input>
                        <FaSearch className='searchlogo' />
                    </div>
                    <div className='moblieres'>
                        <FaChromecast className='searchlogomr' />
                        <IoMdNotificationsOutline className='searchlogomr' />
                        <FaSearch className='searchlogomr' />
                    </div>
                </div>
                <div className='sigindiv'>
                    <BsThreeDotsVertical />
                    {/* <button className='btn'><IoMdContact className='searchlogo' />Sign In</button> */}
                    <SignButton name="Sign In" logo={<IoMdContact className='searchlogo' />} />
                </div>
            </nav>
        </>
    )
}

export default Navsection

