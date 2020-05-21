import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'

test('renders learn react link', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

test('p tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('p').length).toBe(8);
  })

  
test('link tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('Link').length).toBe(7);
  })
  