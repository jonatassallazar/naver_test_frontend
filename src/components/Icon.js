import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const Svg = styled(Icon)`
  width: 1.8rem;
  height: 1.8rem;
`;

export const TrashIcon = ({ className }) => (
  <Svg viewBox="0 0 14 18" className={className}>
    <path
      d="M1 18H13V4H1V18ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
      fill="currentColor"
    />
  </Svg>
);

export const EditIcon = ({ className }) => (
  <Svg viewBox="0 0 19 19" className={className}>
    <path
      d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM18.41 4.34L14.66 0.589996L12.13 3.13L15.88 6.88L18.41 4.34Z"
      fill="currentColor"
    />
  </Svg>
);

export const CloseIcon = ({ className }) => (
  <Svg viewBox="0 0 14 14" className={className}>
    <path
      d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
      fill="currentColor"
    />
  </Svg>
);

export default Icon;
