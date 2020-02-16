import React, {useRef, useEffect} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';

import {NavigationBarItemType} from './types';
import {styles} from './styles';
import {Subtitle1} from '../Subtitle1/Subtitle1';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {normalize} from '../../style/UTILS';

const NavigationBarItem: React.FC<NavigationBarItemType> = ({
  logo,
  active = false,
  label = '',
  itemRef = useRef(null),
}) => {
  const goUp = () => {
    if (itemRef?.current) {
      itemRef.current
        .bounce(800)
        .then((endState: any) =>
          console.log(
            endState.finished ? 'bounce finished' : 'bounce cancelled',
          ),
        );
    }
  };
  useEffect(() => {
    if (active) {
      goUp();
    }
  }, [active]);
  return (
    <Animatable.View
      ref={itemRef}
      style={[active ? styles.containerItemActive : styles.containerItem]}>
      <Image source={logo} style={[styles.logo]} />
      {active && (
        <Subtitle1 style={[styles.textBold, styles.label]}>{label}</Subtitle1>
      )}
      <Icon name="menu-left" style={styles.leftArrowIcon} />
      <Icon name="menu-right" style={styles.rightArrowIcon} />
    </Animatable.View>
  );
};

export {NavigationBarItem};
