import React, { useEffect, useState } from 'react';
import './Main.css'
import Freelancer from './../Freelancer/Freelancer';
const Main = () => {
  const [freelancers, setFreenalcers] = useState([]);


  useEffect(() => {
    fetch('./data.JSON')
      .then(res => res.json())
      .then(data => setFreenalcers(data))
  }, [])
  // console.log(freelancers)
  return (
    <div id='main'>
      <h2 className='text-center py-5 my-5'>Connect with a <span>Freelancer</span></h2>
      <div className="row">
        <div className="col-md-9">
          <div className="row mx-5">
            {
              freelancers.map(freelancer => <Freelancer
                key={freelancer.id}
                freelancer={freelancer}
              ></Freelancer>)
            }
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Main;