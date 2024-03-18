import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { GameScreenTypes } from '../';
import { usePlayerOrientation } from './usePlayerOrientation';

const PlayerComponent = ({
  tileSize,
  windowWidth,
  gameDisplayHeight,
  isPressed,
}: GameScreenTypes) => {
  const styles = StyleSheet.create({
    image: {
      width: tileSize,
      height: tileSize,
      position: 'absolute',
      top: (gameDisplayHeight - tileSize) / 2,
      left: (windowWidth - tileSize) / 2,
    },
  });
  const { currentFramePath } = usePlayerOrientation(isPressed);

  return (
    <FastImage
      style={styles.image}
      source={currentFramePath}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export const Player = memo(PlayerComponent);
