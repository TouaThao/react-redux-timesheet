import React from 'react';
import EmployeeTable from './EmployeeTable';
import { shallow } from 'enzyme';
import EmployeeRow from './EmployeeRow';

describe('<EmployeeTable />', () => {
    let wrapper;

    beforeEach(() => {
        const employees = [
          {
            username: 'Toua09',
            email: 'TouaThao@gmail.com',
            firstName: 'Toua',
            lastName: 'Thao',
            admin: true,
            _id: 1
          }
        ];
    
        wrapper = shallow(<EmployeeTable employees={employees} />);
      });
    
      it('should render a row for each employee', () => {
        expect(wrapper.find(EmployeeRow)).toHaveLength(1);
      });
    });
     
