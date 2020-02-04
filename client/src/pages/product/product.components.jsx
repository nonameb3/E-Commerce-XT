import React from "react";
import { withRouter } from "react-router-dom";
import "./product.style.scss";

import Carousel from '../../components/carousel/carousel.component';

function productComponents(props) {
  console.log(props.match.params.productId);
  return (
    <section id='product'>
      <div className='content container'>
        <p>HOME › COOP › EMPIRE STRIKES BACK DRESS</p>
        <div className='content-items'>
          <div className='images'>
            <Carousel/>
          </div>
          <div className='item'>
            <div className='item-quantity'>
              <p>QUANTITY</p>
              <div className='quantity-button'>
                <i className='fas fa-minus'></i>
                <span>23</span>
                <i className='fas fa-plus'></i>
              </div>
              <br />
              <h4>Price 20$</h4>
              <button className='btn btn-outline-dark'>Add to cart.</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(productComponents);
