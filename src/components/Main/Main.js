import React, { useEffect, useState } from 'react';
import './Main.css'
import Freelancer from './../Freelancer/Freelancer';
import Cart from './../Cart/Cart';
const Main = () => {
  // Load data from JSON
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
  }

  let total = 0;
  for (const employee of employees) {
    total = total + JSON.parse(employee.salary);
  }

  return (
    <div id='main' className='mb-5 pb-5'>
      <h2 className='text-center py-5 my-5'>Connect with a <span>Freelancer</span></h2>
      <div className="row">
        <div className="col-md-9">
          <div className="row mx-4">
            {
              freelancers.map(freelancer => <Freelancer
                key={freelancer.id}
                freelancer={freelancer}
                handleButton={handleButton}
              ></Freelancer>)
            }
          </div>
        </div>
        {/* Cart Section */}
        <div className="col-md-3">
          <h3><i className="fas fa-users"></i> Selected Freelancers: <span>{employees.length}</span></h3>
          <h4>Estimated Monthly Cost: <span>${total}</span></h4>
          <div className='border-btm mb-5 me-4'></div>
          {
            employees.map(employee => <Cart key={employee.id} employee={employee} ></Cart>)
          }
        </div>
      </div>
    </div>
  );
};

export default Main;