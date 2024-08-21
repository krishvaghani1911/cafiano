import React from 'react'
import './curations.scss'
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.webp'
import img3 from '../../../assets/img3.webp'
import img4 from '../../../assets/img4.webp'
import img5 from '../../../assets/img5.webp'
import img6 from '../../../assets/img6.webp'

export default function Curations() {
    return (
        <div className="curations">
            <div className="container">
                <h3>Handcraftes Curations</h3>
                <div className="menu">
                    <div className="items">
                        <img src={img1} alt="" />
                        <h4>Bestseller</h4>
                    </div>
                    <div className="items">
                        <img src={img2} alt="" />
                        <h4>Ready to Eat</h4>
                    </div>
                    <div className="items">
                        <img src={img3} alt="" />
                        <h4>Drinks</h4>
                    </div>
                    <div className="items">
                        <img src={img4} alt="" />
                        <h4>Food</h4>
                    </div>
                    <div className="items">
                        <img src={img5} alt="" />
                        <h4>Merchandise</h4>
                    </div>
                    <div className="items">
                        <img src={img6} alt="" />
                        <h4>Coffee At Home</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
