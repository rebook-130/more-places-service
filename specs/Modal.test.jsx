import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import { Heart, HeartButton } from '../client/src/styling.jsx';
import { keyframes } from 'styled-components';
import SaveModal from '../client/src/components/Modal.jsx';


describe('Modal Test Suite', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<SaveModal />);
    expect(wrapper.exists()).toBe(true);
  });
});


