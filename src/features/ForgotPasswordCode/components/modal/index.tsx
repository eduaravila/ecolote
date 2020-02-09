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
  setToken: (e: string) => void;
  email: string;
}

const RESTORE_PASSWORD_CODE_GQL = gql`
  query RestorePasswordCode($email: String!) {
    RestorePasswordCode(restorePasswordCodeInput: {email: $email}) {
      msg
      code
    }
  }
`;
const ModalCode: React.FC<modalType> = ({
  check = true,
  setCheck,
  updateStopWatch,
  setToken,
  email,
}) => {
  const [modalShow, setmodalShow] = useState<boolean>(false);
  const [inacativity, setinacativity] = useState<number>(10);
  
  

  let [
    restorePasswordCode,
    {
      data,
      loading: loadingRestorePasswordCode,
      error: errorRestorePasswordCode,
      networkStatus,
    },
  ] = useLazyQuery(RESTORE_PASSWORD_CODE_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: ({RestorePasswordCode}) => {
      setToken(RestorePasswordCode.msg);
      updateStopWatch(3);
      _toggle_modal();
    },
  });

  const _resend_verify_code = () => {
    restorePasswordCode({variables: {email}});
  };
  const _toggle_modal = () => {
    setmodalShow(prev => !prev);
    setCheck(false);
  };

  useEffect(() => {
    let intervalInactivity = setInterval(
      () => setinacativity(inacativity - 1),
      1000,
    );

    return () => clearTimeout(intervalInactivity);
  }, [inacativity]);

  return (
    <Modal
      isVisible={inacativity <= 0 && check}
      style={styles.container}
      animationIn={'bounce'}
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
          disabled={loadingRestorePasswordCode}
          style={styles.sendcodeButton}
          onPress={_resend_verify_code}>
          Resend code to {email}
        </ButtonCustom>
      </View>
    </Modal>
  );
};
export {ModalCode};
