import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {gql} from 'apollo-boost';
import {useLazyQuery} from '@apollo/react-hooks';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

import {H5Title} from '../../../../components/H5Title/H5Title';
import {ButtonCustom} from '../../../../components/Button/Button';
import {GOOGLE_SIGN_UP_COLOR, FACEBOOK_COLOR} from '../../../../style/COLOR';
import {styles} from './styles';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {bodyTypes} from './types';
import {ECOLOTE_SIGN_UP_EMAIL} from '../../../../navigation/screen_names';
import {useStoreActions} from '../../../../state/store';
import goDashboard from '../../../../navigation/navigators/Dashboard';

const LOGIN_GOOGLE_GQL = gql`
  query LoginGoogle($token: String!) {
    LoginGoogle(token: $token) {
      token
      media
      code
    }
  }
`;

const LOGIN_FACEBOOK_GQL = gql`
  query LoginFacebook($token: String!) {
    LoginFacebook(token: $token) {
      token
      media
      code
    }
  }
`;

const Body: React.FC<bodyTypes> = ({componentId}) => {
  console.log(componentId);
  let {setMediaToken, setToken} = useStoreActions(state => state.credentials);

  let [LoginGoogle, {data, loading, error, networkStatus}] = useLazyQuery(
    LOGIN_GOOGLE_GQL,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'network-only',
      onCompleted: e => {
        let {LoginGoogle} = e;
        setMediaToken({token: LoginGoogle.media});
        setToken({token: LoginGoogle.token});
        goDashboard();
      },
      onError: e => {
        console.log(e);
      },
    },
  );

  let [
    LoginFacebook,
    {
      data: data_facebook,
      loading: loading_facebook,
      error: error_facebook,
      networkStatus: networkStatus_facebook,
    },
  ] = useLazyQuery(LOGIN_FACEBOOK_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: e => {
      let {LoginFacebook} = e;
      setMediaToken({token: LoginFacebook.media});
      setToken({token: LoginFacebook.token});
      goDashboard();
    },
    onError: e => {
      console.log(e);
    },
  });
  // Somewhere in your code
  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const userInfo = await GoogleSignin.signIn();
      LoginGoogle({variables: {token: userInfo.idToken}});
    } catch (error) {
      if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Ya estas intentando ingresar 🤧');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        await GoogleSignin.hasPlayServices({
          showPlayServicesUpdateDialog: true,
        });
      }
    }
  };

  const signInFacebook = async () => {
    try {
      let result = await LoginManager.logInWithPermissions(['public_profile']);
      AccessToken.getCurrentAccessToken().then((data: any) => {
        LoginFacebook({variables: {token: data.accessToken.toString()}});
      });
    } catch (error) {
      Alert.alert('Algo no funciono de acuerdo a los planes 🤧');
    }
  };

  return (
    <View>
      <H5Title style={styles.title}>{'Bievenido a\nEcolote'}</H5Title>
      <ButtonCustom
        borderColor={'transparent'}
        iconName="google"
        iconColor="black"
        fillColor={GOOGLE_SIGN_UP_COLOR}
        textColor={'black'}
        style={styles.button}
        onPress={signInGoogle}
        iconStyle={styles.google_icon}>
        Continuar con Google
      </ButtonCustom>
      <ButtonCustom
        iconName="facebook"
        fillColor={FACEBOOK_COLOR}
        style={styles.button}
        onPress={signInFacebook}
        borderColor={'transparent'}>
        Continuar con Facebook
      </ButtonCustom>
      <ButtonCustom
        style={styles.button}
        onPress={() => pushStack(componentId!, ECOLOTE_SIGN_UP_EMAIL)}>
        Registrate GRATIS!
      </ButtonCustom>
    </View>
  );
};

export default Body;
