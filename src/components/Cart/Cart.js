import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const { name, img, title, jSuccess, country, job } = props.employee;

  return (
    <div>
      <div className='d-flex row border me-3 pt-3 mb-3'>
        <div className='col-md-3 text-center pb-2'>
          <img src={img} alt="" className='img-fluid rounded-circle' />
        </div>
        <div className='col-md-9'>
          <h6>{name}</h6>
          <h5 className='text-muted'>{title}</h5>
          <p><small><b>{jSuccess}% SUCCESS</b> ({job} jobs)</small></p>
          <div className='d-flex align-items-center'>
            <p className='text-muted me-5'>{country}</p>
            <p><a href="/facebook"><i className="fab fa-facebook" ></i></a>
              <a href="/twitter"><i className="fab fa-twitter" ></i></a>
              <a href="/linkedin"><i className="fab fa-linkedin-in" ></i></a>
              <a href="/instagram"><i className="fab fa-instagram" ></i></a>
              <a href="/youtube"><i className="fab fa-youtube" ></i></a></p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Cart;