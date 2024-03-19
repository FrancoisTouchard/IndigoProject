import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { gameDisplayHeight, tileSize, windowWidth } from '../..';
import { GameScreenTypes } from '../';
import { usePlayerOrientation } from './usePlayerOrientation';

const PlayerComponent = ({ isPressed }: GameScreenTypes) => {
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

const styles = StyleSheet.create({
  image: {
    width: tileSize,
    height: tileSize,
    position: 'absolute',
    top: gameDisplayHeight / 2 - tileSize / 2,
    left: windowWidth / 2 - tileSize / 2,
  },
});
