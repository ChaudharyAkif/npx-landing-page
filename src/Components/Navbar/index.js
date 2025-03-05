import React from 'react'
import logo from '../../Assets/images/brand_logo.png'
import { Button } from 'antd'

const Navigation = () => {
  return (
<nav className='container d-flex justify-content-between align-items-center'>
<div className="logo">
    <img src={logo} alt="Brand_logo" />
</div>
    <ul className='d-flex justify-content-between list-inline gap-5 '>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <Button type='primary' >Login</Button>
</nav>
  )
}

export default Navigation
