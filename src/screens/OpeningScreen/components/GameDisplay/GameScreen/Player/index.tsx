import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { GAME_DISPLAY_HEIGHT, TILE_SIZE, WINDOW_WIDTH } from '../..';
import { GameScreenTypes } from '../';
import { GAP_FIXER_TILE } from '../RoomsBackgrounds/tileMapHelpers';
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
    width: TILE_SIZE,
    height: TILE_SIZE,
    position: 'absolute',
    top: GAME_DISPLAY_HEIGHT / 2 - GAP_FIXER_TILE,
    left: WINDOW_WIDTH / 2 - GAP_FIXER_TILE,
  },
});
