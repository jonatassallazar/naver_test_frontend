import { initialState, reducer } from '../../store/store';
import navers from '../fixtures/fixtures';

test('should change state to add new naver', () => {
  const state = reducer(undefined, { type: 'ADD_NAVER' });

  const expected = {
    ...state,
    modalInfo: {
      ...initialState.modalInfo,
      title: 'Naver criado',
      description: 'Naver criado com sucesso!',
    },
    showModal: true,
    updated: false,
  };

  expect(state).toEqual(expected);
});

test('should change state to edit a naver', () => {
  const state = reducer(undefined, { type: 'EDIT_NAVER' });

  const expected = {
    ...state,
    modalInfo: {
      ...initialState.modalInfo,
      title: 'Naver atualizado',
      description: 'Naver atualizado com sucesso!',
    },
    showModal: true,
    updated: false,
  };

  expect(state).toEqual(expected);
});

test('should change state to set navers', () => {
  const action = navers[1];

  const state = reducer(undefined, { type: 'SET_NAVER', action });

  const expected = {
    ...state,
    navers: action.data,
    updated: true,
  };

  expect(state).toEqual(expected);
});

test('should change state to open modal for confirmation delete', () => {
  const state = reducer(undefined, { type: 'CONFIRMATION_DELETE_NAVER' });

  const Mock = jest.fn();
  const actionButtonPrimary = new Mock();
  const actionButtonSecondary = new Mock();

  const expected = {
    ...state,
    modalInfo: {
      ...initialState.modalInfo,
      title: 'Excluir Naver',
      description: 'Tem certeza que deseja excluir este Naver?',
      buttonPrimary: 'Excluir',
      actionButtonPrimary,
      buttonSecondary: 'Cancelar',
      actionButtonSecondary,
      closeButton: false,
    },
    showModal: true,
    updated: false,
  };

  expect(state).toMatchObject(expected);
});

test('should change state to delete naver', () => {
  const state = reducer(undefined, { type: 'DELETE_NAVER' });

  const expected = {
    ...state,
    modalInfo: {
      ...initialState.modalInfo,
      title: 'Naver excluído',
      description: 'Naver excluído com sucesso!',
    },
    showModal: true,
    updated: false,
  };

  expect(state).toEqual(expected);
});

test('should change state to close modal on page', () => {
  const state = reducer(undefined, { type: 'CLOSE_MODAL' });

  const expected = {
    ...state,
    showModal: false,
    modalInfo: {
      ...initialState.modalInfo,
    },
  };

  expect(state).toEqual(expected);
});

test('should do nothing', () => {
  const state = reducer(undefined, { type: '' });

  const expected = undefined;

  expect(state).toEqual(expected);
});

test('should return the standard values', () => {
  const state = reducer(initialState, { type: '' });

  expect(state).toEqual(initialState);
});