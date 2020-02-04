import React from "react";
import "./carousel.style.scss";

function carouselComponent() {
  return (
    <div className='carousel'>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            className='active'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='3'></li>
        </ol>
        <div className='carousel-inner' role='listbox'>
          <div className='carousel-item active'>
            <img
              className='d-block w-100'
              src='https://cdn.shopify.com/s/files/1/1132/3440/products/image_d826c75f-5cc8-4233-a962-8540c654f5f6_1024x1024.png?v=1571709559'
              alt='First slide'
            />
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='https://cdn.shopify.com/s/files/1/1132/3440/products/image_713c13e6-4890-4532-be4e-a0e211c63604_1024x1024.png?v=1571709559'
              alt='Second slide'
            />
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='https://cdn.shopify.com/s/files/1/1132/3440/products/image_b30dde17-12d6-4010-9d56-dab283b1de71_1024x1024.png?v=1571709559'
              alt='Third slide'
            />
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='https://050128.com/data/out/24/4094369-girl-pics.jpg'
              alt='Third slide'
            />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
}

export default carouselComponent;
