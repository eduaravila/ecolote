import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Body from '../components/body/index';
import Head from '../components/header';
import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import {getColumn} from '../../../style/UTILS';

const Challenge: React.FC = () => {
  const [searching, setsearching] = useState<boolean>(false);

  const _toggle_searching = (e: boolean) => {
    setsearching(i => !i);
  };

  return (
    <GradientBackground
      colors={['transparent', 'transparent']}
      style={{paddingLeft: getColumn(0.1), paddingRight: getColumn(0.1)}}>
      <Head show={searching} />
      <Body toggle_visibility={_toggle_searching} loading={searching} />
    </GradientBackground>
  );
};

export default Challenge;
