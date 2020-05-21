import React from 'react';
import { shallow } from 'enzyme';
import DetailPage from './DetailPage'

test('renders learn react link', () => {
  const wrapper = shallow(<DetailPage />);
  expect(wrapper).toMatchSnapshot();
});

test('p tags', () => {
    const wrapper = shallow(<DetailPage />);
    expect(wrapper.find('p').length).toBe(3);
  })
  