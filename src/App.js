import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import NaverList from './components/NaverList';
//import LoginPage from './components/LoginPage';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <NaverList />
    </ThemeProvider>
  );
}

export default App;
