import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TrashIcon, EditIcon } from './Icon';

const NaverProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 0 ${({ theme }) => theme.spacing.medium} 0;

  a {
    text-decoration: none;
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

  svg {
    margin-right: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NaverItem = ({ id, photo, name, role }) => (
  <NaverProfile>
      <NaverProfile.Img alt={name} src={photo} />
      <NaverProfile.Name>{name}</NaverProfile.Name>
      <NaverProfile.Role>{role}</NaverProfile.Role>
    <NaverProfile.Icons>
      <TrashIcon />
    <Link to={`/navers/edit/${id}`}>
      <EditIcon />
    </Link>
    </NaverProfile.Icons>
  </NaverProfile>
);

export default NaverItem;
