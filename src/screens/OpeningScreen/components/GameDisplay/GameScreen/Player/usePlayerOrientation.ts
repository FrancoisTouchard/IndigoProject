import { useEffect, useRef, useState } from 'react';
import { Source } from 'react-native-fast-image';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import {
  getPathConfigFromDirection,
  IMAGES_PATHS,
} from './services/getPathConfigFromDirection';

export const usePlayerOrientation = (isPressed: ArrowType | false) => {
  const [currentFramePath, setCurrentFramePath] = useState<Source['uri']>(
    IMAGES_PATHS.down.standby,
  );

  const isPressedPreviousValue = useRef<ArrowType | false>(false);

  const animatePlayerWithDirection = (orientation: ArrowType) => {
    const pathConfig = getPathConfigFromDirection(orientation);
    const animationFrames = [pathConfig.step1, pathConfig.step2];
    let isFirstFrame = true;

    // Animation de la marche en 2 frames
    const interval = setInterval(() => {
      setCurrentFramePath(
        isFirstFrame ? animationFrames[0] : animationFrames[1],
      );

      isFirstFrame = !isFirstFrame;
    }, 200);

    // Clear quand isPressed change
    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (isPressed) {
      isPressedPreviousValue.current = isPressed;
      setCurrentFramePath(getPathConfigFromDirection(isPressed).standby);

      const clearAnimation = animatePlayerWithDirection(isPressed);
      return clearAnimation;
    } else {
      // frame finale = standby dans la dernière direction utilisée
      setCurrentFramePath(
        getPathConfigFromDirection(isPressedPreviousValue.current).standby,
      );
      return undefined;
    }
  }, [isPressed]);

  return { currentFramePath };
};
