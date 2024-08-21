import React, { useState } from 'react'
import './orderCards.scss'
import img1 from '../../../assets/img1.jpg'
import img9 from '../../../assets/img9.svg'
import img20 from '../../../assets/img20.jpg'
import img21 from '../../../assets/img21.jpg'
import img22 from '../../../assets/img22.jpg'
import img23 from '../../../assets/img23.jpg'

const starbucksProduct = [
    {id:1, productImg: img1, vegamrk: img9, name: "Java Chip Frappuccino", productCont: "TALL(354 ML) .392 kcal", productDes: "Mocha sauce and Frappuccino® chips blended with with Frappu...", prise: "388.50"},
    {id:2, productImg: img20, vegamrk: img9, name: "Caffe Americano", productCont: "SHORT(237 Ml) .0 kcal", productDes: "Rich in flavour, full-bodied espresso with hot water in true...", prise: "388.50"},
    {id:3, productImg: img21, vegamrk: img9, name: "Cold coffee", productCont: "TALL(354 ML) .354 kcal", productDes: "Our signature rich in flavour espresso blended with delicate...", prise: "388.50"},
    {id:4, productImg: img22, vegamrk: img9, name: "Creamy Spinach and Corn Pocket", productCont: "PER SERVE (160 g) - 358 Kcal", productDes: "A creamy spinach and corn filling encased in a buttery Fren...", prise: "388.50"},
    {id:5, productImg: img23, vegamrk: img9, name: "Double Chocolate Chip Frappuccino", productCont: "TALL(354 ML) .415 kcal", productDes: "Rich mocha-flavored sauce meets up with chocolaty chips, mil...", prise: "388.50"}
]



export default function OrderCards() {

    const[item, setItem] = useState(JSON.parse(localStorage.getItem('item'))) || []

    const addItem = () => {
        const updateItem = [...item];
        localStorage.setItem('item', JSON.stringify(updateItem));
        setItem(updateItem);
        console.log(updateItem)
        setItem({ProductImg, vegamrk, name, productCont, productDes, prise})
        toast.success('Item added successfully')
        localStorage.setItem('isAdded','true')
    }
    
    return (
        <div className="ordercards">
            <div className="container">
                <h3>Bestseller</h3>
                <p className='p3'>Everyone's favorite Starbucks put together in a specially curated collection.</p>
                <div className="order-card-item">
                   {
                    starbucksProduct.map((starbucksProduct) => (
                        <div className="item">
                        <div className="item-detail">
                            <img src={starbucksProduct.productImg} alt="Coffee-Pic" />
                            <div className="veg-mark">
                                <img src={starbucksProduct.vegamrk} alt="Vegmark" />
                                <p className='p1'>{starbucksProduct.name}</p>
                                <p className='p2'>{starbucksProduct.productCont}</p>
                                <div className="p4">{starbucksProduct.productDes}</div>
                                <div className="prise">
                                    <p>&#8377;{starbucksProduct.prise}</p>
                                    <button onClick={addItem}>Add Item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                   }
                </div>
            </div>
        </div>
    )
}
