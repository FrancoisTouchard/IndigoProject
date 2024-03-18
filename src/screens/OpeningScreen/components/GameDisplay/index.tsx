import React, { memo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { black } from '../../../../../assets/AnimationOpening/stylesColorsCode';
import { AnimationOpening } from './AnimationOpening/index';
import { GameScreen } from './GameScreen';
import { GameStatesTypes } from './useGameStateManager';

interface GameDisplayComponentProps {
  gameState: GameStatesTypes;
}

const HORIZONTAL_TILE_COUNT = 16;
const VERTICAL_TILE_COUNT = 14.3;

const windowWidth = Dimensions.get('window').width;
const tileSize = windowWidth / HORIZONTAL_TILE_COUNT;

const gameDisplayHeight = tileSize * VERTICAL_TILE_COUNT;

const GameDisplayComponent = ({ gameState }: GameDisplayComponentProps) => {
  return (
    <View style={styles.gameDisplayContainer}>
      {gameState === 'AnimationOpening' ? (
        <AnimationOpening />
      ) : (
        <GameScreen
          tileSize={tileSize}
          windowWidth={windowWidth}
          gameDisplayHeight={gameDisplayHeight}
        />
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
