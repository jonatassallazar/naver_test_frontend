import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TrashIcon, EditIcon, CloseIcon } from './Icon';
import moment from 'moment';
import store from '../store/store';

const NaverModal = styled.div`
  background: ${({ theme }) => theme.colors.bgHover};
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
`;

NaverModal.Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 100%;
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

NaverModal.Data = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  width: 50%;
  padding: ${({ theme }) => theme.spacing.medium};

  h4 {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin: ${({ theme }) => theme.spacing.small} 0 0 0;
  }

  h5 {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin: ${({ theme }) => theme.spacing.small} 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.huge};
  }
`;

NaverModal.Img = styled.img`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

NaverModal.Close = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;
  border: none;
  background: none;
  cursor: pointer;

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.8rem 0.8rem 0.6rem;
    margin: ${({ theme }) => theme.spacing.small};
    background: white;
    border-radius: 50%;
  }
`;

NaverModal.Name = styled.h2`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3.6rem;
  margin: ${({ theme }) => theme.spacing.small} 0 0 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0;
  }
`;

NaverModal.Role = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin: ${({ theme }) => theme.spacing.small} 0
    ${({ theme }) => theme.spacing.large} 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0;
  }
`;

NaverModal.Icons = styled.div`
  position: absolute;
  bottom: 2rem;

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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

const NaverSelected = ({ naverSelected, setShowNaverModalSelected }) => {
  const { dispatch } = useContext(store);

  const handleDelete = () => {
    dispatch({
      type: 'CONFIRMATION_DELETE_NAVER',
      id: naverSelected.id,
      dispatch,
    });
  };

  const handleClose = () => {
    setShowNaverModalSelected(false);
  };

  return (
    <>
      <NaverModal.Content>
        <NaverModal.Img alt={naverSelected.name} src={naverSelected.url} />
        <NaverModal.Data>
          <NaverModal.Close onClick={handleClose}>
            <CloseIcon />
          </NaverModal.Close>
          <NaverModal.Name>{naverSelected.name}</NaverModal.Name>
          <NaverModal.Role>{naverSelected.job_role}</NaverModal.Role>
          <h4>Idade</h4>
          <h5>{moment(naverSelected.birthdate).format('DD/MM/YYYY')}</h5>
          <h4>Tempo de Empresa</h4>
          <h5>{moment(naverSelected.admission_date).format('DD/MM/YYYY')}</h5>
          <h4>Projetos que participou</h4>
          <h5>{naverSelected.project}</h5>
          <NaverModal.Icons>
            <button onClick={handleDelete}>
              <TrashIcon />
            </button>
            <Link to={`/navers/edit/${naverSelected.id}`}>
              <EditIcon />
            </Link>
          </NaverModal.Icons>
        </NaverModal.Data>
      </NaverModal.Content>
      <NaverModal onClick={handleClose} />
    </>
  );
};

export default NaverSelected;
