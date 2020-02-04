import React from "react";
import "./homepage.style.scss";

import ShopCard from "../../components/shopCard/shopCard.component";

import { data } from "./shopData";


function homepageComponent() {
  return (
    <React.Fragment>
      <section id='jumbotron'>
        <div className='jumbotron jumbotron-fluid d-flex align-items-end'>
          <div className='container '>
            <h1 className='display-4 text-right'>Fluid jumbotron</h1>
            <p className='lead text-right'>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
      </section>

      <section id="content">
        <div className='container'>
          <h1 className='text-center text-uppercase text-monospace font-weight-bold mb-4'>
            Hot Products !
          </h1>
          <div className='card-container'>
            {data.map(item => (
              <ShopCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default homepageComponent;
