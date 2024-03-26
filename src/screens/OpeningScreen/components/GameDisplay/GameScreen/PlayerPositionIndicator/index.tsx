import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { white } from '../../../../../../../assets/AnimationOpening/stylesColorsCode';
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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        [{YCoordinateTile}, {XCoordinateTile}]
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
