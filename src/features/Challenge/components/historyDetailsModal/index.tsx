import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, RefreshControl, Image} from 'react-native';
import Modal from 'react-native-modal';
import {normalize} from '../../../../style/UTILS';
import {styles} from './styles';
import {MEDIA_API} from 'react-native-dotenv';
import moment from 'moment';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {HairLine} from '../../../../components/HairLine/HairLine';
import {ScrollView} from 'react-native-gesture-handler';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';

interface optionsType {
  show?: boolean;
  toggleShow: (e: boolean) => void;
  data: {
    total_time: string;
    end_date: string;
    _id: string;
    start_date: string;
    media: string[];
    Commentary: {
      commentary: string;
    };
    Points: {
      total: string;
      after24: string;
      rarity: string;
      completed: string;
      trophys: string;
      experience: string;
      grade: string;
      photos: string;
      commentary: string;
    };
    Challenge: {
      _id: string;
      title: string;
      points: string;
      description: string;
      portrait: string;
      arena: {
        name: string;
        portrait: string;
        description: string;
      };
      subtitle: string;
      badges: {
        type: {
          _id: string;
          name: string;
          image: string;
          color: string;
        };
        zone: {
          _id: string;
          name: string;
          image: string;
          color: string;
        };
        rarity: {
          _id: string;
          name: string;
          image: string;
          color: string;
        };
      };
    };
  };
}

const HistoryDetailsModal: React.FC<optionsType> = ({
  show,
  toggleShow,
  data,
}) => {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={show}
        // backdropOpacity={0}
        onBackButtonPress={() => {
          toggleShow(false);
        }}
        onBackdropPress={() => {
          toggleShow(false);
        }}
        animationIn={'bounceIn'}
        animationOut={'zoomOut'}
        style={styles.modalContainer}>
        {data.Challenge && (
          <Fragment>
            <View style={styles.backdrop} />
            <View style={styles.titleContainer}>
              <H6Title style={styles.title}>Detalles</H6Title>
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
              <View style={styles.descriptionText}>
                <Subtitle1 style={styles.challengeTitle}>
                  {data.Challenge.title}
                </Subtitle1>
              </View>
              <View style={styles.descriptionText}>
                <Subtitle1 style={styles.left}>Iniciado:</Subtitle1>
                <Subtitle1 style={styles.right}>
                  {moment(data.start_date, 'YYYY-MM-DD/HH:mm:ZZ').format(
                    'DD/MM/YYYY',
                  )}
                </Subtitle1>
              </View>
              <View style={styles.descriptionText}>
                <Subtitle1 style={styles.left}>Finalizado:</Subtitle1>
                <Subtitle1 style={styles.right}>
                  {moment(data.end_date, 'YYYY-MM-DD/HH:mm:ZZ').format(
                    'DD/MM/YYYY',
                  )}
                </Subtitle1>
              </View>
              {data.Commentary && (
                <View style={styles.descriptionText}>
                  <Subtitle1 style={styles.left}>Comentario:</Subtitle1>
                  <Subtitle1 style={styles.right}>
                    {data.Commentary.commentary}
                  </Subtitle1>
                </View>
              )}
              <View style={styles.descriptionText}>
                <Subtitle1 style={styles.left}>Hrs:</Subtitle1>
                <Subtitle1 style={styles.right}>
                  {(+data.total_time / 60).toFixed(2)}
                </Subtitle1>
              </View>

              <HairLine />
              <View style={styles.descriptionText}>
                <Subtitle1 style={styles.left}>Completado:</Subtitle1>
                <Subtitle1 style={styles.right}>
                  {data.Points.completed}
                </Subtitle1>
              </View>
              <View style={styles.descriptionText}>
                <Subtitle1 style={styles.left}>Antes de 24h:</Subtitle1>
                <Subtitle1 style={styles.right}>
                  {data.Points.after24}
                </Subtitle1>
              </View>
              <View style={styles.descriptionText}>
                <Subtitle1 style={styles.left}>
                  {data.Challenge.badges.rarity.name}:
                </Subtitle1>
                <Subtitle1 style={styles.right}>{data.Points.rarity}</Subtitle1>
              </View>
              <Subtitle1 style={styles.bonus}>
                X{data.Points.photos} foto
              </Subtitle1>
              <Subtitle1 style={styles.bonus}>
                X{data.Points.commentary} Experiencia
              </Subtitle1>
              <HairLine />
              <Subtitle1 style={styles.total}>{data.Points.total}</Subtitle1>
              <Subtitle1 style={styles.grade}>
                Grado {data.Points.grade}
              </Subtitle1>
            </ScrollView>
          </Fragment>
        )}
      </Modal>
    </View>
  );
};
export {HistoryDetailsModal};
