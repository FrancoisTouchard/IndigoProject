import React, { memo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { black } from '../../../../../assets/AnimationOpening/stylesColorsCode';
import { AnimationOpening } from './AnimationOpening/index';
import { GameScreen } from './GameScreen';
import { IsPressedType } from './types';
import { GameState } from './useGameStateManager';

export const HORIZONTAL_TILE_COUNT = 16;
export const VERTICAL_TILE_COUNT = 14.3;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const TILE_SIZE = WINDOW_WIDTH / HORIZONTAL_TILE_COUNT;
export const GAME_DISPLAY_HEIGHT = TILE_SIZE * VERTICAL_TILE_COUNT;

interface GameDisplayComponentProps {
  gameState: GameState;
  isPressed: IsPressedType;
  offsetY: number;
  offsetX: number;
  playerCurrentInteraction: string | null;
  closeCurrentInteraction: () => void;
}

const GameDisplayComponent = ({
  gameState,
  isPressed,
  offsetY,
  offsetX,
  playerCurrentInteraction,
  closeCurrentInteraction,
}: GameDisplayComponentProps) => {
  return (
    <View style={styles.gameDisplayContainer}>
      <AnimationOpening gameState={gameState} />
      <GameScreen
        isPressed={isPressed}
        offsetY={offsetY}
        offsetX={offsetX}
        playerCurrentInteraction={playerCurrentInteraction}
        gameState={gameState}
        closeCurrentInteraction={closeCurrentInteraction}
      />
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
