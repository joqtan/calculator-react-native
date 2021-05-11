import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  widen?: boolean;
  action: (numberText: string) => void;
}

const ButtonCalc = ({
  text,
  color = '#2d2d2d',
  widen = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => action(text)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...style.button,
          backgroundColor: color,
          width: widen ? 180 : 80,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...style.textButton,
            color: color === '#9b9b9b' ? '#000' : '#fff',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;
