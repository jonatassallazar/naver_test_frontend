import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NaverItem from './NaverItem';
import Button from './Button';
import store from '../store/store';
import { setNaver } from '../axios/instance';
import LoadingPage from './LoadingPage';

const Navers = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 0 0 ${({ theme }) => theme.spacing.huge} 0;

    h2 {
      padding: 0 0 ${({ theme }) => theme.spacing.small} 0;
    }
  }
`;

Navers.Itens = styled.div`
  display: inline-grid;
  grid-template-columns: 23% 23% 23% 23%;
  column-gap: 2.7%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 100%;
    row-gap: ${({ theme }) => theme.spacing.medium};
  }
`;

const NaverList = () => {
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    if (!state.updated) {
      const result = setNaver();

      result
        .then((res) => {
          dispatch({ type: 'SET_NAVER', data: res.data });
        })
        .catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => console.log(state.updated))

  return (
    <>
      <Navers>
        <Navers.Menu>
          <h2>Navers</h2>
          <Link to="/navers/add">
            <Button>Adicionar Naver</Button>
          </Link>
        </Navers.Menu>
        <Navers.Itens>
          {!state.updated ? <LoadingPage /> : (
            <>
              {state.navers.map((i) => (
                <NaverItem
                  key={i.id}
                  photo={i.url}
                  name={i.name}
                  role={i.job_role}
                  {...i}
                />
              ))}
            </>
          )}
        </Navers.Itens>
      </Navers>
    </>
  );
};

export default NaverList;
