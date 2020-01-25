import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {styles} from './styles';
import HeaderPhrase from '../../../../components/HeaderPhrase/HeaderPhrase';

const logo_image = require('../../../../assets/img/logo_suprise.png');

const ModalCode: React.FC = () => {
  const [modalShow, setmodalShow] = useState<boolean>(true);

  const _toggle_modal = () => {
    console.log('====================================');
    console.log('presss');
    console.log('====================================');
    setmodalShow(prev => !prev);
  };
  return (
    <Modal
      isVisible={modalShow}
      style={styles.container}
      swipeDirection={['up', 'left', 'right', 'down']}
      onBackButtonPress={_toggle_modal}
      onBackdropPress={_toggle_modal}>
      <View style={styles.subContainer}>
        <HeaderPhrase
          style={styles.alertContainer}
          textStyle={styles.alertText}
          content={"You haven't received your code yet?"}
          image={logo_image}
          imageStyle={styles.alertImage}
        />
        <ButtonCustom
          borderColor={'transparent'}
          fillColor={PRIMARY_DARK_COLOR}
          textColor={'white'}
          style={styles.sendcodeButton}
          onPress={() => {}}>
          Resend code to example@example.com
        </ButtonCustom>
      </View>
    </Modal>
  );
};
export {ModalCode};
