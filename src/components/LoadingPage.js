import React from 'react';
import styled from 'styled-components';

const Loading = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;

const LoadingPage = () => <Loading src="img/loading.gif" alt="loading" />;

export default LoadingPage;
