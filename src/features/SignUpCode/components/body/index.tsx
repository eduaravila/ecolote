import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {CodeInput} from '../../../../components/CodeInput/CodeInput';
import goSignUpSuccess from '../../../../navigation/navigators/SignUpSuccess';

interface bodyType {
  componentId: string;
}

const Body: React.FC<bodyType> = ({componentId}) => {
  return (
    <View style={styles.constainer}>
      <Subtitle1 style={styles.textLabel}>
        This is not your email? {'  '}
        <Subtitle1 style={[styles.textBold, styles.textUnderline]}>
          example@example.com
        </Subtitle1>
      </Subtitle1>
      <CodeInput size={6} />
      <Subtitle1 style={[styles.textLabel, styles.textBold]}>
        I did not receive the code
      </Subtitle1>
      <ButtonCustom
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.continuebutton}
        onPress={goSignUpSuccess}>
        Continue
      </ButtonCustom>
    </View>
  );
};

export default Body;
