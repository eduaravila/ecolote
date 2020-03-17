import React, {useRef, useState} from 'react';
import {View, Image} from 'react-native';
import Carousel, {
  Pagination,
  getInputRangeFromIndexes,
} from 'react-native-snap-carousel';

import {styles} from './styles';
import {bodyTypes} from './types';
import {
  PHOTO_COLOR,
  PHOTO_COLOR_DARK,
  getRarityColor,
} from '../../../../style/COLOR';
import {GameStepper} from '../../../../components/GameStepper/GameStepper';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {H3Title} from '../../../../components/H3Title/H3Title';
import {normalize} from '../../../../style/UTILS';
const photo_logo = require('../../../../assets/img/camera.png');

const Body: React.FC<bodyTypes> = ({componentId, rarity}) => {
  return (
    <View style={styles.container}>
      <ColorButton
        topColor={PHOTO_COLOR}
        middleColor={PHOTO_COLOR_DARK}
        style={styles.takePhoto}>
        <H3Title style={{fontSize: normalize(70)}}>
          <Image source={photo_logo} style={styles.takePhotoLogo} />
        </H3Title>
      </ColorButton>
      <Subtitle1 style={styles.descriptionText}>
        ** Estas fotos se utilizaran, para entrenar nuestra red neuronal y asi
        poder validar los retos en base a las respuesta y experiencias de los
        usuarios
      </Subtitle1>
      <GameStepper
        size={3}
        active={3}
        activePointColor={getRarityColor(rarity.name).second}
        background={getRarityColor(rarity.name).first}
      />
    </View>
  );
};

export default Body;
