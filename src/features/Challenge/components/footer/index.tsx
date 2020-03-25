import React, {useRef, useEffect, useState} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {Caption} from '../../../../components/Caption/Caption';
import {getFact} from '../../../../utils/phrases';

interface FooterType {
  show: boolean;
  ref?: any;
}

const Footer: React.FC<FooterType> = ({show, ref = useRef(null)}) => {
  const [fact, setFact] = useState(getFact());
  const goUp = () => {
    if (ref?.current) {
      ref.current.bounceOut(500).then((e: any) => e);
    }
  };

  const goDown = () => {
    if (ref?.current) {
      ref.current.bounceIn(500).then((e: any) => e);
    }
  };

  useEffect(() => {
    if (show) {
      goUp();
    } else {
      goDown();
    }
  }, [show]);

  return (
    <Animatable.View style={styles.container} ref={ref}>
      <H6Title style={styles.title}>Sabias que?</H6Title>
      <Caption>{fact}</Caption>
    </Animatable.View>
  );
};

export default Footer;
