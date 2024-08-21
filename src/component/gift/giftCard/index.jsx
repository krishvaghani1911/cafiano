import React from 'react'
import './giftCard.scss'
import img16 from '../../../assets/img16.png'
import img17 from '../../../assets/img17.webp'
import img18 from '../../../assets/img18.png'
import img19 from '../../../assets/img19.png'

export default function Giftcard() {
  return (
    <div className="giftcard">
      <div className="container">
        <h2 className='h2'>Anytime</h2> 
        <div className="anytime">
          <div className="anytime-card">
            <img src={img16} alt="" />
            <div className="cont">
              <h2>India Exclusive</h2>
              <p>Bring in the festive season and make each celebration memorable.</p>
              <button>Add Item</button>
            </div>
          </div>
          <div className="anytime-card">
            <img src={img18} alt="" />
            <div className="cont">
              <h2>Starbucks Coffee</h2>
              <p>Starbucks is best when shared. Treat your pals to a good cup of coffee.</p>
              <button>Add Item</button>
            </div>
          </div>
          <div className="anytime-card">
            <img src={img17} alt="" />
            <div className="cont">
              <h2>U Keep Me Warm</h2>
              <p>Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.</p>
              <button>Add Item</button>
            </div>
          </div>
        </div>
        <h2 className='h2'>Congratulations</h2>
        <div className="anytime congratulations">
          <div className="anytime-card">
            <img src={img19} alt="" />
            <div className="cont">
              <h2>Congrats</h2>
              <p>Coffee. Cheer. Celebrate. Enjoy each of your special moments with Starbucks.</p>
              <button>Add Item</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
