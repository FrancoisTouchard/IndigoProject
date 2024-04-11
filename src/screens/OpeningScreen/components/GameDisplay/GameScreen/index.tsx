import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { ArrowType } from '../../GameControls/DirectionalCross/DirectionalArrow/types';
import { Player } from './Player';
import { PlayerCurrentInteraction } from './PlayerCurrentInteraction';
import { LobbyRoom } from './RoomsBackgrounds/LobbyRoom';

export interface GameScreenTypes {
  isPressed: ArrowType | false;
}

const GameScreenComponent = ({
  isPressed,
  playerCurrentInteraction,
}: GameScreenTypes & { playerCurrentInteraction: string | null }) => {
  return (
    <View style={styles.container}>
      <LobbyRoom isPressed={isPressed} />
      <Player isPressed={isPressed} />
      {playerCurrentInteraction && (
        <PlayerCurrentInteraction
          playerCurrentInteraction={playerCurrentInteraction}
          isPressed={isPressed}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const GameScreen = memo(GameScreenComponent);
