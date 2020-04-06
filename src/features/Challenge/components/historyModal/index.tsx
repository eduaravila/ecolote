import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, RefreshControl, Image} from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';

import {normalize} from '../../../../style/UTILS';
import {styles} from './styles';
import {MEDIA_API} from 'react-native-dotenv';

import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import {HistoryCard} from '../../../../components/HistoryCard/HistoryCard';
import {useStoreState} from '../../../../state/store';
import {pushStackWithProps} from '../../../../navigation/navigators/stackUtils';

import ImageViewer from 'react-native-image-zoom-viewer';
import {STAT_LABEL_COLOR, PRIMARY_COLOR} from '../../../../style/COLOR';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';
import {HistoryDetailsModal} from '../historyDetailsModal';

interface dataType {
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
}

interface optionsType {
  show?: boolean;
  showZoom: boolean;
  showDetails: boolean;
  componentId: string;
  toggleShow: (e: boolean) => void;
  _toggleshowZoom: (e: boolean) => void;
  _toggleshowDetails: (e: boolean) => void;
  _refresh_history: () => void;
  get_more: () => void;
  loading: boolean;
  data: dataType[];
}

const HistoryModal: React.FC<optionsType> = ({
  show,
  toggleShow,
  data,
  loading,
  componentId,
  showZoom,
  _toggleshowZoom,
  showDetails,
  _toggleshowDetails,
  _refresh_history,
  get_more,
}) => {
  let {mediaToken} = useStoreState((state) => state.credentials);
  const [images, setImages] = useState<{url: string}[]>([]);
  const [currentDatailsData, setcurrentDatailsData] = useState<dataType>({});

  const [indexPhoto, setindexPhoto] = useState(0);

  const _onPressMedia = (index: number, indexPhoto: number) => {
    setindexPhoto(indexPhoto);
    setImages([
      ...data[index].media.map((i) => ({
        url: MEDIA_API + 'public/' + i + '/' + mediaToken,
      })),
    ]);
    _toggleshowZoom(true);
  };

  const _onPressDatails = (index: number) => {
    setcurrentDatailsData({...data[index]});
    _toggleshowDetails(true);
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
        <HistoryDetailsModal
          show={showDetails}
          toggleShow={_toggleshowDetails}
          data={currentDatailsData}
        />
        <Modal
          isVisible={showZoom}
          backdropOpacity={0}
          style={styles.modalContainer}
          onBackButtonPress={() => {
            _toggleshowZoom(false);
          }}
          onBackdropPress={() => {
            _toggleshowZoom(false);
          }}
          animationIn={'bounceIn'}
          animationOut={'zoomOut'}>
          <ImageViewer
            renderIndicator={(current, total) => (
              <View
                style={{
                  position: 'absolute',
                  top: normalize(60),
                  alignSelf: 'center',
                  width: '90%',
                }}>
                <H6Title
                  style={{
                    textAlign: 'center',
                    width: '100%',
                  }}>
                  Desliza para cambiar de imagen
                </H6Title>
                <Subtitle2
                  style={{
                    width: '100%',
                  }}>
                  {current} / {total}
                </Subtitle2>
              </View>
            )}
            saveToLocalByLongPress={false}
            imageUrls={images}
            style={styles.zoomModal}
            backgroundColor={STAT_LABEL_COLOR}
            index={indexPhoto}
            renderHeader={() => (
              <MiniButton
                onPress={() => {
                  _toggleshowZoom(false);
                }}
                iconName={'close-circle'}
                style={styles.backZoom}>
                Salir
              </MiniButton>
            )}
          />
        </Modal>
        <View style={styles.insideModalContainer}>
          <View style={styles.titleContainer}>
            <H6Title style={styles.title}>Historial</H6Title>
            <MiniButton
              onPress={() => {
                toggleShow(false);
              }}
              iconName={'close-circle'}
              style={styles.back}>
              Salir
            </MiniButton>
          </View>
          <View style={styles.historyContainer}>
            <View style={styles.historyContainerBackDrop} />
            {!data ||
              (data.length < 1 && (
                <View style={{height: '100%', flexDirection: 'column'}}>
                  <LottieView
                    source={require('../../../../assets/animations/empty.json')}
                    autoPlay
                    loop
                  />
                  <Subtitle2
                    style={{
                      position: 'absolute',
                      alignSelf: 'center',
                      bottom: normalize(30),
                      fontFamily: 'Rubik-Bold',
                    }}>
                    No se encontro ningun reto
                  </Subtitle2>
                </View>
              ))}
            <FlatList
              refreshControl={
                <RefreshControl
                  onRefresh={_refresh_history}
                  refreshing={loading}
                  colors={[PRIMARY_COLOR]}
                />
              }
              onEndReachedThreshold={0.7}
              onEndReached={() => {
                get_more();
              }}
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <HistoryCard
                    {...item}
                    mediaToken={mediaToken}
                    _onPressMedia={(e: number) => _onPressMedia(index, e)}
                    _onPressDetails={() => _onPressDatails(index)}
                  />
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export {HistoryModal};
