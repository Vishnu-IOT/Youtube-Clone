import React, { useState } from 'react'
import '../styles/Mainstyles.css';
// import videos from '../assets/video.json'
import { useLocation } from 'react-router-dom';
import SignButton from './SignButton';
import { FaShare } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdFileDownload } from 'react-icons/md';
import { CiSaveDown2 } from 'react-icons/ci';
import { BiLike } from 'react-icons/bi';

function Viewpage({ video2 ,coll }) {
    const location = useLocation();
    const { key } = location.state || {};
    const [desc, setdesc] = useState("fit-content");
    return (
        <div className='maindiv'>
            <div className='dark' style={{ display: coll?'none':'flex'}}>

            </div>
            <div className='mainsec1'>
                <div className='div1'>
                    <iframe src={`https://www.youtube.com/embed/${key.id}`} className='mainimg' title='good' ></iframe>
                    <h2>{key.snippet.title}</h2>
                    <div className='channeltitle'>
                        <div className='ct1'>
                            <span className='imgtag'><img src={require("../assets/ria.png")} alt='ria'/></span>
                            <p>{key.snippet.channelTitle}</p>
                            <SignButton name="Subscribe" />
                        </div>
                        <div className='ct2'>
                            <SignButton logo={<BiLike className='searchlogo' />} />
                            <SignButton name="Share" logo={<FaShare className='searchlogo' />} />
                            <SignButton name="download" logo={<MdFileDownload className='searchlogo' />} />
                            <SignButton name="Save" logo={<CiSaveDown2 className='searchlogo' />} />
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                    <div className='description' style={{ height: desc }} onClick={() => { setdesc((desc === "60px") ? "fit-content" : "60px") }} >
                        {key.snippet.description}
                    </div>
                </div>
            </div>
            <div className='mainsec2'>
                <div className='div2'>
                    {video2.map((key, value) => {
                        return (
                            <div className='sideimg' key={value}>
                                <img src={key.snippet.thumbnails.standard.url} alt="mic" className='thumbimg' />
                                <div className='ctdiv'>
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
        </div>
    )
}

export default Viewpage
