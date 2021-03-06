import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from 'context';
const SecureRoute = (props) => {
  const { user } = useContext(UserContext);

  return user ? <Route {...props} /> : <Redirect to='/login' />;
};

export default SecureRoute;
