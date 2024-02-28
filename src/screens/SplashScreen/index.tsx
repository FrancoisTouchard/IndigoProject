import React from 'react';

import { usePreloadImages } from '../GameDisplay/AnimationOpening/usePreloadImages';
import { SplashScreenComponentProps } from './types';

export const SplashScreenComponent = (props: SplashScreenComponentProps) => {
  const { switchToOpeningScreen } = props;

  usePreloadImages(switchToOpeningScreen);

  return <></>;
};
