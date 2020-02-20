import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {REPLACE_COLOR, REPLACE_COLOR_DARK} from '../../../../style/COLOR';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  pushStack,
  pushStackWithProps,
} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_GAME_DESCRIPTION} from '../../../../navigation/screen_names';

interface FooterType {
  componentId: string;
}

const Footer: React.FC<FooterType> = ({componentId}) => {
  return (
    <View style={styles.container}>
      <ColorButton
        style={styles.go}
        onPress={() =>
          pushStackWithProps(
            componentId,
            ECOLOTE_GAME_DESCRIPTION,
            {},
            {
              customTransition: {
                animations: [
                  {
                    type: 'sharedElement',
                    fromId: 'headergame',
                    toId: 'headergamedescription',
                    startDelay: 0,
                    springVelocity: 0.2,
                    duration: 0.5,
                  },
                ],
                duration: 0.8,
              },
            },
          )
        }>
        Vamos!
      </ColorButton>
      <ColorButton
        topColor={REPLACE_COLOR}
        middleColor={REPLACE_COLOR_DARK}
        style={styles.another}>
        <Icon name={'refresh'} style={styles.anotherText} />
      </ColorButton>
    </View>
  );
};

export default Footer;
