import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {gql} from 'apollo-boost';
import {useLazyQuery} from '@apollo/react-hooks';

import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {styles} from './styles';
import HeaderPhrase from '../../../../components/HeaderPhrase/HeaderPhrase';

const logo_image = require('../../../../assets/img/logo_suprise.png');

interface modalType {
  check: boolean;
  setCheck: (e: boolean) => void;
  updateStopWatch: (e: number) => void;
  username: string;
  setToken: (e: string) => void;
  email: string;
}

const RESEND_VERIFY_CODE = gql`
  query ResendVerifyCode($username: String!) {
    ResendVerifyCode(resendCodeInfo: {username: $username}) {
      msg
      code
    }
  }
`;

const ModalCode: React.FC<modalType> = ({
  check = true,
  setCheck,
  updateStopWatch,
  username,
  setToken,
  email,
}) => {
  const [modalShow, setmodalShow] = useState<boolean>(false);
  const [inacativity, setinacativity] = useState<number>(10);

  let [resendVerifyCode, {loading}] = useLazyQuery(RESEND_VERIFY_CODE, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: ({ResendVerifyCode}) => {
      setToken(ResendVerifyCode.msg);
      updateStopWatch(3);
      _toggle_modal();
    },
    onError: () => {
      updateStopWatch(0.1);
      _toggle_modal();
    },
  });

  const _toggle_modal = () => {
    setmodalShow(prev => !prev);
    setCheck(false);
  };

  const _resend_verify_code = () => {
    resendVerifyCode({variables: {username}});
  };

  useEffect(() => {
    let intervalInactivity = setInterval(
      () => setinacativity(inacativity - 1),
      10000,
    );

    return () => clearTimeout(intervalInactivity);
  }, [inacativity]);

  return (
    <Modal
      hideModalContentWhileAnimating
      useNativeDriver
      isVisible={inacativity <= 0 && check}
      style={styles.container}
      animationIn={'bounce'}
      onBackButtonPress={_toggle_modal}
      onBackdropPress={_toggle_modal}>
      <View style={styles.subContainer}>
        <HeaderPhrase
          style={styles.alertContainer}
          textStyle={styles.alertText}
          content={'Aun no recibes el codigo?'}
          image={logo_image}
          imageStyle={styles.alertImage}
        />
        <ButtonCustom
          borderColor={'transparent'}
          fillColor={PRIMARY_DARK_COLOR}
          textColor={'white'}
          disabled={loading}
          style={styles.sendcodeButton}
          onPress={_resend_verify_code}>
          Reenviar el codigo a {email}
        </ButtonCustom>
      </View>
    </Modal>
  );
};
export {ModalCode};
