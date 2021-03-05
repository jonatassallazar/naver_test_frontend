import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Input } from './Input';
import { NaverLogo } from './NaverLogo';

const LoginComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

LoginComp.Modal = styled.div`
  width: 448px;
  height: 408px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing.large};

  .logo-login-page {
    width: 23.5rem;
    height: 6rem;
  }
`;

const LoginPage = () => (
  <LoginComp>
    <LoginComp.Modal>
      <NaverLogo className="logo-login-page" />
      <Input placeholder="E-mail" label="E-mail"/>
      <Input placeholder="Senha" label="Senha"/>
      <Button>Entrar</Button>
    </LoginComp.Modal>
  </LoginComp>
);

export default LoginPage;
