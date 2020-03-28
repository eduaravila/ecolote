import React, {useState, useEffect} from 'react';
import {View, Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

import {Caption} from '../../../../components/Caption/Caption';
import {styles} from './styles';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_FORGOT_PASSWORD_EMAIL} from '../../../../navigation/screen_names';
import {footerTypes} from './types';
import goAccess from '../../../../navigation/navigators/Access';
import {PRIMARY_COLOR} from '../../../../style/COLOR';

const Footer: React.FC<footerTypes> = ({componentId}) => {
  const openLink = async (url: string = 'https://www.google.com') => {
    try {
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: PRIMARY_COLOR,
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'overFullScreen',
          modalTransitionStyle: 'partialCurl',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: PRIMARY_COLOR,
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          headers: {
            'my-custom-header': 'my custom header value',
          },
        });
      } else Linking.openURL(url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Caption
        style={[styles.boldText, styles.forgotPasswordText]}
        onPress={() => pushStack(componentId, ECOLOTE_FORGOT_PASSWORD_EMAIL)}>
        Olvidaste tu contraseña?
      </Caption>
      <Caption style={styles.captionTop}>
        Aun no tienes una cuenta en Ecolote?
        {'\n'}
        <Caption style={styles.captionBold} onPress={goAccess}>
          Registrate!{' '}
        </Caption>
      </Caption>
      <Caption>
        Al utilizar Ecolote aceptas nuestros{' '}
        <Caption
          style={styles.captionUndeline}
          onPress={() => {
            openLink('http://www.ecolote.com/termsconditions');
          }}>
          Terminos & condiciones
        </Caption>
      </Caption>
    </View>
  );
};
export default Footer;
