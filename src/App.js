import React from 'react';
import GlobalStyle from './components/GlobalStyle';
//import Header from './components/Header';
import LoginPage from './components/LoginPage';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
