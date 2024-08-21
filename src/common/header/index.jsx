import React from 'react'
import './header.scss'
import logo1 from '../../assets/logo1.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
        <div className="container">
            <div className="logo">
                <img src={logo1} alt="" />
            </div>
            <div className='nav'>
                <Link to={'/'} href="">Home</Link>
                <Link to={'/gift'} href="">Gift</Link>
                <Link to={'/order'} href="">Order</Link>
                <Link to={'/store'} href="">Store</Link>
            </div>
            <div className='search'>
                <input type="text" placeholder='Search here'/>
            </div>
        </div>
    </div>
  )
}
