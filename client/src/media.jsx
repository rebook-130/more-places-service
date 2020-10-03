import styled from 'styled-components';

const size = {
  fullScreen: '2560px',
  thirdScreen: '1100px',
  halfScreen: '950px',
  quarterScreen: '700px'
};

export const device = {
  laptopL: `(max-width: ${size.fullScreen})`,
  laptopM: `(max-width: ${size.thirdScreen})`,
  laptopS: `(max-width: ${size.halfScreen})`,
  laptopXS: `(max-width: ${size.quarterScreen})`
};