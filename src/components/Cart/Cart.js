import React from 'react';
import './Cart.css'
const Cart = (props) => {
  console.log(props.employees)
  const { employees } = props;
  let total = 0;
  for (const employee of employees) {
    total = total + JSON.parse(employee.salary);
  }

  return (
    <div>
      <h3><i className="fas fa-users"></i> Selected Freelancers: {props.employees.length}</h3>
      <h4>Estimated Monthly Cost: ${total}</h4>
      {
        employees.map(employee =>
          <div>
            <div className='d-flex row'>
              <div className='col-md-4 text-center pb-2'>
                <img src={employee.img} alt="" className='img-fluid rounded-circle' />
              </div>
              <div className='col-md-8'>
                <h6>{employee.name}</h6>
                <h5 className='text-muted'>{employee.title}</h5>
                <p><small><b>{employee.jSuccess}% SUCCESS</b> ({employee.job} jobs)</small></p>
                <p className='text-muted'>{employee.country}</p>
              </div>
            </div>
          </div>
        )};
    </div >
  );
};

export default Cart;