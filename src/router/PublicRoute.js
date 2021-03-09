import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from '../App';

let isAuthenticated = false;

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { bearer } = useContext(store);

  if (bearer) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Redirect to="/navers" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
