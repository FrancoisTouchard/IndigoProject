import { useState } from 'react';

import { ArrowType } from './DirectionalArrow/types';
import { usePanResponder } from './usePanResponder';

export const useDirectionalCross = () => {
  const [isPressed, setIsPressed] = useState<ArrowType | false>(false);

  const setIsPressedOnce = (isPressedNewValue: ArrowType | false) => {
    setIsPressed(isPressedNewValue);
  };

  const { panResponder } = usePanResponder(setIsPressedOnce);

  return { isPressed, panResponder };
};
