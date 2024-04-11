import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { WINDOW_WIDTH } from '../../..';

const pcMenuOffset = WINDOW_WIDTH / 2;

const PcInteractionComponent = () => {
  return (
    <FastImage
      style={[
        styles.image,
        {
          left: pcMenuOffset,
        },
      ]}
      source={require('../../../../../../../../assets/MenusScreens/menuTemplateLarge.png')}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const PcInteraction = memo(PcInteractionComponent);
