import React from 'react';
import styled from 'styled-components';
import { TrashIcon, EditIcon } from './Icon';

const NaverProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 23.5%;
  padding: 0 0 ${({ theme }) => theme.spacing.medium} 0;
`;

NaverProfile.Img = styled.img`
  width: 100%;
`;

NaverProfile.Name = styled.h3`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.8rem;
  margin: ${({ theme }) => theme.spacing.small} 0 0 0;
`;

NaverProfile.Role = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin: ${({ theme }) => theme.spacing.tiny} 0 0 0;
`;

NaverProfile.Icons = styled.div`
  margin-top: ${({ theme }) => theme.spacing.small};

  svg {
    margin-right: ${({ theme }) => theme.spacing.small};
  }
`;

const NaverItem = ({ photo, name, role }) => (
  <NaverProfile>
    <NaverProfile.Img alt={name} src={`img/${photo}.png`} />
    <NaverProfile.Name>{name}</NaverProfile.Name>
    <NaverProfile.Role>{role}</NaverProfile.Role>
    <NaverProfile.Icons>
      <TrashIcon />
      <EditIcon />
    </NaverProfile.Icons>
  </NaverProfile>
);

export default NaverItem;