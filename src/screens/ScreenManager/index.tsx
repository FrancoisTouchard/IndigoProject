import { white } from 'assets/AnimationOpening/stylesColorsCode';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import OpeningScreen from '../OpeningScreen';
import { SplashScreenComponent } from '../SplashScreen';
import { useScreenManager } from './useScreenManager';

function ScreenManager(): React.JSX.Element {
  const { currentScreen, switchToOpeningScreen } = useScreenManager();

  return (
    <SafeAreaView style={styles.appContainer}>
      {currentScreen === 'Bootsplash' && (
        <SplashScreenComponent switchToOpeningScreen={switchToOpeningScreen} />
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

export default ScreenManager;
