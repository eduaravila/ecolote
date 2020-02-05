import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {PRIMARY_DARK_COLOR} from '../../style/COLOR';

const StatusBarCustom: React.FC = () => {
  return (
    <StatusBar
      animated
      barStyle={'light-content'}
      backgroundColor={PRIMARY_DARK_COLOR}
    />
  );
};
export {StatusBarCustom};
