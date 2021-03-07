import React from 'react';
import styled from 'styled-components';
import { CloseIcon } from './Icon';
import Button from './Button';

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.bgHover};
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  z-index: 5;
`;

Modal.Content = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
`;

Modal.Title = styled.h2`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3.6rem;
  margin: 0 0 ${({ theme }) => theme.spacing.small} 0;
`;

Modal.Description = styled.p`
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 3.6rem;
  margin: 0 0 ${({ theme }) => theme.spacing.small} 0;
`;

Modal.Close = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;

  svg {
    width: 1.4rem;
  }
`;

Modal.Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: wrap;

  button {
    margin: 0 ${({ theme }) => theme.spacing.small};
    width: fit-content;
  }
`;

const ModalPage = ({
  title,
  description,
  buttonPrimary,
  buttonSecondary,
  closeButton = true,
}) => (
  <Modal>
    <Modal.Content>
      {closeButton && (
        <Modal.Close>
          <CloseIcon />
        </Modal.Close>
      )}
      {title && <Modal.Title>{title}</Modal.Title>}
      {description && <Modal.Description>{description}</Modal.Description>}
      {buttonPrimary || buttonSecondary ? (
        <Modal.Buttons>
          {buttonSecondary && (
            <Button.Outlined>{buttonSecondary}</Button.Outlined>
          )}
          {buttonPrimary && <Button>{buttonPrimary}</Button>}
        </Modal.Buttons>
      ) : undefined}
    </Modal.Content>
  </Modal>
);

export default ModalPage;
