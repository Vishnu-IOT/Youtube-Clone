import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import '../styles/Mainstyles.css';
import { IoIosContact, IoMdContact, IoMdHome } from 'react-icons/io';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdSubscriptions } from 'react-icons/md';
import { LuHistory } from 'react-icons/lu';
import SignButton from './SignButton';
import { Link } from 'react-router-dom';

function Home({ coll }) {
    console.log(coll);
    // toggled={coll} collapsedWidth="60px" collapsed={coll} width='230px' backgroundColor="#000000"
    return (
        <div className='sidediv' >

            {/* <div className='sidebar' style={{ display: coll ? 'none' : 'flex' }} >
                <div className='menu1'>
                    <p className='para'><Link to={"/"}><IoMdHome fontSize={"30px"} />Home</Link></p>
                    <p className='para'><SiYoutubeshorts fontSize={"30px"} /> Shorts </p>
                    <p className='para'><MdSubscriptions fontSize={"30px"} /> Subscriptions </p><hr />
                    <p className='para'> <IoIosContact fontSize={"30px"} /> You </p>
                    <p className='para'> <LuHistory fontSize={"30px"} /> History </p><hr />
                    <p className='para'>Sign in to Like videos, comment and Subscribe.</p>
                    <span >
                        <SignButton name="Sign In" logo={<IoMdContact className='searchlogo' />} />
                    </span><hr />
                    <p className='para'> Shopping </p>
                    <p className='para'> Music </p>
                    <p className='para'> Flim </p>
                    <p className='para'> Live </p>
                    <p className='para'> Gaming </p>
                    <p className='para'> News </p>
                    <p className='para'> Sport </p>
                    <p className='para'> Course </p>
                    <p className='para'> Fashsion & Beauty </p>
                    <p className='para'> Podcasts </p>
                </div>
            </div> */}


            {/* <Sidebar width='60px' backgroundColor="#000000" className='sidebar2' style={{ display: coll?'flex':'none'}}>
                <Menu>
                    <MenuItem icon={<IoMdHome fontSize={"100px"} />}> </MenuItem>
                    <MenuItem icon={<SiYoutubeshorts fontSize={"100px"} />}>  </MenuItem>
                    <MenuItem icon={<MdSubscriptions fontSize={"100px"} />}>  </MenuItem>
                    <MenuItem icon={<IoIosContact fontSize={"100px"} />}>  </MenuItem>
                    <MenuItem icon={<LuHistory fontSize={"100px"} />}>  </MenuItem>
                </Menu>
            </Sidebar> */}


            <Sidebar width='230px' backgroundColor="#000000" className='sidebar' style={{ display: coll ? 'none' : 'flex' }} >
                <Menu className='menus'>
                    <MenuItem icon={<IoMdHome fontSize={"30px"} />}><Link to={"/"}>Home</Link>  </MenuItem>
                    <MenuItem icon={<SiYoutubeshorts fontSize={"30px"} />}> Shorts </MenuItem>
                    <MenuItem icon={<MdSubscriptions fontSize={"30px"} />}> Subscriptions </MenuItem><hr />
                    <MenuItem icon={<IoIosContact fontSize={"30px"} />}> You </MenuItem>
                    <MenuItem icon={<LuHistory fontSize={"30px"} />}> History </MenuItem><hr />
                    <p >Sign in to Like videos, comment and Subscribe.</p>
                    <span >
                        <SignButton name="Sign In" logo={<IoMdContact className='searchlogo' />} />
                    </span><hr />
                    <MenuItem > Shopping </MenuItem>
                    <MenuItem > Music </MenuItem>
                    <MenuItem > Flim </MenuItem>
                    <MenuItem > Live </MenuItem>
                    <MenuItem > Gaming </MenuItem>
                    <MenuItem > News </MenuItem>
                    <MenuItem > Sport </MenuItem>
                    <MenuItem > Course </MenuItem>
                    <MenuItem > Fashsion & Beauty </MenuItem>
                    <MenuItem > Podcasts </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default Home
