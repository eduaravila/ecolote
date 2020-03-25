import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, RefreshControl, Image, Linking, Alert} from 'react-native';
import Modal from 'react-native-modal';

import {normalize} from '../../../../style/UTILS';
import {styles} from './styles';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {ScrollView} from 'react-native-gesture-handler';

import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {Caption} from '../../../../components/Caption/Caption';
import {PRIMARY_COLOR} from '../../../../style/COLOR';
const logo_image = require('../../../../assets/img/logo_happy_stars.png');

interface optionsType {
  show?: boolean;

  toggleShow: (e: boolean) => void;
  openLink: (e: string) => void;
}

const CreditsModal: React.FC<optionsType> = ({show, toggleShow, openLink}) => {
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

        <View style={styles.titleContainer}>
          <H6Title style={styles.title}>Creditos</H6Title>
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
          <Image source={logo_image} style={styles.logo} />

          <View style={styles.socialContainer}>
            <Subtitle1>Creado por, Dirigida y Desarrollada:</Subtitle1>
            <H6Title style={styles.killer}>Eduardo Avila</H6Title>
          </View>
          <Subtitle1>Ponte en contacto</Subtitle1>
          <View style={styles.bottomContainer}>
            <MiniButton
              onPress={() => {
                openLink(
                  'https://www.linkedin.com/in/eduardo-avila-mancilla-b8ab4a164/',
                );
              }}
              iconName={'linkedin'}
              style={styles.linkedlButtom}
              textStyle={{height: '100%'}}>
              Linkedin
            </MiniButton>
            <MiniButton
              onPress={() => {
                openLink('https://github.com/YOURMATADOR');
              }}
              iconName={'git'}
              style={styles.webButtom}
              textStyle={{height: '100%'}}>
              GitHub
            </MiniButton>
          </View>
        </ScrollView>
        <Caption style={styles.footer}>
          Creada con mucho amor 💝, evita el exeso.
        </Caption>
      </Modal>
    </View>
  );
};
export {CreditsModal};
