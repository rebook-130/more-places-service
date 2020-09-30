import React from 'react';
import { shallow } from 'enzyme';
import styled from 'styled-components';
import 'jest-styled-components';

// Components
import App from '../client/src/components/App.jsx';
import Listings from '../client/src/components/Listings.jsx';
import { Header, Container, TitleContainer, SelectContainer, Prev, Next, Page } from '../client/src/styling.jsx';

const mockFn = jest.fn();

describe('App Test Suite', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders Card header', () => {
    const wrapper = shallow(<App />);
    const header = <Header>More places to stay</Header>;
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('Renders next/prev buttons', () => {
    const next = shallow(<Next />);
    const prev = shallow(<Prev />);
    expect(next.exists()).toBe(true);
    expect(prev.exists()).toBe(true);
  });

  it('should call mock function when buttons are clicked', () => {
    const next = shallow(<Next name='button test' onClick={mockFn} />);
    const prev = shallow(<Prev name='button test' onClick={mockFn} />);
    next.simulate('click');
    prev.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call componentDidMount', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(spy).toHaveBeenCalled();
  });

});

