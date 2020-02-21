import React, {useState, useEffect} from 'react';
import {View, Animated, Easing} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

import {styles} from './styles';
import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {normalize} from '../../../../style/UTILS';
import {StatContainer} from '../../../../components/StatContainer/StatContainer';
import {
  STAT_LABEL_COLOR,
  REPLACE_COLOR,
  BATHROOM_COLOR,
  PRIMARY_DARK_COLOR,
  NEXT_COLOR,
  NEXT_COLOR_DARK,
} from '../../../../style/COLOR';
import {GameBadge} from '../../../../components/GameBadge/GameBadge';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';
import goGameCheck from '../../../../navigation/navigators/GameCheck';

const arena_logo = require('../../../../assets/img/aqua_palace.gif');
const replace_icon = require('../../../../assets/img/replace.png');

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
      <Animated.View style={styles.currentGameContainer}>
        <Subtitle2 style={styles.currentGameContainerTitle}>
          Reto actual:
        </Subtitle2>
        <TouchableScale
          tension={100}
          friction={1}
          onPress={() => goGameCheck()}>
          <StatContainer
            style={styles.gameCardContainer}
            contentStyle={styles.gameCardContainerContent}
            borderStyle={{backgroundColor: STAT_LABEL_COLOR}}
            styleJr={styles.gameCardContainerJr}>
            <Subtitle2 style={styles.gameCardContainerBadgesTitle}>
              Di adios a las toallitas humedas
            </Subtitle2>
            <View style={styles.gameCardContainerBadgesContainer}>
              <GameBadge
                color={REPLACE_COLOR}
                logo={replace_icon}
                style={styles.gameCardContainerBadge}
              />
              <GameBadge
                color={BATHROOM_COLOR}
                logo={replace_icon}
                style={styles.gameCardContainerBadge}
              />
              <GameBadge
                color={PRIMARY_DARK_COLOR}
                logo={replace_icon}
                style={styles.gameCardContainerBadge}
              />
            </View>
          </StatContainer>
        </TouchableScale>
      </Animated.View>
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
        topColor={NEXT_COLOR}
        middleColor={NEXT_COLOR_DARK}
        onPress={() => toggle_visibility(true)}
        cancel={loading}
        style={loading ? styles.cancelButton : styles.playButton}>
        {loading ? 'Cancel ' : 'Play'}
      </ColorButton>
    </View>
  );
};

export default Body;
