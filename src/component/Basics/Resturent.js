import { React, useState } from 'react'
import Menu from '../menuApi'
import MenuCard from './MenuCard'
import NavBar from './Navbar'
import './style.css'

const uniqueList = [
  ...new Set(
    Menu.map((currentElement) => {
      return (
        currentElement.category
      )}
    )
  ), "All"
];

console.log('===uniqueList===', uniqueList);

const Resturent = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if (category === 'ALL') {
      setMenuData(Menu)
      return;
    }
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
      <NavBar filterItem = {filterItem} 
      menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturent
