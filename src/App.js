import React, { createContext, useState } from 'react';
import GlobalStyle from './components/GlobalStyle';
import LoginPage from './components/LoginPage';
import NaversList from './components/NaverList';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Switch, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './router/PrivateRoute';
import PublicRoute from './router/PublicRoute';
import AddNaver from './components/AddNaver';
import EditNaver from './components/EditNaver';

const initialState = {
  bearer: '',
  navers: [],
};

export const store = createContext(initialState);

const App = () => {
  const [navers, setNavers] = useState([]);
  const [updated, setUpdated] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <store.Provider value={{ navers, setNavers, updated, setUpdated }}>
        <BrowserRouter>
          <Switch>
            <PublicRoute exact path="/" component={LoginPage} />
            <PrivateRoute exact path="/navers/" component={NaversList} />
            <PrivateRoute path="/navers/add" component={AddNaver} />
            <PrivateRoute path="/navers/edit/:id" component={EditNaver} />
          </Switch>
        </BrowserRouter>
      </store.Provider>
    </ThemeProvider>
  );
};

export default App;
