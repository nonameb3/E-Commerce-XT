import React from "react";
import "./navbar.style.scss"

function navbarComponent() {
  return (
    <section id='navbar'>
      <nav id='nav-one' className='navbar navbar-expand-sm'>
        <div className='container d-flex justify-content-end align-items-center'>
          <div className='pr-2'>
            sign in
            <span className='ml-3'>register</span>
          </div>
        </div>
      </nav>
      <nav id='nav-two' className='navbar navbar-expand-md navbar-light'>
        <div className='container'>
          <h1 id='logo' className='navbar'>
            Show Me
          </h1>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse d-flex justify-content-end'
            id='navbarNavAltMarkup'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Shop
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  Dropdown
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                  <div className='dropdown-divider'></div>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </div>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <i className='fas fa-shopping-cart' style={{fontSize:'100%'}}></i>
                  <span className='badge badge-warning' id='lblCartCount'>
                    {" "}
                    5{" "}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default navbarComponent;
