import React, { createContext, useEffect, useState } from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import NaversList from './components/NaverList';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Switch, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './router/PrivateRoute';
import PublicRoute from './router/PublicRoute';

const initialState = {
  bearer: '',
};

export const store = createContext(initialState);

const App = () => {
  const [bearer, setBearer] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <store.Provider value={{ bearer, setBearer }}>
        <Header />
        <BrowserRouter>
          <Switch>
            <PublicRoute exact path="/" component={LoginPage} />
            <PrivateRoute path="/navers/" component={NaversList} />
          </Switch>
        </BrowserRouter>
      </store.Provider>
    </ThemeProvider>
  );
};

export default App;
