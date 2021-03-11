import { createContext } from 'react';
import { deleteNaver } from '../axios/instance';

export const initialState = {
  navers: [],
  modalInfo: {
    title: '',
    description: '',
    buttonPrimary: undefined,
    buttonSecondary: undefined,
    closeButton: true,
  },
  showModal: false,
  updated: false,
};

export default createContext(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NAVER':
      return {
        ...state,
        modalInfo: {
          ...initialState.modalInfo,
          title: 'Naver criado',
          description: 'Naver criado com sucesso!',
        },
        showModal: true,
        updated: false,
      };
    case 'EDIT_NAVER':
      return {
        ...state,
        modalInfo: {
          ...initialState.modalInfo,
          title: 'Naver atualizado',
          description: 'Naver atualizado com sucesso!',
        },
        showModal: true,
        updated: false,
      };
    case 'SET_NAVER':
      return {
        ...state,
        navers: action.data,
        updated: true,
      };
    case 'CONFIRMATION_DELETE_NAVER':
      return {
        ...state,
        modalInfo: {
          ...initialState.modalInfo,
          title: 'Excluir Naver',
          description: 'Tem certeza que deseja excluir este Naver?',
          buttonPrimary: 'Excluir',
          actionButtonPrimary: () => {
            const result = deleteNaver(action.id);
            result
              .then(() => {
                action.dispatch({ type: 'DELETE_NAVER' });
              })
              .catch((err) => {
                console.log(err);
              });
          },
          buttonSecondary: 'Cancelar',
          actionButtonSecondary: () => {
            action.dispatch({ type: 'CLOSE_MODAL' })
          },
          closeButton: false,
        },
        showModal: true,
        updated: false,
      };
    case 'DELETE_NAVER':
      return {
        ...state,
        modalInfo: {
          ...initialState.modalInfo,
          title: 'Naver excluído',
          description: 'Naver excluído com sucesso!',
        },
        showModal: true,
        updated: false,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
        modalInfo: {
          ...initialState.modalInfo
        }
      };
    default:
      return state;
  }
};
