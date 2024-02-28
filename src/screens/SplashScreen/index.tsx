import React, { memo } from 'react';

import { usePreloadImages } from '../GameDisplay/AnimationOpening/usePreloadImages';
import { SplashScreenComponentProps } from './types';

const SplashScreenComponent = (props: SplashScreenComponentProps) => {
  const { switchToOpeningScreen } = props;

  usePreloadImages(switchToOpeningScreen);

  return <></>;
};

export const SplashScreen = memo(SplashScreenComponent);
