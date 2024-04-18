import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { white } from '../../../../../../../assets/AnimationOpening/stylesColorsCode';
import { getPlayerPosition } from './playerPositionHelpers';

const PlayerPositionIndicatorComponent = ({
  offsetY,
  offsetX,
}: {
  offsetY: number;
  offsetX: number;
}) => {
  const {
    currentTileYArrayCoordinate,
    currentTileXArrayCoordinate,
    currentTileAllocation,
  } = getPlayerPosition(offsetY, offsetX);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        [{currentTileYArrayCoordinate}, {currentTileXArrayCoordinate},
        {currentTileAllocation}]
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 5,
  },
  text: {
    color: white,
  },
});
export const PlayerPositionIndicator = memo(PlayerPositionIndicatorComponent);
