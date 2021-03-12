import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Switch, BrowserRouter } from 'react-router-dom';
import theme from '../../theme';
import navers from '../fixtures/fixtures';
import store from '../../store/store';
import GlobalStyle from '../../components/GlobalStyle';

const AllTheProviders = ({ children }) => {
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <store.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>{children}</Switch>
        </BrowserRouter>
      </store.Provider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export default customRender;
