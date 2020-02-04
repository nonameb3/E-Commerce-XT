import React from "react";

function footerComponent() {
  return (
    <section id='footer' className='mt-5'>
      <div className='row d-flex justify-content-center'>
        <a href='https://www.facebook.com/mdbootstrap' target='_blank'>
          <i className='fab fa-facebook-f mr-3'></i>
        </a>
        <a href='https://twitter.com/MDBootstrap' target='_blank'>
          <i className='fab fa-twitter mr-3'></i>
        </a>
        <a
          href='https://github.com/mdbootstrap/bootstrap-material-design'
          target='_blank'>
          <i className='fab fa-github mr-3'></i>
        </a>
      </div>
      <div className='row d-flex justify-content-center'>
        <p className='text-center'>© COPYRIGHT WARAPHON ROONNAPAI 2020</p>
      </div>
    </section>
  );
}

export default footerComponent;
