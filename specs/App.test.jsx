import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '../client/src/components/App.jsx';

let setup = function() {
  const wrapper = shallow(<App />);
  return {wrapper};
};

describe('App Test Suite', () => {
  it('Should have Hello World', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1').exists()).toBe(true);
  });
});