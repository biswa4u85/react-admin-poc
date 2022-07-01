import React from 'react';
import './index.style.less';
import AuthWrapper from '../AuthWrapper';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import SigninFrappe from './SigninFrappe';
import SigninJwtAuth from './SigninJwtAuth';

const Signin = () => {
  return (
    // <SigninFrappe />
    <AuthWrapper>
      <AppPageMetadata title='Login' />
      <SigninJwtAuth />
    </AuthWrapper>
  );
};

export default Signin;
