import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { DirectionalArrowProps } from './types';

const DirectionalArrowComponent = ({ arrowType }: DirectionalArrowProps) => {
  let arrowStyle;

  switch (arrowType) {
    case 'top':
      arrowStyle = styles.topArrow;
      break;
    case 'bottom':
      arrowStyle = styles.bottomArrow;
      break;
    case 'left':
      arrowStyle = styles.leftArrow;
      break;
    case 'right':
      arrowStyle = styles.rightArrow;
      break;
    default:
      break;
  }

  return (
    <View style={[styles.arrowContainer, arrowStyle]}>
      <FastImage
        style={styles.image}
        source={require('../../../../../assets/GameControls/arrow.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  arrowContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    height: '35%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  topArrow: {
    top: '10%',
    left: '33%',
    transform: [{ rotate: '180deg' }],
  },
  bottomArrow: {
    bottom: '10%',
    left: '33%',
  },
  leftArrow: {
    top: '33%',
    left: '10%',
    transform: [{ rotate: '90deg' }],
  },
  rightArrow: {
    top: '33%',
    right: '10%',
    transform: [{ rotate: '-90deg' }],
  },
});

export const DirectionalArrow = memo(DirectionalArrowComponent);
