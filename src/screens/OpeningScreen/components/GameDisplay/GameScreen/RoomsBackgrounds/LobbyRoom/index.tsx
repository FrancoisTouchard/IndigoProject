import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  HORIZONTAL_TILE_COUNT,
  TILE_SIZE,
  VERTICAL_TILE_COUNT,
} from '../../..';
import { PlayerPositionIndicator } from '../../PlayerPositionIndicator';
import { useLobbyRoom } from './useLobbyRoom';

const LobbyRoomComponent = () => {
  const { initialOffsetY, initialOffsetX } = useLobbyRoom();

  return (
    <>
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
      <PlayerPositionIndicator
        Xcoordinate={initialOffsetX}
        Ycoordinate={initialOffsetY}
      />
    </>
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
