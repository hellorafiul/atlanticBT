import React from 'react';
import './Header.css'
import logo from '../../Images/logo.svg'
import banner from '../../Images/banner.svg'
const Header = () => {
  return (
    <div>
      {/* Nav Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container container-fluid">
          <a className="navbar-brand" href="/home"><img src={logo} alt="" height="50" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/work">Our Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/insights">Insights</a>
              </li>
              <button className='btn btn-outline-light ms-4 px-4'>Contact</button>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='hero' className=' pt-5 mt-3 container'>
        <div className="row">
          <div className='col-md-8'>
            <h1 className='pt-4'>Find More <span>Talent</span> Your Way!</h1>
            <h2>Generate UpTo <span>500M</span></h2>
            <p>Find great talent. Build your business.
              Take your career to the next level. <br />
              Work with the world’s best talent on Atlantic BT – the top freelancing website trusted by businesses worldwide.</p>
            <button className='btn abt-btn-primary rounded-pill w-25'>Get Started</button>
          </div>
          <div className='col-md-4'>
            <img src={banner} alt="" className='img-fluid' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;