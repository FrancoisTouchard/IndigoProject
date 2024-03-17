import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { GameScreenTypes } from '../..';

const PlayerComponent = ({
  tileSize,
  windowWidth,
  gameDisplayHeight,
}: GameScreenTypes) => {
  const styles = StyleSheet.create({
    image: {
      width: tileSize,
      height: tileSize,
      position: 'absolute',
      top: (gameDisplayHeight - tileSize * 2) / 2, // tileSize * 2 pour inclure les espacements verticaux
      left: (windowWidth - tileSize) / 2,
    },
  });
  return (
    <FastImage
      style={styles.image}
      source={require('../../../../../../../../assets/Characters/Player/RedStandbyFace.png')}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export const Player = memo(PlayerComponent);
