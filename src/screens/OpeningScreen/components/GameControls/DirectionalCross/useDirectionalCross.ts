import { useEffect, useRef, useState } from 'react';

import { IsPressedType } from '../../GameDisplay/types';
import { ArrowType } from './DirectionalArrow/types';
import { usePanResponder } from './usePanResponder';

export const useDirectionalCross = (isGameStatePaused: boolean) => {
  const [isPressed, setIsPressed] = useState<IsPressedType>(false);
  /**
   * playerOrientation initialisé à up = position par défaut initiale
   */
  const playerOrientation = useRef<false | ArrowType>('up');

  const setAButtonIsPressed = () => {
    setIsPressed('A');
  };

  const setBButtonIsPressed = () => {
    setIsPressed('B');
  };

  const resetIsPressedState = () => {
    setIsPressed(false);
  };

  const { panResponder } = usePanResponder(setIsPressed);

  useEffect(() => {
    const isArrowPressed =
      isPressed &&
      (isPressed === 'down' ||
        isPressed === 'up' ||
        isPressed === 'left' ||
        isPressed === 'right');
    if (isArrowPressed && !isGameStatePaused) {
      playerOrientation.current = isPressed;
    }
  }, [isPressed]);

  return {
    isPressed,
    panResponder,
    playerOrientation,
    setAButtonIsPressed,
    setBButtonIsPressed,
    resetIsPressedState,
  };
};
