import React from "react";

const MenuCard = ({menuData}) => {
 
  return (
    <>
      <div className="menuCard">
        <div className="container">
          <div className="row">
            {menuData.map((curElem) => {
              const { id, name, category, image, description, price } = curElem;
              return (
                <div className="col-md-4 mb-4" key={id}>
                  <div className="card text-center">
                    <div className="card-header">{id}. {category}</div>
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{description}</p>
                      <img
                        src={image}
                        alt="images"
                        className="card-img-bottom"
                      />
                    </div>
                    <div className="card-footer text-muted">{price}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
