import React from 'react';
import { shallow } from 'enzyme';
import styled from 'styled-components';
import 'jest-styled-components';

// Components
import App from '../client/src/components/App.jsx';

let setup = function() {
  const wrapper = shallow(<App />);
  return {wrapper};
};

describe('App Test Suite', () => {
  it('Should render the app', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1').exists()).toBe(false);
  });
});

