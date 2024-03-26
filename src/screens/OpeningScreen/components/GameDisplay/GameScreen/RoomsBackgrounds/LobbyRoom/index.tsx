import React, { memo, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  HORIZONTAL_TILE_COUNT,
  TILE_SIZE,
  VERTICAL_TILE_COUNT,
} from '../../..';
import {
  findPlayerPositionWithOffset,
  goToInitialOffsetX,
  goToInitialOffsetY,
} from '../tileMapHelpers';

export const PLAYER_DEFAULT_POSITION_X = 9;
export const ENTRANCE_POSITION_X = 8;

const LobbyRoomComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialOffsetY, setInitialOffsetY] = useState(goToInitialOffsetY());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialOffsetX, setInitialOffsetX] = useState(
    goToInitialOffsetX(PLAYER_DEFAULT_POSITION_X, ENTRANCE_POSITION_X),
  );

  useEffect(() => {
    findPlayerPositionWithOffset(initialOffsetY, initialOffsetX);
  }, []);

  return (
    <FastImage
      style={[
        styles.image,
        {
          top: initialOffsetY,
          left: initialOffsetX,
        },
      ]}
      source={require('../../../../../../../../assets/RoomsBackgrounds/LobbyRoom/LobbyRoom.png')}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: HORIZONTAL_TILE_COUNT * TILE_SIZE,
    height: VERTICAL_TILE_COUNT * TILE_SIZE,
  },
});

export const LobbyRoom = memo(LobbyRoomComponent);
