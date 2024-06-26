import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { GAME_DISPLAY_HEIGHT, TILE_SIZE, WINDOW_WIDTH } from '../..';
import { IsPressedType } from '../../types';
import { GameState } from '../../useGameStateManager';
import { TILE_SIZE_HALVED } from '../RoomsBackgrounds/LobbyRoom/LobbyRoomMap';
import { usePlayerOrientation } from './usePlayerOrientation';

interface PlayerProps {
  isPressed: IsPressedType;
  gameState: GameState;
}

const PlayerComponent = ({ isPressed, gameState }: PlayerProps) => {
  const { currentFramePath } = usePlayerOrientation(isPressed, gameState);

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
    top: GAME_DISPLAY_HEIGHT / 2 - TILE_SIZE_HALVED,
    left: WINDOW_WIDTH / 2 - TILE_SIZE_HALVED,
  },
});
