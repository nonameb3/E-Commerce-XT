import React from "react";
import "./shopCard.style.scss";

function shopCardComponent({ name, image, type, price, status }) {
  return (
    <div className='card shadow bg-white rounded'>
      <img
        src={image}
        className='card-img-top'
        alt=''
      />
      <div className='card-body text-center '>
        <h5>{type}</h5>
        <strong>
          {name}
          {status ? <span className=''>{status}</span> : null}
        </strong>
        <h4>
          <strong>{price}$</strong>
        </h4>
      </div>
    </div>
  );
}

export default shopCardComponent;
