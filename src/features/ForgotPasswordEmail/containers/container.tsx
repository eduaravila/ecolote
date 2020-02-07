import React, {useRef} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';

interface ForgotPasswordEmailTypes {
  componentId: string;
}
const ForgotPasswordEmail: React.FC<ForgotPasswordEmailTypes> = props => {
  return (
    <GradientBackground>
      <Header />
      <Body componentId={props.componentId} />
      <Footer />
    </GradientBackground>
  );
};

export default ForgotPasswordEmail;
