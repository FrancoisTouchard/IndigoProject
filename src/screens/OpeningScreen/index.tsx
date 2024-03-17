import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { GameControls } from './components/GameControls';
import { useDirectionalCross } from './components/GameControls/DirectionalCross/useDirectionalCross';
import { GameDisplay } from './components/GameDisplay';
import { useGameStateManager } from './components/GameDisplay/useGameStateManager';

const OpeningScreenComponent = () => {
  const { gameState, redirectToGameScreen } = useGameStateManager();
  const { panResponder } = useDirectionalCross();

  return (
    <View style={styles.gameAndControlsContainer}>
      <GameDisplay gameState={gameState} />
      <GameControls
        redirectToGameScreen={redirectToGameScreen}
        panResponder={panResponder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gameAndControlsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});

export const OpeningScreen = memo(OpeningScreenComponent);
