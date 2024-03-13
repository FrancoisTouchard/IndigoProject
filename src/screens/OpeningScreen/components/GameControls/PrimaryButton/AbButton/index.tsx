import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { AbButtonProps } from './types';

const AbButtonComponent = ({ buttonType }: AbButtonProps) => {
  const imageSource =
    buttonType === 'A'
      ? require('../../../../../../../assets/GameControls/buttonA.png')
      : require('../../../../../../../assets/GameControls/buttonB.png');

  return (
    <FastImage
      style={styles.image}
      source={imageSource}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export const AbButton = memo(AbButtonComponent);
