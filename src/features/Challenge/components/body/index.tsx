import React, {useState, useEffect} from 'react';
import {View, Animated, Easing} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

import {styles} from './styles';
import {ColorButton} from '../../../../components/ColorButton/ColorButton';

import {normalize} from '../../../../style/UTILS';
const arena_logo = require('../../../../assets/img/aqua_palace.gif');

interface BodyType {
  toggle_visibility: (e: boolean) => void;
  loading: boolean;
}

const Body: React.FC<BodyType> = ({toggle_visibility, loading}) => {
  const [areanSize] = useState(new Animated.Value(0));

  const goBig = () => {
    Animated.timing(areanSize, {
      duration: 500,
      toValue: 1,
      easing: Easing.elastic(3),
    }).start();
  };

  const goSmall = () => {
    Animated.timing(areanSize, {
      duration: 500,
      toValue: 0,
    }).start();
  };
  useEffect(() => {
    if (loading) {
      goBig();
    } else {
      goSmall();
    }
  }, [loading]);
  return (
    <View style={styles.container}>
      <TouchableScale style={styles.arenaContainer} tension={100} friction={1}>
        <Animated.Image
          source={arena_logo}
          style={[
            styles.arena,
            {
              width: areanSize.interpolate({
                inputRange: [0, 1],
                outputRange: [normalize(250), normalize(270)],
              }),
              height: areanSize.interpolate({
                inputRange: [0, 1],
                outputRange: [normalize(250), normalize(270)],
              }),
            },
          ]}
        />
      </TouchableScale>
      <ColorButton
        onPress={() => toggle_visibility(true)}
        cancel={loading}
        style={loading ? styles.cancelButton : styles.playButton}>
        {loading ? 'Cancel ' : 'Play'}
      </ColorButton>
    </View>
  );
};

export default Body;
