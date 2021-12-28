import {React, useState} from 'react'
import Menu from '../menuApi'
import './style.css'

const Resturent = () => {
  const [menuData, setMenuData] = useState(Menu);
  console.log(menuData)
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle">Breakfast</span>
            <h2 className="card-title">Maggie</h2>
            <span className="card-description subtle">I Love Maggie,  Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</span>
            <div className="card-read">Read</div>
          </div>
          {/* <img src={image} alt="images" className="card-media" /> */}
          <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
      <h1>Hello Resturent</h1>
    </>
  )
}

export default Resturent
