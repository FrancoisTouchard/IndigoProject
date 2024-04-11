import React, { memo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { black } from '../../../../../assets/AnimationOpening/stylesColorsCode';
import { AnimationOpening } from './AnimationOpening/index';
import { GameScreen } from './GameScreen';
import { GameDisplayComponentProps } from './types';

export const HORIZONTAL_TILE_COUNT = 16;
export const VERTICAL_TILE_COUNT = 14.3;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const TILE_SIZE = WINDOW_WIDTH / HORIZONTAL_TILE_COUNT;
export const GAME_DISPLAY_HEIGHT = TILE_SIZE * VERTICAL_TILE_COUNT;

const GameDisplayComponent = ({
  gameState,
  isPressed,
  playerCurrentInteraction,
}: GameDisplayComponentProps) => {
  return (
    <View style={styles.gameDisplayContainer}>
      {gameState === 'AnimationOpening' ? (
        <AnimationOpening />
      ) : (
        <GameScreen
          isPressed={isPressed}
          playerCurrentInteraction={playerCurrentInteraction}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gameDisplayContainer: {
    width: WINDOW_WIDTH,
    height: GAME_DISPLAY_HEIGHT,
    backgroundColor: black,
  },
});

export const GameDisplay = memo(GameDisplayComponent);
