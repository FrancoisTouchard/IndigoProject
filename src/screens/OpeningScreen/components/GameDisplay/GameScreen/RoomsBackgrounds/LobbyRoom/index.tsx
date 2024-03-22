import React, { memo, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { gameDisplayHeight, tileSize } from '../../..';

export const playerDefaultPositionX = 8;
export const entrancePositionX = 7;
export const initialOffsetY =
  -1 * (gameDisplayHeight - tileSize * 2 - tileSize / 2);

const LobbyRoomComponent = () => {
  const [initialOffsetX, setInitialOffsetX] = useState(0);

  const goToInitialXOffset = (
    playerPositionX: number,
    startingTilePositionX: number,
  ) => {
    const offsetToApply = playerPositionX - startingTilePositionX;
    return -1 * (tileSize * offsetToApply) - tileSize / 2;
  };

  const styles = StyleSheet.create({
    image: {
      flex: 1,
      position: 'absolute',
      top: initialOffsetY,
      right: initialOffsetX,
      bottom: 0,
      left: 0,
    },
  });

  useEffect(() => {
    setInitialOffsetX(
      goToInitialXOffset(playerDefaultPositionX, entrancePositionX),
    );
  }, []);

  return (
    <FastImage
      style={styles.image}
      source={require('../../../../../../../../assets/RoomsBackgrounds/LobbyRoom/LobbyRoom.png')}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export const LobbyRoom = memo(LobbyRoomComponent);
