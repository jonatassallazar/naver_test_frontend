import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

let isAuthenticated = false;

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const bearer = localStorage.getItem('@navers_test/bearer_id');

  if (bearer !== null) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <>
            <Header />
            <Component {...props} />{' '}
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
