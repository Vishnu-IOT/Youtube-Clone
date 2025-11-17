import React from 'react'
import '../styles/Navsection.css'

function SignButton({name,logo}) {
  return (
    <div>
       <button className='btn'>{logo}{name}</button>
    </div>
  )
}

export default SignButton
