import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
