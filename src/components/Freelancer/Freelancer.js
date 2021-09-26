import React from 'react';
import './Freelancer.css'
const Freelancer = (props) => {
  console.log(props.freelancer)
  const { img, name, title, des, jSuccess, job, salary, country } = props.freelancer;
  return (
    <div className='col-md-4 '>
      <div className="single-card m-2 p-3 border rounded">

        {/* Image and Title Area */}
        <div className='d-flex row'>
          <div className='col-md-4'>
            <img src={img} alt="" className='img-fluid rounded-circle' />
          </div>
          <div className='col-md-8'>
            <h6>{name}</h6>
            <h5>{title}</h5>
            <p><small><b>{jSuccess}% SUCCESS</b> ({job} jobs)</small></p>
            <p className='text-muted'>{country}</p>
          </div>
        </div>

        {/* Salary & Location Area */}
        <div className='d-flex row d-flex align-items-center'>
          <div className='col-md-8'><p><small className='text-muted'>Monthlyy Expected Salary :</small></p></div>
          <div className='col-md-4 text-muted d-flex'><h4>{salary}</h4><h3><sup>$</sup></h3></div>
        </div>
        <hr />

        {/* Description area */}
        <div>
          <p><small>{des.substring(0, 150)}... See More!</small></p>
        </div>

        {/* Button and Social Media */}
        <div className='d-flex row'>
          <div className='col-md-6'>
            <button className='btn abt-btn-primary w-100'>Hire me!</button>
          </div>
          <div className='col-md-6 text-center'>
            <a href="/facebook"><i class="fab fa-facebook" ></i></a>
            <a href="/twitter"><i class="fab fa-twitter" ></i></a>
            <a href="/linkedin"><i class="fab fa-linkedin-in" ></i></a>
            <a href="/instagram"><i class="fab fa-instagram" ></i></a>
            <a href="/youtube"><i class="fab fa-youtube" ></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;