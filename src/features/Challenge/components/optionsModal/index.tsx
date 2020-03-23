import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {normalize} from '../../../../style/UTILS';
import {styles} from './styles';
import {
  PRIMARY_DARK_COLOR,
  STAT_LABEL_COLOR,
  PRIMARY_COLOR,
} from '../../../../style/COLOR';
import {MiniStateContainer} from '../../../../components/MiniStatContainer/MiniStatContainer';
import {Overline} from '../../../../components/Overline/Overline';
const config_image = require('../../../../assets/img/cog.png');
const history_image = require('../../../../assets/img/history.png');

interface optionsType {
  show: boolean;
  toggleShow: (e: boolean) => void;
  onPressHistory: (e: boolean) => void;
}

const OptionsModal: React.FC<optionsType> = ({
  show,
  toggleShow,
  onPressHistory,
}) => {
  return (
    <View>
      <Modal
        isVisible={show}
        backdropOpacity={0}
        animationIn={'bounceIn'}
        animationOut={'zoomOut'}
        style={styles.modalContainer}
        onBackdropPress={() => toggleShow(false)}>
        <View style={{backgroundColor: PRIMARY_COLOR}}>
          <MiniStateContainer
            onPress={() => {
              onPressHistory(true);
            }}
            icon={history_image}
            style={styles.buttomContainer}>
            <Overline style={styles.buttomText}>Historial</Overline>
          </MiniStateContainer>
          <MiniStateContainer
            onPress={() => {}}
            icon={config_image}
            style={styles.buttomContainer}>
            <Overline style={styles.buttomText}>Configuracion</Overline>
          </MiniStateContainer>
        </View>
      </Modal>
    </View>
  );
};
export {OptionsModal};
