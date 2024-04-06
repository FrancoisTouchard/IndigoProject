import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { white } from '../../../../../../../assets/AnimationOpening/stylesColorsCode';
import { COLLISION_OVERLAP_IN_PIXELS } from '../RoomsBackgrounds/LobbyRoom/LobbyRoomMap';
import { findTileAllocation } from '../RoomsBackgrounds/tileAllocationHelpers';
import { findPlayerPositionWithOffset } from '../RoomsBackgrounds/tileMapHelpers';

const PlayerPositionIndicatorComponent = ({
  offsetY,
  offsetX,
}: {
  offsetY: number;
  offsetX: number;
}) => {
  const { currentTileYArrayCoordinate, currentTileXArrayCoordinate } =
    findPlayerPositionWithOffset(
      offsetY + COLLISION_OVERLAP_IN_PIXELS,
      offsetX - COLLISION_OVERLAP_IN_PIXELS,
    );

  const currentTileAllocation = findTileAllocation(
    currentTileYArrayCoordinate,
    currentTileXArrayCoordinate,
  );

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
