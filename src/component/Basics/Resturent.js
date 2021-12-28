import {React, useState} from 'react'
import Menu from '../menuApi'
import MenuCard from './MenuCard'
import './style.css'

const Resturent = () => {
  const [menuData, setMenuData] = useState(Menu);
  console.log(menuData)
  return (
    <>
      <MenuCard menuData = {menuData}/>
    </>
  )
}

export default Resturent
