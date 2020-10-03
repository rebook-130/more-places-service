import styled from 'styled-components';

const size = {
  fullScreen: '2560px',
  halfScreen: '1100px',
  quarterScreen: '740px'
};

export const device = {
  laptopL: `(max-width: ${size.fullScreen})`,
  laptopM: `(max-width: ${size.halfScreen})`,
  laptopS: `(max-width: ${size.quarterScreen})`
};