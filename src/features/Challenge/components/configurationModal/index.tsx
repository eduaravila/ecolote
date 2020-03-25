import React, {useState, useEffect, Fragment} from 'react';
import {View, Linking, Alert} from 'react-native';
import Modal from 'react-native-modal';
import InAppBrowser from 'react-native-inappbrowser-reborn';

import {normalize} from '../../../../style/UTILS';
import {styles} from './styles';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {ScrollView} from 'react-native-gesture-handler';
import {Overline} from '../../../../components/Overline/Overline';
import {HairLine} from '../../../../components/HairLine/HairLine';
import {CreditsModal} from '../creditsModal';
import {PRIMARY_COLOR} from '../../../../style/COLOR';
import {useStoreActions} from '../../../../state/store';
import goLogin from '../../../../navigation/navigators/Login';
import goAccess from '../../../../navigation/navigators/Access';

interface optionsType {
  show?: boolean;
  toggleShow: (e: boolean) => void;
  showCredits?: boolean;
  toggleShowCredits: (e: boolean) => void;
}

const ConfigurationModal: React.FC<optionsType> = ({
  show,
  toggleShow,
  showCredits,
  toggleShowCredits,
}) => {
  let {setMediaToken, setToken} = useStoreActions(state => state.credentials);

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
      <Modal
        isVisible={show}
        onBackButtonPress={() => {
          toggleShow(false);
        }}
        onBackdropPress={() => {
          toggleShow(false);
        }}
        animationIn={'bounceIn'}
        animationOut={'zoomOut'}
        style={styles.modalContainer}>
        <View style={styles.backdrop} />
        <CreditsModal
          show={showCredits}
          toggleShow={toggleShowCredits}
          openLink={openLink}
        />
        <View style={styles.titleContainer}>
          <H6Title style={styles.title}>Configuracion</H6Title>
          <MiniButton
            onPress={() => {
              toggleShow(false);
            }}
            iconName={'close-circle'}
            style={styles.back}>
            Salir
          </MiniButton>
        </View>
        <ScrollView style={styles.bodyContainer}>
          <View style={styles.socialContainer}>
            <MiniButton
              onPress={() => {
                openLink('https://discord.gg/wjBskqk');
              }}
              iconName={'discord'}
              style={styles.discordButtom}
              textStyle={{height: '100%'}}>
              Discord
            </MiniButton>
            <MiniButton
              onPress={() => {
                openLink('https://huevosrevueltos.com.mx/');
              }}
              style={styles.blogButtom}
              textStyle={{height: '100%'}}>
              Blog
            </MiniButton>
          </View>
          <View style={styles.socialContainer}>
            <MiniButton
              onPress={() => {}}
              style={styles.blogButtom}
              textStyle={{height: '100%', fontSize: normalize(12)}}>
              Terminos & Condiciones
            </MiniButton>
            <MiniButton
              onPress={() => {
                Alert.alert(
                  'Estas seguro?',
                  'estas a punto de cerrar sesion',
                  [
                    {
                      style: 'default',
                      text: 'Cerrar sesion',
                      onPress: () => {
                        toggleShow(false);
                        setMediaToken({token: ''});
                        setToken({token: ''});
                        goAccess();
                      },
                    },
                    {
                      style: 'default',
                      text: 'Cancelar',
                      onPress: () => {},
                    },
                  ],
                  {cancelable: true, onDismiss: () => {}},
                );
              }}
              style={styles.logOutButtom}
              textStyle={{height: '100%', fontSize: normalize(12)}}>
              Cerrar Sesion
            </MiniButton>
          </View>
          <HairLine />
          <View>
            <MiniButton
              onPress={() => {
                toggleShowCredits(true);
              }}
              style={styles.creditsButtom}
              textStyle={{height: '100%'}}>
              Creditos
            </MiniButton>
            <Overline>1.0</Overline>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};
export {ConfigurationModal};
