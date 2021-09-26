import React, { useEffect, useState } from 'react';
import './Main.css'
import Freelancer from './../Freelancer/Freelancer';
import Cart from './../Cart/Cart';
const Main = () => {
  const [freelancers, setFreenalcers] = useState([]);

  useEffect(() => {
    fetch('./data.JSON')
      .then(res => res.json())
      .then(data => setFreenalcers(data))
  }, [])

  const [employees, setEmployee] = useState([]);
  const handleButton = (freelancer) => {
    const NewEmployees = [...employees, freelancer]
    setEmployee(NewEmployees)
    // console.log(freelancer)
  }
  // console.log(freelancers)
  return (
    <div id='main' className='mb-5 pb-5'>
      <h2 className='text-center py-5 my-5'>Connect with a <span>Freelancer</span></h2>
      <div className="row">
        <div className="col-md-9">
          <div className="row mx-5">
            {
              freelancers.map(freelancer => <Freelancer
                key={freelancer.id}
                freelancer={freelancer}
                handleButton={handleButton}
              ></Freelancer>)
            }
          </div>
        </div>
        <div className="col-md-3">
          {
            <Cart key={employees.id} employees={employees} ></Cart>
          }
        </div>
      </div>
    </div>
  );
};

export default Main;