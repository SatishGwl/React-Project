import {React, useState} from 'react'
import Menu from '../menuApi'
import MenuCard from './MenuCard'
import './style.css'

const Resturent = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {
    // filter data from Menu 
    const updatedList = Menu.filter((currenElem) => {
      // console.log('==updatedList==', updatedList);
      return currenElem.category === category;
    });
    // set updateList Data 
    setMenuData(updatedList);
  };
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick={()=> filterItem('breakfast')}>Breakfast</button>
        <button className="btn-group__item" onClick={()=> filterItem('lunch')}>Lunch</button>
        <button className="btn-group__item" onClick={()=> filterItem('evening')}>Evening</button>
        <button className="btn-group__item" onClick={()=> filterItem('dinner')}>Dinner</button>
        <button className="btn-group__item" onClick={()=> setMenuData(Menu)}>All</button>

      </div>
    </nav>
      <MenuCard menuData = {menuData}/>
    </>
  )
}

export default Resturent
