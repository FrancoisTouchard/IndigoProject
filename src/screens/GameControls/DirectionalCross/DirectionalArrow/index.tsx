import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { ARROW_CONTAINER_DIMENSIONS } from '..';
import { DirectionalArrowProps } from './types';

export const ARROW_DIMENSIONS = 75;

const DirectionalArrowComponent = ({
  arrowType,
  isPressed,
}: DirectionalArrowProps) => {
  let arrowStyle;

  switch (arrowType) {
    case 'up':
      arrowStyle = [styles.upArrow, { opacity: isPressed === 'up' ? 0.5 : 1 }];
      break;
    case 'down':
      arrowStyle = [
        styles.downArrow,
        { opacity: isPressed === 'down' ? 0.5 : 1 },
      ];
      break;
    case 'left':
      arrowStyle = [
        styles.leftArrow,
        { opacity: isPressed === 'left' ? 0.5 : 1 },
      ];
      break;
    case 'right':
      arrowStyle = [
        styles.rightArrow,
        { opacity: isPressed === 'right' ? 0.5 : 1 },
      ];
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
