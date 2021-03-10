import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import { Input } from './Input';
import { NaverLogo } from './NaverLogo';
import API from '../axios/instance';

const LoginComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  z-index: 1;
  position: absolute;
  top: 0;
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

  svg {
    width: 23.5rem;
    height: 6rem;
  }
`;

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const handleLogin = () => {
    const data = {
      email: name,
      password: password,
    };

    API({ method: 'post', url: '/users/login', data })
      .then((res) => {
        const bearerToken = res.data.token;
        localStorage.setItem('@navers_test/bearer_id', bearerToken)
        history.push('/navers');
      })
      .catch((err) => console.log(err));
  };

  return (
    <LoginComp>
      <LoginComp.Modal>
        <NaverLogo />
        <Input
          placeholder="E-mail"
          label="E-mail"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Senha"
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={() => handleLogin()}>Entrar</Button>
      </LoginComp.Modal>
    </LoginComp>
  );
};

export default LoginPage;
