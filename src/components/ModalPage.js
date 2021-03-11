import React, { useContext } from 'react';
import styled from 'styled-components';
import { CloseIcon } from './Icon';
import Button from './Button';
import store from '../store/store';

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.bgHover};
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
`;

Modal.Content = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  z-index: 6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  cursor: pointer;

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

const ModalPage = () => {
  const { state, dispatch } = useContext(store);

  const handleClose = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      <Modal.Content>
        {state.modalInfo.closeButton && (
          <Modal.Close onClick={handleClose}>
            <CloseIcon />
          </Modal.Close>
        )}
        {state.modalInfo.title && (
          <Modal.Title>{state.modalInfo.title}</Modal.Title>
        )}
        {state.modalInfo.description && (
          <Modal.Description>{state.modalInfo.description}</Modal.Description>
        )}
        {state.modalInfo.buttonPrimary || state.modalInfo.buttonSecondary ? (
          <Modal.Buttons>
            {state.modalInfo.buttonSecondary && (
              <Button.Outlined onClick={state.modalInfo.actionButtonSecondary}>
                {state.modalInfo.buttonSecondary}
              </Button.Outlined>
            )}
            {state.modalInfo.buttonPrimary && (
              <Button onClick={state.modalInfo.actionButtonPrimary}>
                {state.modalInfo.buttonPrimary}
              </Button>
            )}
          </Modal.Buttons>
        ) : undefined}
      </Modal.Content>
      <Modal onClick={handleClose} />
    </>
  );
};

export default ModalPage;
