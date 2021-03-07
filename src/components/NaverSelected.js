import React from 'react';
import styled from 'styled-components';
import { TrashIcon, EditIcon, CloseIcon } from './Icon';

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

NaverModal.Close = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;

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
  margin: ${({ theme }) => theme.spacing.small} 0 ${({ theme }) => theme.spacing.large} 0;
`;

NaverModal.Icons = styled.div`
  position: absolute;
  bottom: 2rem;

  svg {
    margin-right: ${({ theme }) => theme.spacing.small};
  }
`;

const NaverSelected = ({ photo, name, role }) => (
  <NaverModal>
    <NaverModal.Content>
      <NaverModal.Img alt={name} src={`img/${photo}.png`} />
      <NaverModal.Data>
        <NaverModal.Close>
          <CloseIcon />
        </NaverModal.Close>
        <NaverModal.Name>{name}</NaverModal.Name>
        <NaverModal.Role>{role}</NaverModal.Role>
        <h4>Idade</h4>
        <h5>Lorem Ipsum</h5>
        <h4>Tempo de Empresa</h4>
        <h5>Lorem Ipsum</h5>
        <h4>Projetos que participou</h4>
        <h5>Lorem Ipsum</h5>
        <NaverModal.Icons>
          <TrashIcon />
          <EditIcon />
        </NaverModal.Icons>
      </NaverModal.Data>
    </NaverModal.Content>
  </NaverModal>
);

export default NaverSelected;
