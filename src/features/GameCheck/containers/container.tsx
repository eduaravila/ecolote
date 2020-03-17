import React, {useRef} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn} from '../../../style/UTILS';
import {StatusBar} from 'react-native';
import {pushStackWithProps} from '../../../navigation/navigators/stackUtils';
import {
  ECOLOTE_GAME_DESCRIPTION,
  ECOLOTE_GAME_COMENTARY,
} from '../../../navigation/screen_names';

interface GameCheckType {
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

const GameCheck: React.FC<GameCheckType> = props => {
  return (
    <GradientBackgroundNormal
      rarity={props.Challenge.badges.rarity.name}
      style={{paddingLeft: getColumn(0.5), paddingRight: getColumn(0.5)}}>
      <StatusBar backgroundColor={props.Challenge.badges.rarity.color} />
      <Header
        portrait={props.Challenge.portrait}
        title={props.Challenge.title}
      />
      <Body
        componentId={props.componentId}
        subtitle={props.Challenge.subtitle}
        type={props.Challenge.badges.type}
        zone={props.Challenge.badges.zone}
        rarity={props.Challenge.badges.rarity}
        onPressMore={() =>
          pushStackWithProps(
            props.componentId,
            ECOLOTE_GAME_DESCRIPTION,
            {...props.Challenge, justRead: true},
            {
              customTransition: {
                animations: [
                  {
                    type: 'sharedElement',
                    fromId: 'headergame',
                    toId: 'headergamedescription',
                    startDelay: 0,
                    springVelocity: 0.2,
                    duration: 0.5,
                  },
                ],
                duration: 0.8,
              },
            },
          )
        }
      />
      <Footer
        componentId={props.componentId}
        onPress={() =>
          pushStackWithProps(props.componentId, ECOLOTE_GAME_COMENTARY, {
            ...props,
          })
        }
      />
    </GradientBackgroundNormal>
  );
};

export default GameCheck;
