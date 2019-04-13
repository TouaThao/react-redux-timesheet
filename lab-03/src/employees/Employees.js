import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmployeeTable from './EmployeeTable';

class Employees extends Component {

  state = {
    employees: [
      {
        _id: 1,
        username: 'admin',
        email: 'admin@mixtape.com',
        password: 'password',
        admin: true,
        firstName: 'Admin',
        lastName: 'User'
      },
      {
        _id: 2,
        username: 'user',
        email: 'user@mixtape.com',
        password: 'password',
        admin: false,
        firstName: 'Normal',
        lastName: 'User'
      }
    ]
  }
  render() {
    const {employees } = this.state
    return (
<div>
  Our employees 
  <EmployeeTable employees ={ employees}/>
</div>
    )
  }
}

export default Employees;
