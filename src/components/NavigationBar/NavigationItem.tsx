import React, {useRef, useEffect} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationBarItemType} from './types';
import {styles} from './styles';
import {Subtitle1} from '../Subtitle1/Subtitle1';
import {normalize} from '../../style/UTILS';
import {Subtitle2} from '../Subtitle2/Subtitle2';

const NavigationBarItem: React.FC<NavigationBarItemType> = ({
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
      <Subtitle2 style={[styles.textBold, styles.label]}>{label}</Subtitle2>
      <Icon name="menu-left" style={styles.leftArrowIcon} />
      <Icon name="menu-right" style={styles.rightArrowIcon} />
    </Animatable.View>
  );
};

export {NavigationBarItem};
