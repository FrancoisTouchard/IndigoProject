import React, { memo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { white } from '../../../assets/AnimationOpening/stylesColorsCode';
import { OpeningScreen } from '../OpeningScreen';
import { SplashScreen } from '../SplashScreen';
import { useScreenManager } from './useScreenManager';

function ScreenManagerComponent(): React.JSX.Element {
  const { currentScreen, switchToOpeningScreen } = useScreenManager();

  return (
    <SafeAreaView style={styles.appContainer}>
      {currentScreen === 'Bootsplash' && (
        <SplashScreen switchToOpeningScreen={switchToOpeningScreen} />
      )}
      {currentScreen === 'OpeningScreen' && <OpeningScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: white,
  },
});

export const ScreenManager = memo(ScreenManagerComponent);
