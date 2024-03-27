import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  HORIZONTAL_TILE_COUNT,
  TILE_SIZE,
  VERTICAL_TILE_COUNT,
} from '../../..';
import { GameScreenTypes } from '../..';
import { PlayerPositionIndicator } from '../../PlayerPositionIndicator';
import { useLobbyRoom } from './useLobbyRoom';

const LobbyRoomComponent = ({ isPressed }: GameScreenTypes) => {
  const { OffsetY, OffsetX } = useLobbyRoom(isPressed);

  return (
    <>
      <FastImage
        style={[
          styles.image,
          {
            top: OffsetY,
            left: OffsetX,
          },
        ]}
        source={require('../../../../../../../../assets/RoomsBackgrounds/LobbyRoom/LobbyRoom.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
      <PlayerPositionIndicator Xcoordinate={OffsetX} Ycoordinate={OffsetY} />
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
