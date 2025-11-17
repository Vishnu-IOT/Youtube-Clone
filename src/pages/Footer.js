import React from 'react'
import '../styles/Footer.css'
import { IoIosContact, IoMdAdd, IoMdHome } from 'react-icons/io'
import { MdSubscriptions } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footersec'>
      <Link to={"/"} ><IoMdHome fontSize={"30px"} color='white' /></Link>
      <SiYoutubeshorts fontSize={"30px"} />
      <IoMdAdd fontSize={"30px"} />
      <MdSubscriptions fontSize={"30px"} />
      <IoIosContact fontSize={"30px"} />
    </footer>
  )
}

export default Footer
