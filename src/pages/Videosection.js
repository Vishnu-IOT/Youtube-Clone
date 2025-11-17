// import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import '../styles/Mainstyles.css';
import { useNavigate } from 'react-router-dom';
import { IoIosContact, IoMdHome } from 'react-icons/io';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdSubscriptions } from 'react-icons/md';
import { LuHistory } from 'react-icons/lu';
import { FaRegCompass } from 'react-icons/fa';

function Videosection({ video1, coll }) {
    const navigate = useNavigate();

    return (
        <div className='videosec' style={{ width: coll ? "95%" : "84%", left: coll ? "10vh" : "33vh" }}>
            <div className='sideicon' style={{ display: coll?'flex':'none'}} >
                <div>
                    <h1><IoMdHome /></h1>
                    <h1><SiYoutubeshorts /></h1>
                    <h1><MdSubscriptions /> </h1>
                    <h1><IoIosContact /></h1>
                    <h1><LuHistory /></h1>
                </div>
            </div>
            <div className='marqueediv' style={{ left: coll ? "10vh" : "34vh" }}>
                <p><FaRegCompass /></p>
                <p>All</p>
                <p>SidSriram</p>
                <p>Live</p>
                <p>Anirudh</p>
                <p>G.V.Prakash</p>
                <p>A.R.Rahuman</p>
                <p>Singers</p>
                <p>Playlist</p>
                <p>BusVibes</p>
                <p>Music</p>
                <p>Gamings</p>
                <p>News</p>
                <p>TamilMedia</p>
                <p>WebDevelopment</p>
                <p>Rythms</p>
                <p>TamilTelevisionDrama</p>
                <p>RecentlyUploaded</p>
                <p>Watched</p>
            </div>
            <div className='imagediv'>
                {video1.map((key, index) => {
                    return (
                        <div key={index} className='mapdiv' style={{ width: coll ? "450px" : "400px" }} onClick={() => navigate("/navi", { state: { key } })}>
                            <img src={key.snippet.thumbnails.standard.url} style={{ width: coll ? "430px" : "380px" }} alt='card' />
                            <div className='mapp'>
                                <div className='imgtag'><img src={require('../assets/johnmilet.png')} alt='logo' /></div>
                                <div>
                                    <p>{key.snippet.title}</p>
                                    <p className='ctptag'>{key.snippet.channelTitle}</p>
                                    <p className='ctptag'>182K Views | 3 days ago</p>
                                </div>
                                <span><BsThreeDotsVertical /></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Videosection
