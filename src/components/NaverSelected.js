import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import API from '../axios/instance';
import { TrashIcon, EditIcon, CloseIcon } from './Icon';
import moment from 'moment';

const NaverModal = styled.div`
  background: ${({ theme }) => theme.colors.bgHover};
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
`;

NaverModal.Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  position: relative;
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
`;

NaverModal.Img = styled.img`
  width: 50%;
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
  }
`;

NaverModal.Name = styled.h2`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3.6rem;
  margin: ${({ theme }) => theme.spacing.small} 0 0 0;
`;

NaverModal.Role = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin: ${({ theme }) => theme.spacing.small} 0
    ${({ theme }) => theme.spacing.large} 0;
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
`;

const NaverSelected = ({naverSelected, setShowNaverModalSelected}) => {

  const handleDelete = () => {
    API({
      url: `/navers/${naverSelected.id}`,
      method: 'delete',
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleClose = () => {
    setShowNaverModalSelected(false);
  }

  return (
  <NaverModal onClick={handleClose}>
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
  </NaverModal>
)};

export default NaverSelected;
