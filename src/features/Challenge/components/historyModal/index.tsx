import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, RefreshControl, Image} from 'react-native';
import Modal from 'react-native-modal';
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
import {STAT_LABEL_COLOR} from '../../../../style/COLOR';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';
import {H5Title} from '../../../../components/H5Title/H5Title';
interface optionsType {
  show?: boolean;
  showZoom: boolean;
  componentId: string;
  toggleShow: (e: boolean) => void;
  _toggleshowZoom: (e: boolean) => void;
  loading: boolean;
  data: {
    _id: string;
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
  }[];
}

const HistoryModal: React.FC<optionsType> = ({
  show,
  toggleShow,
  data,
  loading,
  componentId,
  showZoom,
  _toggleshowZoom,
}) => {
  let {mediaToken} = useStoreState(state => state.credentials);
  const [images, setImages] = useState<{url: string}[]>([]);
  const [indexPhoto, setindexPhoto] = useState(0);
  const _onPressMedia = (index: number, indexPhoto: number) => {
    setindexPhoto(indexPhoto);
    setImages([
      ...data[index].media.map(i => ({
        url: MEDIA_API + 'public/' + i + '/' + mediaToken,
      })),
    ]);
    _toggleshowZoom(true);
  };

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
        <Modal
          isVisible={showZoom}
          backdropOpacity={0}
          style={styles.modalContainer}
          // backdropOpacity={0}
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
          <MiniButton
            onPress={() => {
              toggleShow(false);
            }}
            iconName={'close-circle'}
            style={styles.back}>
            Salir
          </MiniButton>
          <H6Title style={styles.title}>Historial</H6Title>

          <View style={styles.historyContainer}>
            <FlatList
              refreshControl={
                <RefreshControl
                  // onRefresh={get_maintenances_and_reset}
                  refreshing={loading}
                />
              }
              onEndReachedThreshold={0.001}
              onEndReached={() => {
                // if (!this.onEndReachedCalledDuringMomentum) {
                //   get_maintenances();
                //   this.onEndReachedCalledDuringMomentum = true;
                // }
              }}
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <HistoryCard
                    {...item}
                    mediaToken={mediaToken}
                    _onPressMedia={(e: number) => _onPressMedia(index, e)}
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
