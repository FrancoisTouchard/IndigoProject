import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';

import { gameDisplayHeight, tileSize, windowWidth } from '../..';
import { GameScreenTypes } from '../';
import { usePlayerOrientation } from './usePlayerOrientation';

const PlayerComponent = ({ isPressed }: GameScreenTypes) => {
  const styles = StyleSheet.create({
    image: {
      width: tileSize,
      height: tileSize,
      position: 'absolute',
      top: gameDisplayHeight / 2 - tileSize / 2,
      left: windowWidth / 2 - tileSize / 2,
    },
  });
  const { currentFramePath } = usePlayerOrientation(isPressed);

  return (
    <FastImage
      style={styles.image}
      source={currentFramePath as Source}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export const Player = memo(PlayerComponent);
