import { useEffect, useRef, useState } from 'react';

import { ArrowType } from './DirectionalArrow/types';
import { usePanResponder } from './usePanResponder';

export const useDirectionalCross = () => {
  const [isPressed, setIsPressed] = useState<ArrowType | false>(false);
  const isPressedPreviousValue = useRef<ArrowType | false>(isPressed);

  const setIsPressedOnce = (isPressedNewValue: ArrowType | false) => {
    setIsPressed(isPressedNewValue);
  };

  const { panResponder } = usePanResponder(setIsPressedOnce);

  useEffect(() => {
    if (isPressed) {
      isPressedPreviousValue.current = isPressed;
    }
  }, [isPressed]);

  return { isPressed, panResponder, isPressedPreviousValue };
};
