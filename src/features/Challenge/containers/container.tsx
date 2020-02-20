import React, {useState, useEffect} from 'react';

import Body from '../components/body/index';
import Head from '../components/header';
import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import {getColumn} from '../../../style/UTILS';
import {useStoreActions, useStoreState} from '../../../state/store';
import Footer from '../components/footer';
import goGame from '../../../navigation/navigators/Game';

const Challenge: React.FC = () => {
  const [searching, setsearching] = useState<boolean>(false);
  const setVisibilityBottom = useStoreActions(
    state => state.BottomNavigation.BottomNavigationSetVisity,
  );
  const {show} = useStoreState(state => state.BottomNavigation);

  const _toggle_searching = (e: boolean) => {
    setsearching(i => !i);
    setVisibilityBottom({show: false});
    goGame()
  };

  return (
    <GradientBackground
      colors={['transparent', 'transparent']}
      style={{paddingLeft: getColumn(0.1), paddingRight: getColumn(0.1)}}>
      <Head show={searching} />
      <Body toggle_visibility={_toggle_searching} loading={searching} />
      <Footer show={!searching} />
    </GradientBackground>
  );
};

export default Challenge;
