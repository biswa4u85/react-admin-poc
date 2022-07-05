import React from 'react';
import { AppLoader } from '../index';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

const AuthRoutes = ({ children }) => {
  const isFetching = useSelector((state) => state.auth.isFetchingLogin)
  return isFetching ? <AppLoader /> : <>{children}</>;
};

export default AuthRoutes;

AuthRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
