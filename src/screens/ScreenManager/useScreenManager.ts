import { useState } from 'react';

import { ScreenManagerStateScreenName } from './types';

const useScreenManager = () => {
  const [currentScreen, setCurrentScreen] =
    useState<ScreenManagerStateScreenName>('Bootsplash');

  const switchToOpeningScreen = () => {
    setCurrentScreen('OpeningScreen');
  };

  return { currentScreen, switchToOpeningScreen };
};

export { useScreenManager };
