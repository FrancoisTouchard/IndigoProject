import { useEffect, useRef, useState } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { GameState } from '../../useGameStateManager';
import {
  getPathConfigFromDirection,
  IMAGES_PATHS,
} from './services/getPathConfigFromDirection';

const STEP_DURATION = 200;

export const usePlayerOrientation = (
  isPressed: ArrowType | false,
  gameState: GameState,
) => {
  const [currentFramePath, setCurrentFramePath] = useState<number>(
    IMAGES_PATHS.up.standby,
  );

  const isPressedPreviousValue = useRef<ArrowType | false>(false);

  const animatePlayerWithDirection = (orientation: ArrowType) => {
    const pathConfig = getPathConfigFromDirection(orientation);
    const animationFrames = [pathConfig.step1, pathConfig.step2];
    let isFirstFrame = true;

    setCurrentFramePath(pathConfig.standby);

    const interval = setInterval(() => {
      setCurrentFramePath(
        isFirstFrame ? animationFrames[0] : animationFrames[1],
      );

      isFirstFrame = !isFirstFrame;
    }, STEP_DURATION);

    /**
     * Clear quand isPressed change
     */
    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (isPressed && !gameState.isPaused) {
      isPressedPreviousValue.current = isPressed;
      const clearAnimation = animatePlayerWithDirection(isPressed);

      /**
       * quand le composant disparait, on clear l'interval
       */
      return clearAnimation;
    } else {
      setCurrentFramePath(
        getPathConfigFromDirection(isPressedPreviousValue.current).standby,
      );

      return;
    }
  }, [isPressed, gameState.isPaused]);

  return { currentFramePath };
};
