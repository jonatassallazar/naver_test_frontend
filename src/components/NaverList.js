import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NaverItem from './NaverItem';
import Button from './Button';
import API from '../axios/instance';
import { store } from '../App';

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
    font-size: 4rem;
    line-height: 4.8rem;
    margin: 0;
  }
`;

Navers.Itens = styled.div`
  display: inline-grid;
  grid-template-columns: 23% 23% 23% 23%;
  column-gap: 2.7%;
`;

const NaverList = () => {
  const { navers, setNavers, setUpdated, updated } = useContext(store);

  useEffect(() => {
    if (!updated) {
      API({
        url: '/navers',
        method: 'get',
      })
        .then((res) => {
          setNavers(res.data);
          setUpdated(true);
          console.log('run');
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Navers>
      <Navers.Menu>
        <h2>Navers</h2>
        <Link to="/navers/add">
          <Button>Adicionar Naver</Button>
        </Link>
      </Navers.Menu>
      <Navers.Itens>
        {navers.map((i) => (
          <NaverItem
            key={i.id}
            photo={i.url}
            name={i.name}
            role={i.job_role}
            {...i}
          />
        ))}
      </Navers.Itens>
    </Navers>
  );
};

export default NaverList;
