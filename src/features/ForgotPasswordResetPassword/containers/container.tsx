import React, {useState, useEffect} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';

interface ForgotPasswordResetPasswordTypes {
  componentId: string;
}
const ForgotPasswordResetPassword: React.FC<ForgotPasswordResetPasswordTypes> = props => {
  return (
    <GradientBackground>
      <Header />
      <Body componentId={props.componentId} />
    </GradientBackground>
  );
};

export default ForgotPasswordResetPassword;
``