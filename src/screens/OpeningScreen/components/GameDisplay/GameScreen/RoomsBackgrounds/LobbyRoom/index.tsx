import React, { memo, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  gameDisplayHeight,
  tileSize,
  VERTICAL_TILE_COUNT,
  windowWidth,
} from '../../..';

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

  const findPlayerPositionWithOffset = (offsetY: number, offsetX: number) => {
    /**
     * defaultOffsetY et X correspondent à largeur/hauteur de l'écran noir qu'on verrait si le joueur était en position 0,0
     */
    const defaultOffsetY = VERTICAL_TILE_COUNT / 2 + 0.5 * tileSize;
    const defaultOffsetX = windowWidth / 2 - tileSize / 2;

    const Ycoordinate = Math.floor((defaultOffsetY - offsetY) / tileSize);
    const Xcoordinate = Math.floor((defaultOffsetX - offsetX) / tileSize);
    return `[${Ycoordinate}, ${Xcoordinate}]`;
  };

  useEffect(() => {
    setInitialOffsetX(
      goToInitialXOffset(playerDefaultPositionX, entrancePositionX),
    );
    findPlayerPositionWithOffset(initialOffsetY, initialOffsetX);
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
