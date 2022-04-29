import React, {useState} from 'react'
import MenuCard from './MenuCard'
import Menu from './MenuApi.js'
import Navbar from './Navbar'

const uniqueList =[ 
   ... new Set(Menu.map((curElem) => {
    return curElem.category
})
),"All",
]
// console.log(uniqueList);

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)
    // console.log(menuData);

const filterItem = (category) => {
    if(category === "All"){
        setMenuData(Menu)
        return
    }
    const udatedList = Menu.filter((curElem) => {
        return curElem.category === category
    })
    setMenuData(udatedList)



}

  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList} />
    <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant