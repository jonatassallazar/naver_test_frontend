import React from 'react';
import styled from 'styled-components';

  const WrapperInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
  `;
  
  const InputPrimary = styled.input`
    line-height: 2.4rem;
    height: 4rem;
    font-weight: 400;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamily};
    
    ::placeholder {color: ${({ theme }) => theme.colors.lightGray};}
  `;
  
  const Label = styled.label`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    padding-bottom: ${({ theme }) => theme.spacing.tiny};
  `;

export const Input = ({ label, placeholder, ...props }) => (
  <WrapperInput>
  <Label>{label}</Label>
  <InputPrimary placeholder={placeholder} {...props} ></InputPrimary>
  </WrapperInput>
);
