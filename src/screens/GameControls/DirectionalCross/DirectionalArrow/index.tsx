import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { ARROW_CONTAINER_DIMENSIONS } from '..';
import { DirectionalArrowProps } from './types';

export const ARROW_DIMENSIONS = 75;

const DirectionalArrowComponent = ({ arrowType }: DirectionalArrowProps) => {
  let arrowStyle;

  switch (arrowType) {
    case 'up':
      arrowStyle = styles.upArrow;
      break;
    case 'down':
      arrowStyle = styles.downArrow;
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
    <View style={[styles.arrowContainer, arrowStyle]} pointerEvents="none">
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
    width: ARROW_DIMENSIONS,
    height: ARROW_DIMENSIONS,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  upArrow: {
    top: 0,
    left: ARROW_CONTAINER_DIMENSIONS / 2 - ARROW_DIMENSIONS / 2,
    transform: [{ rotate: '180deg' }],
  },
  downArrow: {
    bottom: 0,
    left: ARROW_CONTAINER_DIMENSIONS / 2 - ARROW_DIMENSIONS / 2,
  },
  leftArrow: {
    left: 0,
    top: ARROW_CONTAINER_DIMENSIONS / 2 - ARROW_DIMENSIONS / 2,
    transform: [{ rotate: '90deg' }],
  },
  rightArrow: {
    right: 0,
    top: ARROW_CONTAINER_DIMENSIONS / 2 - ARROW_DIMENSIONS / 2,
    transform: [{ rotate: '-90deg' }],
  },
});

export const DirectionalArrow = memo(DirectionalArrowComponent);
