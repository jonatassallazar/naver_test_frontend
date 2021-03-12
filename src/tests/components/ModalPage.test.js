import ModalPage from '../../components/ModalPage';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Switch, BrowserRouter } from 'react-router-dom';
import theme from '../../theme';
import navers from '../fixtures/fixtures';
import store from '../../store/store';
import GlobalStyle from '../../components/GlobalStyle';
import 'jest-styled-components';

const state = {
  navers,
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
const dispatch = jest.fn();

test('should match ModalPage snapshot with no data', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <store.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <ModalPage />
          </Switch>
        </BrowserRouter>
      </store.Provider>
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});

test('should match ModalPage snapshot with title and description', () => {
  const state = {
    modalInfo: {
      title: 'Mock Title',
      description: 'Mock Description',
      buttonPrimary: undefined,
      buttonSecondary: undefined,
      closeButton: true,
    },
  };

  const { container } = render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <store.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <ModalPage />
          </Switch>
        </BrowserRouter>
      </store.Provider>
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});

test('should match ModalPage snapshot with title and description and buttons', () => {
  const state = {
    modalInfo: {
      title: 'Mock Title',
      description: 'Mock Description',
      buttonPrimary: 'Mock button',
      buttonSecondary: 'Mock button',
      closeButton: false,
    },
  };

  const { container } = render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <store.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <ModalPage />
          </Switch>
        </BrowserRouter>
      </store.Provider>
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});