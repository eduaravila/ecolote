import React from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Body from '../components/body/index';
import {PRIMARY_COLOR} from '../../../style/COLOR';

const ForgotPasswordSuccess: React.FC = props => {
  return (
    <GradientBackground colors={[PRIMARY_COLOR, PRIMARY_COLOR]}>
      <Body />
    </GradientBackground>
  );
};

export default ForgotPasswordSuccess;
