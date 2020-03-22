import React, {useRef, Fragment, useState} from 'react';
import {View, Image} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Navigation} from 'react-native-navigation';

import {styles} from './styles';
import {H5Title} from '../../../../components/H5Title/H5Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {popStack} from '../../../../navigation/navigators/stackUtils';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {normalize} from '../../../../style/UTILS';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';
import {useStoreState, useStoreActions} from '../../../../state/store';
import {Photo} from '../../../../components/Photo/Photo';
import {LoadingSkeleton} from '../../../../components/LoadingSkeleton/LoadingSkeleton';

const supriseLogo = require('../../../../assets/img/logo_suprise.png');
interface HeaderType {
  componentId: string;
  title: string;
}

const Header: React.FC<HeaderType> = ({componentId, title}) => {
  const {photos} = useStoreState(state => state.photos);
  let {deletePhoto, showPhotoMenu} = useStoreActions(i => i.photos);

  const _onPressDelete = (index: number) => {
    deletePhoto({index});
  };
  const _onLongPress = (index: number, show: boolean) => {
    showPhotoMenu({index, show});
  };
  console.log(photos, '.....');

  let ref = useRef(null);
  return (
    <View style={styles.constainer}>
      <MiniButton
        onPress={() => {
          popStack(componentId);
        }}
        iconName={'arrow-left-drop-circle'}
        style={styles.back}>
        Volver
      </MiniButton>
      <Navigation.Element elementId="headergamedescription">
        <H5Title>{title}</H5Title>
      </Navigation.Element>
      <H6Title style={styles.descriptionLabel}>Algunas fotos.</H6Title>

      {photos.length > 0 ? (
        <Carousel
          ref={ref}
          data={photos}
          renderItem={(item, props) => {
            return Photo(item, props, _onPressDelete, _onLongPress);
          }}
          sliderWidth={normalize(320)}
          sliderHeight={normalize(160)}
          hasParallaxImages
          containerCustomStyle={{flex: 1}}
          itemWidth={normalize(210)}
        />
      ) : (
        <LoadingSkeleton
          loading={false}
          style={{
            width: normalize(210),
            height: normalize(160),
            alignSelf: 'center',
          }}>
          <Fragment>
            <H6Title style={styles.noPhotosTitle}>
              No se encontro ninguna foto
            </H6Title>
            <Image source={supriseLogo} style={styles.noPhotosImage} />
          </Fragment>
        </LoadingSkeleton>
      )}
      <Subtitle2>
        Esto es opcional, pero te ayudara a obtener mas monedas al finalizar el
        reto. (Max 10 fotos)
      </Subtitle2>
    </View>
  );
};

export default Header;
