import React from 'react'
import './cards.scss'
import img7 from '../../../assets/img7.svg'
import img8 from '../../../assets/img8.webp'
import img9 from '../../../assets/img9.svg'
import img10 from '../../../assets/img10.webp'
import img11 from '../../../assets/img11.webp'
import img12 from '../../../assets/img12.webp'


export default function Cards() {
    return (
        <div className="cards">
            <img className='img' src={img7} alt="" />
            <div className="container">
                <h5>Barista Recommends</h5>
                <div className="card-item">
                    <div className="item">
                        <div className="item-detail">
                            <img src={img8} alt="" />
                            <div className="veg-mark">
                                <img src={img9} alt="" />
                                <p className='p1'>Cappuccino</p>
                                <p className='p2'>SHORT &#40; &#41;</p>
                            </div>
                        </div>
                        <div className="prise">
                            <p>&#8377; 283.50</p>
                            <button>Add Item</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-detail">
                            <img src={img10} alt="" />
                            <div className="veg-mark">
                                <img src={img9} alt="" />
                                <p className='p1'>Vanilla Milkshake</p>
                                <p className='p2'>TAIL &#40;354ML&#41;.PER SERVE &#40;354ML&#41; - 531kcal</p>
                            </div>
                        </div>
                        <div className="prise">
                            <p>&#8377; 283.50</p>
                            <button>Add Item</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-detail">
                            <img src={img11} alt="" />
                            <div className="veg-mark">
                                <img src={img9} alt="" />
                                <p className='p1'>Cold Brew Black</p>
                                <p className='p2'>SHORT &#40;Short Cold Brew Black &#41;</p>
                            </div>
                        </div>
                        <div className="prise">
                            <p>&#8377; 283.50</p>
                            <button>Add Item</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-detail">
                            <img src={img12} alt="" />
                            <div className="veg-mark">
                                <img src={img9} alt="" />
                                <p className='p1'>Signature Hot Chocolate</p>
                                <p className='p2'>SHORT &#40; 236 ML  &#41;, 284 kcal</p>
                            </div>
                        </div>
                        <div className="prise">
                            <p>&#8377; 283.50</p>
                            <button>Add Item</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
