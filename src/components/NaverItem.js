import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TrashIcon, EditIcon } from './Icon';
import API from '../axios/instance';
import NaverSelected from './NaverSelected';
import store from '../store/store';

const NaverProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 0 ${({ theme }) => theme.spacing.medium} 0;

  button {
    border: inherit;
    margin: 0;
    padding: 0;
    background: inherit;
    cursor: pointer;
    text-align: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    font-family: inherit;
  }
`;

NaverProfile.Img = styled.img`
  width: 100%;
`;

NaverProfile.Name = styled.h3`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.8rem;
  margin: ${({ theme }) => theme.spacing.small} 0 0 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;

NaverProfile.Role = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin: ${({ theme }) => theme.spacing.tiny} 0 0 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;

NaverProfile.Icons = styled.div`
  margin-top: ${({ theme }) => theme.spacing.small};

  button {
    border: none;
    margin: 0;
    padding: 0;
    background: none;
  }

  svg {
    margin-right: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

const NaverItem = ({ id, photo, name, role }) => {
  const [showNaverModalSelected, setShowNaverModalSelected] = useState(false);
  const [naverSelected, setNaverSelected] = useState('');
  const { dispatch } = useContext(store);

  const handleDelete = () => {
    dispatch({ type: 'CONFIRMATION_DELETE_NAVER', id, dispatch});
  };

  const handleNaverShow = () => {
    API({
      url: `/navers/${id}`,
      method: 'get',
    })
      .then((res) => {
        setNaverSelected(res.data);
        setShowNaverModalSelected(true);
        console.log(naverSelected);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    return () => {
      setShowNaverModalSelected(false);
    };
  }, []);

  return (
    <>
      {showNaverModalSelected ? (
        <NaverSelected
          naverSelected={naverSelected}
          setShowNaverModalSelected={setShowNaverModalSelected}
        />
      ) : undefined}
      <NaverProfile>
        <button onClick={handleNaverShow}>
          <NaverProfile.Img alt={name} src={photo} />
          <NaverProfile.Name>{name}</NaverProfile.Name>
          <NaverProfile.Role>{role}</NaverProfile.Role>
        </button>
        <NaverProfile.Icons>
          <button onClick={handleDelete}>
            <TrashIcon />
          </button>
          <Link to={`/navers/edit/${id}`}>
            <EditIcon />
          </Link>
        </NaverProfile.Icons>
      </NaverProfile>
    </>
  );
};

export default NaverItem;
