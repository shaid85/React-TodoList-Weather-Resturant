import React from 'react'

const Navbar = ({filterItem,menuList}) => {
  return (
    <>
      <div className="navbarbox">
        <div className="container">
          <div className="navbar">
          {menuList.map((curElem) => {
return (
    <button className="btn btn-primary"
            onClick={()=>filterItem(curElem)}>{curElem}</button>
)
          })}


          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar