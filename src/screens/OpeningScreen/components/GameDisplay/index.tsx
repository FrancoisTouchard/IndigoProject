import React, { memo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { black } from '../../../../../assets/AnimationOpening/stylesColorsCode';
import { ArrowType } from '../GameControls/DirectionalCross/DirectionalArrow/types';
import { AnimationOpening } from './AnimationOpening/index';
import { GameScreen } from './GameScreen';
import { GameStatesTypes } from './useGameStateManager';

export interface GameDisplayComponentProps {
  gameState: GameStatesTypes;
  isPressed: ArrowType | false;
}

export const HORIZONTAL_TILE_COUNT = 16;
export const VERTICAL_TILE_COUNT = 14.3;

export const windowWidth = Dimensions.get('window').width;
export const tileSize = windowWidth / HORIZONTAL_TILE_COUNT;

export const gameDisplayHeight = tileSize * VERTICAL_TILE_COUNT;

const GameDisplayComponent = ({
  gameState,
  isPressed,
}: GameDisplayComponentProps) => {
  return (
    <View style={styles.gameDisplayContainer}>
      {gameState === 'AnimationOpening' ? (
        <AnimationOpening />
      ) : (
        <GameScreen isPressed={isPressed} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gameDisplayContainer: {
    width: '100%',
    height: gameDisplayHeight,
    backgroundColor: black,
  },
});

export const GameDisplay = memo(GameDisplayComponent);
