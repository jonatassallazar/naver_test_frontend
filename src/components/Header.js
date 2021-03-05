import React from 'react';
import styled from 'styled-components';
import { NaverLogo } from './NaverLogo';
import Button from './Button';

const HeaderMain = styled.div`
  height: 85px;
  width: 100vw;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => (
  <HeaderMain>
      <NaverLogo />
    <Button.Secondary>Sair</Button.Secondary>
  </HeaderMain>
);

export default Header;
