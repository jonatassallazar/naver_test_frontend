import React from 'react';
import styled from 'styled-components';
import NaverItem from './NaverItem';
import Button from './Button';

const Navers = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
`;

Navers.Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.large} 0;

  h2 {
    font-weight: 600;
    font-size: 4.0rem;
    line-height: 4.8rem;
    margin: 0;
  }
`;

Navers.Itens = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const fixtureNavers = [
  {
    photo: 'juliano',
    name: 'Juliano Reis',
    role: 'Front-end Developer'
  },{
    photo: 'gabriel',
    name: 'Gabriel de Couto',
    role: 'Front-end Developer'
  },{
    photo: 'eduardo',
    name: 'Eduardo Bittencourt',
    role: 'Front-end Developer'
  },{
    photo: 'gustavo',
    name: 'Gustavo Pinho',
    role: 'Technology Manager'
  },
]

const NaverList = () => (
  <Navers>
    <Navers.Menu>
      <h2>Navers</h2>
      <div>
        <Button>Adicionar Naver</Button>
      </div>
    </Navers.Menu>
    <Navers.Itens>
      {fixtureNavers.map((i) => (
        <NaverItem photo={i.photo} name={i.name} role={i.role} />
      ))}
    </Navers.Itens>
  </Navers>
);

export default NaverList;
