import React from 'react';
import { shallow } from 'enzyme';
import GamePage from './GamePage'

test('renders learn react link', () => {
  const wrapper = shallow(<GamePage />);
  expect(wrapper).toMatchSnapshot();
});

test('div tags', () => {
    const wrapper = shallow(<GamePage />);
    expect(wrapper.find('div').length).toBe(4);
  })
  