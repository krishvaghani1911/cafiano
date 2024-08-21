import React from 'react'
import './art.scss'
import img13 from '../../../assets/img13.jpg'

export default function Art() {
  return (
    <div className="art">
        <div className="container">
            <h6>Learn more about the world of coffee!</h6>
            <div className="bgi">
                <img className='img' src={img13} alt="" />
                <div className="bg-theme"></div>
                <div className="theme"></div>
                <div className="theme-cont">
                    <p className='p1'>Coffee Culture</p>
                    <div className="cont">
                        <h2>Art & Science Of Coffee Brewing</h2>
                        <p>Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
