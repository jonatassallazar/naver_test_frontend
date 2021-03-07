import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
//import NaverList from './components/NaverList';
//import LoginPage from './components/LoginPage';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import NaverForm from './components/NaverForm';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <NaverForm />
    </ThemeProvider>
  );
}

export default App;
