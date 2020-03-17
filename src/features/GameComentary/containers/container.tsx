import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';

import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn} from '../../../style/UTILS';
import {StatusBar} from 'react-native';
import {ECOLOTE_GAME_GALLERY} from '../../../navigation/screen_names';
import {pushStackWithProps} from '../../../navigation/navigators/stackUtils';

interface GameComentaryTypes {
  componentId: string;
  Challenge: {
    _id: string;
    title: string;
    description: string[];
    portrait: string;
    subtitle: string;
    badges: {
      type: {
        _id: string;
        name: string;
        image: string;
      };
      zone: {
        _id: string;
        name: string;
        image: string;
      };
      rarity: {
        _id: string;
        color: string;
        name: string;
        image: string;
      };
    };
  };
}

interface commentaryForm {
  commentary?: any;
}

const GameComentary: React.FC<GameComentaryTypes> = props => {
  const {
    register,
    setValue,
    handleSubmit,
    errors,
    getValues,
    reset,
  } = useForm();

  const _set_value = (
    name: string,
    value: string,
    validate: boolean = true,
  ): void => {
    setValue(name, value, validate);
  };

  const validate_inputs = ({commentary}: commentaryForm) => {
    pushStackWithProps(props.componentId, ECOLOTE_GAME_GALLERY, {
      ...props,
      commentary: commentary ? commentary : '',
    });
  };

  return (
    <GradientBackgroundNormal
      rarity={props.Challenge.badges.rarity.name}
      style={{paddingLeft: getColumn(0.5), paddingRight: getColumn(0.5)}}>
      <StatusBar backgroundColor={props.Challenge.badges.rarity.color} />
      <Header
        componentId={props.componentId}
        _set_value={_set_value}
        register={register}
        error={errors.commentary}
      />
      <Body
        componentId={props.componentId}
        rarity={props.Challenge.badges.rarity}
      />
      <Footer
        componentId={props.componentId}
        onPress={() => handleSubmit(validate_inputs)()}
      />
    </GradientBackgroundNormal>
  );
};

export default GameComentary;
