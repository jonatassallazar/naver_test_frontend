import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

const Header = () => {

  let history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('@navers_test/bearer_id');
    history.push('/');
  }

return (
  <HeaderMain>
    <Link to="/">
      <NaverLogo />
    </Link>
    <div>
      <Button.Secondary onClick={handleLogout}>Sair</Button.Secondary>
    </div>
  </HeaderMain>
)};

export default Header;
