import React, { useReducer } from 'react';
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
import store, { reducer, initialState } from './store/store';
import ModalPage from './components/ModalPage';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <store.Provider value={{ state, dispatch }}>
            {state.showModal && (
              <ModalPage
                showModal={state.showModal}
                title={state.modalInfo.title}
                description={state.modalInfo.description}
                buttonPrimary={state.modalInfo.buttonPrimary}
                buttonSecondary={state.modalInfo.buttonSecondary}
                closeButton={state.modalInfo.closeButton}
              />
            )}
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
