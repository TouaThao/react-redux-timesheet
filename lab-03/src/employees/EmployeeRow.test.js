import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';

describe('<EmployeeRow />', () => {
  let wrapper;

  beforeEach(() => {
    const employee = {
      username: 'Toua09',
      email: 'TouaThao@gmail.com',
      firstName: 'Toua',
      lastName: 'Thao',
      admin: true
    };

    wrapper = shallow(<EmployeeRow employee={employee} />);
  });

  it('should render values into expected cells', () => {
    expect(wrapper.find('td')).toHaveLength(5);
    expect(wrapper.find('td').at(0).text()).toEqual('Toua09');
    expect(wrapper.find('td').at(1).text()).toEqual('TouaThao@gmail.com');
    expect(wrapper.find('td').at(2).text()).toEqual('Toua');
    expect(wrapper.find('td').at(3).text()).toEqual('Thao');
    expect(wrapper.find('td').at(4).text()).toEqual('yes');
  });
});