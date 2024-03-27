import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { white } from '../../../../../../../assets/AnimationOpening/stylesColorsCode';
import {
  LOBBYROOM_MAP_Y_COUNT,
  LobbyRoomMap,
} from '../RoomsBackgrounds/LobbyRoom/LobbyRoomMap';
import { findPlayerPositionWithOffset } from '../RoomsBackgrounds/tileMapHelpers';

const PlayerPositionIndicatorComponent = ({
  Xcoordinate,
  Ycoordinate,
}: {
  Xcoordinate: number;
  Ycoordinate: number;
}) => {
  const { Ycoordinate: YCoordinateTile, Xcoordinate: XCoordinateTile } =
    findPlayerPositionWithOffset(Ycoordinate, Xcoordinate);

  let currentTileAllocation = null;
  if (YCoordinateTile >= 0 && YCoordinateTile <= LOBBYROOM_MAP_Y_COUNT - 1) {
    const tabIndexY = LOBBYROOM_MAP_Y_COUNT - YCoordinateTile - 1;
    currentTileAllocation = LobbyRoomMap[tabIndexY][XCoordinateTile];
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        [{YCoordinateTile}, {XCoordinateTile} {currentTileAllocation}]
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
